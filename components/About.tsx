"use client";

import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="max-w-3xl text-center space-y-6 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about">
      <SectionHeading>About me</SectionHeading>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, delectus
        soluta. Dolor, tempore? Iste omnis facilis ab asperiores error, tenetur
        quae aspernatur, reiciendis fugit odit magni dignissimos architecto
        autem nesciunt.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, delectus
        soluta. Dolor, tempore? Iste omnis facilis ab asperiores error, tenetur
        quae aspernatur, reiciendis fugit odit magni dignissimos architecto
        autem nesciunt.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, delectus
        soluta. Dolor, tempore? Iste omnis facilis ab asperiores error, tenetur
        quae aspernatur, reiciendis fugit odit magni dignissimos architecto
        autem nesciunt.
      </p>
    </motion.section>
  );
}
