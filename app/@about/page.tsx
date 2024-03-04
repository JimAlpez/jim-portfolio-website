"use client";

import { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { INTEREST_DATA } from "@/lib/data";
import ImageSlideshow from "@/components/image-slideshow";
import SectionHeading from "@/components/section-heading";
import Section from "@/components/section";
import { FiUser } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineDownload } from "react-icons/ai";

export default function AboutSection() {
  return (
    <Section sectionView="About" id="about">
      <div className="flex items-center flex-col md:flex-row gap-10 px-4 py-20">
        <div className="flex-1 h-full w-full grid place-items-center">
          <div className="h-[20rem] w-full px-5">
            <ImageSlideshow />
          </div>
        </div>
        <div className="flex-1">
          <SectionHeading
            primaryText="About"
            secondaryText="Me"
            shadowText="Resume"
          />
          <div className="space-y-12 overflow-hidden lg:overflow-visible">
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.4,
                },
              }}
              viewport={{ once: true }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              magnam, et ex ullam eligendi officiis nemo iure consequuntur dolor
              quod, accusamus quisquam optio odio eveniet. Nisi ab sunt sint
              doloribus!
            </motion.p>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.4,
                },
              }}
              viewport={{ once: true }}
              className="flex items-center gap-12">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <FiUser className="text-secondary text-2xl" />{" "}
                  <span className="font-semibold">Name</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone className="text-secondary text-2xl" />{" "}
                  <span className="font-semibold">Phone</span>
                </div>
                <div className="flex items-center gap-3">
                  <TfiEmail className="text-secondary text-2xl" />{" "}
                  <span className="font-semibold">Email</span>
                </div>
              </div>
              <div className="font-bold flex flex-col gap-3">
                <span>:</span>
                <span>:</span>
                <span>:</span>
              </div>
              <div className="text-secondary font-medium flex flex-col gap-3">
                <span>Jim Alpez</span>
                <span>+639 760 888 072</span>
                <span>jim.alpez06@gmail.com</span>
              </div>
            </motion.div>
            <div className="space-y-3">
              <motion.h4
                initial={{ x: -50, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                  },
                }}
                viewport={{ once: true }}
                className="text-2xl font-bold">
                My Interests
              </motion.h4>
              <div className="flex items-center gap-5">
                {INTEREST_DATA.map((interest, i) => (
                  <Fragment key={interest.title}>
                    <motion.div
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.4,
                          delay: 0.2 * i,
                        },
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3">
                      <div className="text-secondary text-3xl">
                        {interest.icon}
                      </div>
                      <p className="font-semibold">{interest.title}</p>
                    </motion.div>
                  </Fragment>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.4,
                },
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 1,
              }}
              className="group w-fit">
              <a
                href="CV.pdf"
                download
                className="hover:shadow-lg bg-primary hover:bg-secondary dark:bg-blue-50 text-blue-50 hover:text-blue-50 dark:text-primary font-medium px-6 py-3 rounded flex items-center gap-2">
                Download CV
                <AiOutlineDownload className="text-2xl animate-bounce" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
