import { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Wrapper from "@/components/wrapper";

const inter = Inter({ subsets: ["latin"] });
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Jim | Personal Portfolio",
  description: "Jim is a full-stack developer with 2 years of experience.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-blue-50 text-primary relative dark:bg-sky-950 dark:text-blue-50 tracking-wider`}>
        {/* <div className="bg-gray-100 -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-rose-100 -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div> */}

        <Wrapper>{children}</Wrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
