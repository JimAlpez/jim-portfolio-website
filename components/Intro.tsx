"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import JimAlpez from "@/public/jim-alpez.png";
import Background from "@/public/background-intro.jpg";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { RiBlazeLine } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import Section from "./section";

export default function Intro() {
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

        <div className="md:min-h-screen flex flex-col lg:flex-row-reverse items-center justify-between w-full max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: 2.8,
              },
            }}
            className="flex-1"
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
          <div className="flex-1 space-y-6">
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
                    delay: 2.8,
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
                    delay: 2.9,
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
                  delay: 2.9,
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
                  delay: 2.9,
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
                  delay: 3,
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
                    delay: 2.9,
                  },
                }}
                whileHover={{
                  scale: 1.2,
                }}
                whileTap={{
                  scale: 1,
                }}
                className="group w-fit relative">
                <RiBlazeLine className="text-2xl absolute -top-5 -right-5 rotate-[30deg]" />
                <Link
                  href="#contact"
                  className="hover:shadow-lg bg-primary dark:bg-blue-50 text-blue-50 dark:text-primary font-medium px-6 py-3 rounded flex items-center gap-2"
                  onClick={() => {
                    setActiveSection("Contact");
                    setTimeOfLastClick(Date.now());
                  }}>
                  <BiSolidMessageRoundedDots className="text-2xl animate-bounce group-hover:animate-none" />{" "}
                  Let&apos;s Talk
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}>
            <Image
              src={JimAlpez}
              alt="Jim Alpez"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}>
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <span className="font-bold">Hello, I&apos;m Jim.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}>
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}>
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/CV.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10">
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:tex-gray-950 active:scale-105 transition cursor-pointer border border-black/10">
          <BsLinkedin />
        </a>

        <a
          href="https://github.com"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:tex-gray-950 active:scale-105 transition cursor-pointer border border-black/10">
          <FaGithubSquare />
        </a>
      </motion.div> */}
      </Section>
    </div>
  );
}
