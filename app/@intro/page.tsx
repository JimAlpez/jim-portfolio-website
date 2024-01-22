"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import JimAlpez from "@/public/jim-alpez.png";
import Background from "@/public/background-intro.jpg";
import { useActiveSectionContext } from "@/context/active-section-context";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { RiBlazeLine } from "react-icons/ri";
import Section from "@/components/section";

export default function IntroSection() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <div className="relative overflow-hidden">
      <Section sectionView="Home" id="home">
        <Image
          src={Background}
          alt="Intro Background"
          quality={95}
          className="-z-10 w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0"></Image>

        <div className="-z-10 absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-blue-50/70 via-blue-100/70 to-blue-200/70 dark:from-sky-800/70 dark:via-sky-900/70 dark:to-sky-950/70"></div>

        <div className="min-h-screen flex flex-col lg:flex-row-reverse items-center justify-between w-full max-w-5xl mx-auto">
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
            className="flex-1 pt-28 md:pt-0"
            viewport={{ once: true, amount: 0.8 }}>
            <Image
              src={JimAlpez}
              alt="Jim Alpez"
              width={500}
              height={500}
              quality={95}
              priority={true}
              className="w-9/12 mx-auto rounded-full shadow-lg bg-blue-500/[0.03]"
            />
          </motion.div>
          <div className="flex-1 space-y-6 p-6 md:-0">
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
                <span className="w-7 md:w-9 lg:w-12 h-[2px] rounded-full bg-primary"></span>{" "}
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
                <span className="text-primary dark:text-blue-50">Alpez</span>
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
              className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Frontend <span className="text-secondary">Web Developer</span>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              voluptatum, quo quae possimus neque amet repellendus eos qui
              accusamus
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
              className="dark:border-blue-100 border-primary"
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
                  className="hover:shadow-lg bg-primary hover:bg-secondary dark:bg-blue-50 text-blue-50 hover:text-blue-50 dark:text-primary font-medium px-6 py-3 rounded flex items-center gap-2"
                  onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                  }}>
                  <BiSolidMessageRoundedDots className="text-2xl animate-bounce group-hover:animate-none" />{" "}
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
