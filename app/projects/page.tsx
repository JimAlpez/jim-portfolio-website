"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";

import { PROJECTS_DATA } from "@/lib/data";
import Project from "@/components/project";
import ProjectTab from "@/components/project-tab";
import SectionHeading from "@/components/section-heading";
import Section from "@/components/section";

export default function ProjectPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData = PROJECTS_DATA.filter((item: any) =>
    item.tabs.includes(activeTab),
  );

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

          {filteredData.length === 0 && (
            <p className="text-center font-medium text-rose-500">
              No website yet.
            </p>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((item: any, i: any) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    ease: easeInOut,
                    duration: 0.4,
                    delay: 0.1 * i,
                  },
                }}
                viewport={{ once: true }}
                className="shadow-md shadow-black/10 dark:shadow-white/10 relative overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-br from-blue-200/50 dark:from-sky-800/50 dark:border-sky-900">
                <div className="h-52 w-full overflow-hidden shadow-md shadow-sky-900/20">
                  <a href={item.link} target="_blank">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                      quality={95}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-125"
                    />
                  </a>
                </div>

                <div className="space-y-3 p-4">
                  <p className="text-xs italic text-secondary font-medium">
                    {item.tabs.includes("All")
                      ? item.tabs.filter((tag: any) => tag !== "All").join(", ")
                      : item.tabs.join(", ")}
                  </p>
                  <div className="space-y-2">
                    <a
                      href={item.link}
                      className="text-lg font-bold hover:underline hover:text-secondary line-clamp-1 w-fit">
                      {item.title}
                    </a>
                    <p className="text-sm line-clamp-2 text-primary/60 dark:text-blue-50/60">
                      {item.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
