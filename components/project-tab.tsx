"use client";

import { motion } from "framer-motion";

export default function ProjectTab({ activeTab, setActiveTab }: any) {
  const handleTabClick = (active: string) => {
    setActiveTab(active);
  };

  return (
    <div className="font-bold flex flex-wrap items-center justify-center gap-8">
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            type: "spring",
          },
        }}
        viewport={{ once: true }}>
        <button
          onClick={() => handleTabClick("All")}
          className={`uppercase tracking-wider hover:text-secondary/70 ${
            activeTab === "All" ? "text-secondary" : ""
          }`}>
          All
        </button>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.2,
            type: "spring",
          },
        }}
        viewport={{ once: true }}>
        <button
          onClick={() => handleTabClick("React")}
          className={`uppercase tracking-wider hover:text-secondary/70 ${
            activeTab === "React" ? "text-secondary" : ""
          }`}>
          React
        </button>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.4,
            type: "spring",
          },
        }}
        viewport={{ once: true }}>
        <button
          onClick={() => handleTabClick("Wordpress")}
          className={`uppercase tracking-wider hover:text-secondary/70 ${
            activeTab === "Wordpress" ? "text-secondary" : ""
          }`}>
          Wordpress
        </button>
      </motion.div>
    </div>
  );
}
