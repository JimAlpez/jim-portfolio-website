"use client";

import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      className="max-w-3xl min-h-screen text-center space-y-6 scroll-mt-28"
      id="about">
      <motion.div
        initial={{ y: 100 }}
        whileInView={{
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
          },
        }}>
        <SectionHeading>About me</SectionHeading>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, delectus
          soluta. Dolor, tempore? Iste omnis facilis ab asperiores error,
          tenetur quae aspernatur, reiciendis fugit odit magni dignissimos
          architecto autem nesciunt.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, delectus
          soluta. Dolor, tempore? Iste omnis facilis ab asperiores error,
          tenetur quae aspernatur, reiciendis fugit odit magni dignissimos
          architecto autem nesciunt.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, delectus
          soluta. Dolor, tempore? Iste omnis facilis ab asperiores error,
          tenetur quae aspernatur, reiciendis fugit odit magni dignissimos
          architecto autem nesciunt.
        </p>
      </motion.div>
    </section>
  );
}
