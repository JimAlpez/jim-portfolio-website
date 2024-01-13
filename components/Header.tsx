"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="z-[999] fixed top-0 left-0 right-0 shadow-lg bg-blue-100/30 dark:bg-primary/30 shadow-black/[0.03] backdrop-blur-[0.5rem] py-4 px-6">
      <div className="flex flex-col md:flex-row items-center flex-wrap justify-between w-full max-w-5xl mx-auto">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="text-2xl font-bold">
            jim<span className="text-secondary">.dev</span>
          </Link>
          <button
            onClick={() => setShow(!show)}
            className={`grid place-items-center ${
              isMobile ? "block" : "hidden"
            }`}>
            <svg width="18" height="18" viewBox="0 0 18 18">
              <Path
                stroke={show ? "#3888c4" : "#0f3155"}
                d={show ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5"}
              />
              <Path
                stroke={show ? "transparent" : "#0f3155"}
                d="M 2 9.423 L 20 9.423"
              />
              <Path
                stroke={show ? "#3888c4" : "#0f3155"}
                d={show ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346"}
              />
            </svg>
          </button>
        </div>

        <nav className="font-medium overflow-hidden">
          <ul
            className={`flex flex-wrap flex-col md:flex-row items-center justify-end gap-4 transition-all duration-500 ${
              isMobile
                ? show
                  ? "mt-0 opacity-100"
                  : "-mt-72 opacity-0"
                : "mt-0 opacity-100"
            }`}>
            {links.map((link) => (
              <li
                key={link.hash}
                className="relative flex items-center justify-center">
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center hover:text-secondary p-1 transition",
                    {
                      "text-secondary font-semibold":
                        activeSection === link.name,
                    },
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}>
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="h-[0.17rem] rounded-full bg-secondary absolute bottom-0 left-0 right-0 -z-10"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}></motion.span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}

type PathProps = {
  d: string;
  stroke: string;
};
const Path = ({ d, stroke }: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={stroke}
    strokeLinecap="round"
    animate={{
      d: d,
    }}
  />
);
