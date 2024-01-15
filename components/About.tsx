"use client";

import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import Section from "./section";

export default function About() {
  return (
    <Section sectionView="About" id="about">
      <SectionHeading
        primaryText="About"
        secondaryText="Me"
        shadowText="Resume"
      />
      <div className="flex flex-col md:flex-row items-center gap-5 justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: 0.2,
            },
          }}
          className="flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolor.
          Aliquam quos, voluptate aliquid voluptatibus, quisquam fuga illum
          nulla aperiam sit aspernatur corrupti possimus temporibus tempora quae
          repudiandae quia mollitia.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8,
              delay: 0.2,
            },
          }}
          className="flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          repudiandae eius similique, aut sunt debitis beatae nulla accusantium?
          Ipsa sapiente perferendis quasi eos consequuntur, atque placeat
          accusantium sequi doloremque? Mollitia!
        </motion.div>
      </div>
    </Section>
  );
}
