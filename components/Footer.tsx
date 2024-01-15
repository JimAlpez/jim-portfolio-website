"use client";

import { easeInOut, motion } from "framer-motion";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="w-full max-w-5xl mx-auto">
        <hr className="border-primary/70 dark:border-blue-50/70" />
      </div>
      <footer className="w-full max-w-5xl mx-auto px-4 py-10 text-center text-primary/70 dark:text-blue-50/70 space-y-2">
        <div className="text-2xl flex items-center justify-center pb-4">
          <motion.a
            whileHover={{
              scale: 1.2,
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
            transition={{
              ease: easeInOut,
            }}
            href="#"
            target="_blank"
            className="hover:text-primary dark:hover:text-blue-50 h-12 w-12 grid place-items-center rounded-full">
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
            href="#"
            target="_blank"
            className="hover:text-primary dark:hover:text-blue-50 h-12 w-12 grid place-items-center rounded-full">
            <FaInstagram />
          </motion.a>
        </div>
        <small className="text-xs">&copy; 2024 Jim. All rights reserved.</small>
        <p className="text-xs">
          <span className="font-semibold">About this website:</span> built with
          React & Next.js (App Router & Server Actions), TypeScript, Tailwind
          CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </p>
      </footer>
    </>
  );
}
