"use client";

import Link from "next/link";
import { easeInOut, motion } from "framer-motion";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "@/context/theme-context";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`text-center pt-10 ${
        theme === "light"
          ? "text-primary bg-blue-50"
          : "text-blue-50 bg-primary"
      }`}>
      <div className="w-full max-w-lg mx-auto px-4 py-10 space-y-12">
        <Link href="/" className="text-4xl font-bold">
          jim<span className="text-secondary">.dev</span>
        </Link>

        <div>
          <div className="text-2xl flex items-center justify-center pb-4">
            <motion.a
              whileHover={{
                scale: 1.2,
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
              transition={{
                ease: easeInOut,
              }}
              href="https://www.facebook.com/JimAlpez/"
              target="_blank"
              className={`h-12 w-12 grid place-items-center rounded-full ${
                theme === "light" ? "hover:text-primary" : "hover:text-blue-50"
              }`}>
              <FaFacebookF />
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.2,
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
              transition={{
                ease: easeInOut,
              }}
              href="https://ph.linkedin.com/in/jim-alpez"
              target="_blank"
              className={`h-12 w-12 grid place-items-center rounded-full ${
                theme === "light" ? "hover:text-primary" : "hover:text-blue-50"
              }`}>
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.2,
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
              transition={{
                ease: easeInOut,
              }}
              href="https://github.com/JimAlpez"
              target="_blank"
              className={`h-12 w-12 grid place-items-center rounded-full ${
                theme === "light" ? "hover:text-primary" : "hover:text-blue-50"
              }`}>
              <FaGithub />
            </motion.a>
          </div>

          <p className="text-sm">
            <span className="font-semibold">About this website:</span> built
            with React & Next.js (App Router & Server Actions), TypeScript,
            Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
          </p>
        </div>

        <p className="text-xs">&copy; 2024 Jim. All rights reserved.</p>
      </div>
    </footer>
  );
}
