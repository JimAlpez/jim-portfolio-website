"use client";

import { useState } from "react";

import { PROJECTS_DATA } from "@/lib/data";
import Project from "@/components/project";
import ProjectTab from "@/components/project-tab";
import SectionHeading from "@/components/section-heading";
import Section from "@/components/section";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <Section sectionView="Projects" id="projects">
      <div className="px-4 py-20">
        <SectionHeading
          primaryText="My"
          secondaryText="Projects"
          shadowText="Works"
        />
        <div className="space-y-6">
          <ProjectTab activeTab={activeTab} setActiveTab={setActiveTab} />
          <Project data={PROJECTS_DATA} activeTab={activeTab} />
        </div>
      </div>
    </Section>
  );
}
