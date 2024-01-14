"use client";

import { useEffect, useState } from "react";
import { easeInOut, easeOut, motion } from "framer-motion";

type SplashScreenProps = {
  finishLoading: () => void;
};

export default function SplashScreen({ finishLoading }: SplashScreenProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        return newCount <= 100 ? newCount : prevCount;
      });
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      finishLoading();
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [finishLoading, setCount]);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 2,
        delay: 1,
      }}
      className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-blue-100 dark:bg-primary min-h-screen flex items-center justify-between">
      <motion.div
        initial={{ width: "50%" }}
        animate={{ width: 0 }}
        transition={{ ease: easeOut, duration: 2 }}
        className="bg-primary h-full flex items-center justify-end">
        <h2 className="mr-3 md:mr-6 text-8xl lg:text-9xl xl:text-[10rem] font-extrabold text-transparent drop-shadow-lg text-stroke-secondary">
          jim
        </h2>
      </motion.div>
      <motion.div
        initial={{ width: "50%" }}
        animate={{ width: 0 }}
        transition={{ ease: easeOut, duration: 2 }}
        className="bg-secondary h-full flex items-center justify-start">
        <h2 className="ml-3 md:ml-6 text-8xl lg:text-9xl xl:text-[10rem] font-extrabold text-transparent drop-shadow-lg text-stroke-primary">
          div
        </h2>
      </motion.div>
      {/* <h1>Loading...</h1>
      <div className="h-4 w-[30rem] border border-red-500 rounded-full">
        <motion.div
          initial={{ width: 0, left: 0 }}
          animate={{ width: "100%", left: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-full bg-gray-500 rounded-full">
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: count >= 100 ? 5 : 1,
              height: "10px",
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-gray-500 rounded-full"></motion.div>
        </motion.div>
      </div>
      <div className="text-5xl font-bold">{count}</div> */}
    </motion.div>
  );
}
