"use client";

import { useEffect } from "react";
import { easeInOut, easeOut, motion } from "framer-motion";

type SplashScreenProps = {
  finishLoading: () => void;
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => {
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
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      finishLoading();
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ ease: easeOut, duration: 1, delay: 1 }}
      className="z-50 bg-primary fixed top-0 left-0 right-0 bottom-0 grid place-items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: easeInOut, delay: 0.1 }}>
        <h2 className="text-transparent text-stroke-secondary text-9xl font-extrabold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center">
          J
        </h2>
        <div className="h-52 w-52 border-8 border-b-secondary/20 border-secondary animate-spin rounded-full"></div>
      </motion.div>
    </motion.div>
  );
}
