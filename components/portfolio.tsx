"use client";

import { useState } from "react";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import Image1 from "@/public/corpcomment.png";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Portfolio() {
  const { ref } = useSectionInView("Projects");

  return (
    <section
      ref={ref}
      className="w-full max-w-5xl mx-auto py-12 px-4 scroll-mt-16"
      id="projects">
      <SectionHeading
        primaryText="My"
        secondaryText="Portfolio"
        shadowText="Works"
      />
      <TabComponent data={PROJECTS_DATA} />
    </section>
  );
}

const TabComponent = ({ data }: any) => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (active: string) => {
    setActiveTab(active);
  };

  const filteredData = data.filter((item: any) =>
    item.tabs.includes(activeTab),
  );

  return (
    <div className="space-y-6">
      <div className="font-bold flex items-center justify-center gap-3">
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.slice(0, 6).map((item: any, i: any) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                ease: easeInOut,
                duration: 0.3,
                delay: 0.1 * i,
              },
            }}
            className="space-y-2 rounded-xl border border-blue-100 bg-blue-100/50 dark:border-sky-900 dark:bg-sky-900/50 p-4 shadow-md shadow-black/10 dark:shadow-white/10">
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={300}
              quality={95}
              className="w-full h-72 md:h-60 lg:h-52 object-cover shadow-lg shadow-black/10 dark:shadow-white/10 rounded-lg"
            />
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
                href=""
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
    </div>
  );
};

const PROJECTS_DATA = [
  {
    id: 1,
    title: "ToDo List",
    image: Image1,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat non porro error dignissimos accusantium facilis qui nemo veritatis. Reiciendis, fuga libero officia magnam itaque inventore nisi maiores at saepe doloribus.",
    tabs: ["All", "Mobile"],
  },
  { id: 2, title: "E-Commerce", content: "2nd Item", tabs: ["All", "React"] },
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
