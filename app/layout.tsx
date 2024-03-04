import { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Wrapper from "@/components/wrapper";

const inter = Inter({ subsets: ["latin"] });
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Jim Alpez | Personal Portfolio",
  description: "Jim Alpez is a Frontend developer with 2 years of experience.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-blue-50 dark:bg-sky-950 text-primary dark:text-blue-50 tracking-wider`}>
        <Wrapper>{children}</Wrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
