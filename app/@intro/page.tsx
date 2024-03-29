"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import JimAlpez from "@/public/jim-alpez.png";
import Background from "@/public/background-intro.jpg";
import { useActiveSectionContext } from "@/context/active-section-context";
import { AiOutlineMessage } from "react-icons/ai";
import { RiBlazeLine } from "react-icons/ri";
import Section from "@/components/section";
import { useTheme } from "@/context/theme-context";

export default function IntroSection() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme } = useTheme();

  return (
    <div className="relative overflow-hidden">
      <Section sectionView="Home" id="home">
        <Image
          src={Background}
          alt="Intro Background"
          quality={95}
          className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0"></Image>

        <div
          className={`absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br ${
            theme === "light"
              ? "from-blue-50/70 via-blue-100/70 to-blue-200/70"
              : "from-sky-800/70 via-sky-900/70 to-sky-950/70"
          }`}></div>

        <div className="min-h-screen flex flex-col md:flex-row-reverse items-center justify-between gap-y-5 w-full max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: 1.8,
              },
            }}
            viewport={{ once: true, amount: 0.8 }}
            className="z-10 flex-1 pt-28 md:pt-0">
            <Image
              src={JimAlpez}
              alt="Jim Alpez"
              width={500}
              height={500}
              quality={95}
              priority={true}
              className="w-[320px] h-[430px] lg:w-[366px] lg:h-[500px] object-cover mx-auto rounded-[183px] border-l-2 border-t-2 border-secondary/20 shadow-lg bg-primary/[0.05]"
            />
          </motion.div>
          <div className="z-10 flex-1 space-y-6 p-6 mb-8 md:mb-0">
            <h1 className="space-y-1">
              <motion.span
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8,
                    delay: 1.8,
                  },
                }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold flex items-center gap-2">
                <span
                  className={`w-7 md:w-9 lg:w-12 h-[2px] rounded-full ${
                    theme === "light" ? "bg-primary" : "bg-blue-50"
                  }`}></span>{" "}
                Hi!, I&apos;m
              </motion.span>{" "}
              <motion.span
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8,
                    delay: 1.9,
                  },
                }}
                className="block text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent drop-shadow-lg">
                <span className="text-stroke-secondary">Jim</span>{" "}
                <span
                  className={
                    theme === "light" ? "text-primary" : "text-blue-50"
                  }>
                  Alpez
                </span>
              </motion.span>
            </h1>
            <motion.h3
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                  delay: 1.9,
                },
              }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-secondary">
              {/* <Typewriter
                options={{
                  strings: ["Wordpress Developer", "React (Next.js)"],
                  autoStart: true,
                  loop: true,
                }}
              /> */}
              <span
                className={theme === "light" ? "text-primary" : "text-blue-50"}>
                Frontend
              </span>{" "}
              Web developer
            </motion.h3>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                  delay: 1.9,
                },
              }}>
              Passionate about React.js and Next.js magic! I specialize in
              crafting sleek, dynamic interfaces, turning ideas into
              pixel-perfect reality. Thriving on seamless web app development,
              let&apos;s exceed expectations together!
            </motion.p>
            <motion.hr
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 1.5,
                  delay: 2,
                },
              }}
              className={
                theme === "light" ? "border-primary" : "border-blue-100"
              }
            />
            <div className="pt-5">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8,
                    delay: 1.9,
                  },
                }}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 1,
                }}
                className="group w-fit relative">
                <RiBlazeLine className="text-2xl absolute -top-5 -right-5 rotate-[30deg] animate-pulse group-hover:animate-none" />
                <Link
                  href="#contact"
                  className={`hover:shadow-lg hover:bg-secondary hover:text-blue-50 font-medium px-6 py-3 rounded flex items-center gap-2 ${
                    theme === "light"
                      ? "text-blue-50 bg-primary"
                      : "text-primary bg-blue-50"
                  }`}
                  onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                  }}>
                  <AiOutlineMessage className="text-2xl animate-bounce group-hover:animate-none" />{" "}
                  Get in touch
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
