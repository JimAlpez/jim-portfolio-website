"use client";

import { motion } from "framer-motion";

import SectionHeading from "@/components/section-heading";
import Section from "@/components/section";
export default function SkillsSection() {
  return (
    <Section sectionView="Skills" id="skills">
      <div className="px-4 py-20">
        <SectionHeading
          primaryText="My"
          secondaryText="Expertise"
          shadowText="Skills"
        />
        <h2 className="text-secondary font-bold text-6xl text-center">
          Skills Here
        </h2>
      </div>
    </Section>
  );
}
