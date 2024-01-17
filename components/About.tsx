"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";
import Section from "./Section";
import WFH from "@/public/WFH.jpg";
import { FiUser } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaHeadphones } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";

export default function About() {
  return (
    <Section sectionView="About" id="about">
      <div className="grid grid-cols-2 place-items-center gap-10 px-4 py-20">
        <div className="col-span-1 h-full w-full grid place-items-center">
          <div className="relative p-6 w-full">
            <Image
              src={WFH}
              alt="Jim Alpez"
              width={500}
              height={500}
              quality={95}
              className="absolute top-0 left-0 w-9/12 shadow-md transition-all duration-500 hover:shadow-2xl hover:scale-[1.15] hover:z-10"
            />
            <Image
              src={WFH}
              alt="Jim Alpez"
              width={500}
              height={500}
              quality={95}
              className="absolute bottom-0 right-0 w-9/12 shadow-md transition-all duration-500 hover:shadow-2xl hover:scale-[1.15] hover:z-10"
            />
            {/* <div className="absolute top-0 left-0 h-40 w-40 border-t-8 border-l-8 border-secondary"></div>
            <div className="absolute bottom-0 right-0 h-40 w-40 border-b-8 border-r-8 border-secondary"></div> */}
          </div>
        </div>
        <div className="col-span-1">
          <SectionHeading
            primaryText="About"
            secondaryText="Me"
            shadowText="Resume"
          />
          <div className="space-y-12">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              magnam, et ex ullam eligendi officiis nemo iure consequuntur dolor
              quod, accusamus quisquam optio odio eveniet. Nisi ab sunt sint
              doloribus!
            </p>
            <div className="flex items-center gap-12">
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
                <span>9760888072</span>
                <span>jim.alpez06@gmail.com</span>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-2xl font-bold">My Interests</h4>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-3">
                  <FaHeadphones className="text-secondary text-3xl" />{" "}
                  <span className="font-semibold">Music</span>
                </div>
                <div className="flex items-center gap-3">
                  <MdLocalMovies className="text-secondary text-3xl" />{" "}
                  <span className="font-semibold">Movie</span>
                </div>
              </div>
            </div>
            <motion.div
              whileHover={{
                scale: 1.2,
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
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
