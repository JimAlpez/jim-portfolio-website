"use client";

import { motion } from "framer-motion";

import { EDUCATION_DATA, EXPERIENCE_DATA } from "@/lib/data";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { FaGraduationCap } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { useTheme } from "@/context/theme-context";

export default function ExperienceSection() {
  return (
    <Section sectionView="Experience" id="experience">
      <div className="px-4 py-20 overflow-hidden">
        <SectionHeading
          primaryText="Awesome"
          secondaryText="Journey"
          shadowText="Experience"
        />
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex-1 space-y-10">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.4,
                },
              }}
              viewport={{ once: true }}
              className="flex items-center gap-5">
              <FaGraduationCap className="text-secondary text-6xl" />{" "}
              <h3 className="text-3xl font-bold">Education</h3>
            </motion.div>
            <div className="px-4 space-y-8">
              {EDUCATION_DATA.map((item, i) => template(item, i))}
            </div>
          </div>
          <div className="flex-1 space-y-10">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.4,
                },
              }}
              viewport={{ once: true }}
              className="flex items-center gap-5">
              <MdWorkHistory className="text-secondary text-6xl" />{" "}
              <h3 className="text-3xl font-bold">Experiences</h3>
            </motion.div>
            <div className="px-4 space-y-8">
              {EXPERIENCE_DATA.map((item, i) => template(item, i))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const template = (item: any, i: number) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 0.2 * i,
        },
      }}
      viewport={{ once: true }}
      key={item.title}
      className="flex items-start gap-10">
      <div className="p-2 flex flex-col items-center gap-[5px]">
        <div className="rounded-full h-4 w-4 bg-secondary ring-offset-4 ring-1 animate-bounce"></div>
        <div className="h-16 w-[1px] bg-secondary/50 rounded-full"></div>
      </div>
      <div className="flex-1">
        <h4 className="text-2xl font-bold line-clamp-1">{item.title}</h4>
        <h5
          className={`text-lg font-bold line-clamp-1 ${
            theme === "light" ? "text-primary/70" : "text-blue-50/70"
          }`}>
          {item.subTitle}
        </h5>
        <div className="text-sm font-medium text-secondary flex items-center gap-2 mt-4">
          <FaCalendarAlt /> {item.date}
        </div>
      </div>
    </motion.div>
  );
};
