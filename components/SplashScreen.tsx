"use client";

import { useEffect, useState } from "react";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

type SplashScreenProps = {
  finishLoading: () => void;
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: any) => {
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 2, bounce: 0 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

export default function SplashScreen({ finishLoading }: SplashScreenProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        return newCount <= 100 ? newCount : prevCount;
      });
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      finishLoading();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [finishLoading, setCount]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ ease: easeOut, duration: 1, delay: 2 }}
      className="z-50 bg-primary fixed top-0 left-0 right-0 bottom-0 grid place-items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: easeInOut }}>
        <h2 className="text-transparent text-stroke-secondary text-9xl font-extrabold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center h-48 w-48 border-4 border-secondary/20 rounded-full">
          J
        </h2>
        <div className="h-48 w-48 border-b-4 border-secondary animate-spin rounded-full"></div>
      </motion.div>
    </motion.div>
  );
}
