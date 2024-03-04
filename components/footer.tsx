"use client";

import Link from "next/link";
import { easeInOut, motion } from "framer-motion";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center bg-blue-100 dark:bg-sky-900">
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
