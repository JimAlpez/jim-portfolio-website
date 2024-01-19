"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";
import Image1 from "@/public/corpcomment.png";
import { FaArrowRight } from "react-icons/fa6";
import { RiExternalLinkLine } from "react-icons/ri";
import Section from "@/components/section";

export default function ProjectsSection() {
  const { ref } = useSectionInView("Projects");
  const [activeTab, setActiveTab] = useState("All");

  return (
    <Section sectionView="Projects" id="projects">
      <div className="px-4 py-20">
        <SectionHeading
          primaryText="My"
          secondaryText="Portfolio"
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
const ProjectTab = ({ activeTab, setActiveTab }: any) => {
  const handleTabClick = (active: string) => {
    setActiveTab(active);
  };

  return (
    <div className="font-bold flex flex-wrap items-center justify-center gap-8">
      <button
        onClick={() => handleTabClick("All")}
        className={`uppercase tracking-wider ${
          activeTab === "All" ? "text-secondary" : ""
        }`}>
        All
      </button>
      <button
        onClick={() => handleTabClick("React")}
        className={`uppercase tracking-wider ${
          activeTab === "React" ? "text-secondary" : ""
        }`}>
        React
      </button>
      <button
        onClick={() => handleTabClick("Wordpress")}
        className={`uppercase tracking-wider ${
          activeTab === "Wordpress" ? "text-secondary" : ""
        }`}>
        Wordpress
      </button>
    </div>
  );
};

const Project = ({ data, activeTab }: any) => {
  const filteredData = data.filter((item: any) =>
    item.tabs.includes(activeTab),
  );

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.slice(0, 6).map((item: any, i: any) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                ease: easeInOut,
                duration: 0.5,
                delay: 0.1 * i,
              },
            }}
            className="space-y-2 relative rounded-xl border border-blue-100 bg-gradient-to-br from-blue-200/50 dark:from-sky-800/50 dark:border-sky-900 p-4 shadow-md shadow-black/10 dark:shadow-white/10">
            <div className="group relative w-full h-72 md:h-60 lg:h-52 shadow-lg shadow-black/10 dark:shadow-white/10 rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                quality={95}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-150"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 group-hover:backdrop-blur-[0.5rem]"></div>
              <a href={item.link} target="_blank">
                <RiExternalLinkLine className="text-4xl text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" />
              </a>
            </div>
            <p className="text-xs italic text-secondary font-medium">
              {item.tabs.includes("All")
                ? item.tabs.filter((tag: any) => tag !== "All").join(", ")
                : item.tabs.join(", ")}
            </p>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold line-clamp-1">{item.title}</h4>
                <p className="text-sm line-clamp-3">{item.content}</p>
              </div>

              <a
                href={item.link}
                target="_blank"
                className="flex items-center gap-3 text-sm font-bold underline hover:text-secondary wit">
                See project{" "}
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: "40%" }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}>
                  <FaArrowRight className="text-secondary text-lg" />
                </motion.span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="py-3 text-center">
        <Link
          href="projects"
          className="text-sm underline italic font-medium hover:text-secondary">
          See more projects...
        </Link>
      </div>
    </>
  );
};

const PROJECTS_DATA = [
  {
    id: 1,
    title: "ToDo List",
    image: Image1,
    link: "#",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat non porro error dignissimos accusantium facilis qui nemo veritatis. Reiciendis, fuga libero officia magnam itaque inventore nisi maiores at saepe doloribus.",
    tabs: ["All", "Mobile"],
  },
  {
    id: 3,
    title: "E-Commerce",
    image: Image1,
    content: "3rd Item",
    tabs: ["All", "Wordpress"],
  },
  {
    id: 4,
    title: "E-Commerce",
    image: Image1,
    content: "4th Item",
    tabs: ["All", "React"],
  },
  {
    id: 5,
    title: "E-Commerce",
    image: Image1,
    content: "5th Item",
    tabs: ["All", "Wordpress"],
  },
  {
    id: 6,
    title: "E-Commerce",
    image: Image1,
    content: "5th Item",
    tabs: ["All", "Wordpress"],
  },
  {
    id: 7,
    title: "E-Commerce",
    image: Image1,
    content: "5th Item",
    tabs: ["All", "Wordpress"],
  },
  {
    id: 8,
    title: "E-Commerce",
    image: Image1,
    content: "5th Item",
    tabs: ["All", "Wordpress"],
  },
  {
    id: 9,
    title: "E-Commerce",
    image: Image1,
    content: "5th Item",
    tabs: ["All", "Wordpress"],
  },
];
