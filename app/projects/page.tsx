"use client";

import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";

export default function Projects() {
  return (
    <div className="pt-16">
      <Section sectionView="Projects" id="projects">
        <SectionHeading
          primaryText="My"
          secondaryText="Projects"
          shadowText="Works"
        />
      </Section>
    </div>
  );
}
