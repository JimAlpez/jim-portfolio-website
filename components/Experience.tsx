"use client";

import { educationData, experiencesData } from "@/lib/data";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { FaGraduationCap } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <Section sectionView="Experience" id="experience">
      <div className="px-4 py-20">
        <SectionHeading
          primaryText="Awesome"
          secondaryText="Journey"
          shadowText="Experience"
        />
        <div className="flex justify-between gap-5">
          <div className="flex-1 space-y-10">
            <div className="flex items-center gap-5">
              <FaGraduationCap className="text-secondary text-6xl" />{" "}
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            <div className="px-4 space-y-8">
              {educationData.map((item) => (
                <div key={item.title} className="flex items-start gap-10">
                  <div className="p-2 flex flex-col items-center gap-[5px]">
                    <div className="rounded-full h-4 w-4 bg-secondary ring-offset-4 ring-1"></div>
                    <div className="h-16 w-[1px] bg-secondary/50 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold line-clamp-1">
                      {item.title}
                    </h4>
                    <h5 className="text-primary/70 dark:text-blue-50/70 text-lg font-bold line-clamp-1">
                      {item.subTitle}
                    </h5>
                    <div className="text-sm font-medium text-secondary flex items-center gap-2 mt-4">
                      <FaCalendarAlt /> {item.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-10">
            <div className="flex items-center gap-5">
              <MdWorkHistory className="text-secondary text-6xl" />{" "}
              <h3 className="text-3xl font-bold">Experiences</h3>
            </div>
            <div className="px-4 space-y-8">
              {experiencesData.map((item) => (
                <div key={item.title} className="flex items-start gap-10">
                  <div className="p-2 flex flex-col items-center gap-[5px]">
                    <div className="rounded-full h-4 w-4 bg-secondary ring-offset-4 ring-1"></div>
                    <div className="h-16 w-[1px] bg-secondary/50 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold line-clamp-1">
                      {item.title}
                    </h4>
                    <h5 className="text-primary/70 dark:text-blue-50/70 text-lg font-bold line-clamp-1">
                      {item.subTitle}
                    </h5>
                    <div className="text-sm font-medium text-secondary flex items-center gap-2 mt-4">
                      <FaCalendarAlt /> {item.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
