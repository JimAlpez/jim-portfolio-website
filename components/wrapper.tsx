"use client";

import { ReactNode, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";

import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SplashScreen from "./splash-screen";

type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isHome) {
      setIsLoading(true);
    }
  }, [isHome]);

  return (
    <>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <ThemeSwitch />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
      {isLoading && isHome && (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      )}
    </>
  );
}
