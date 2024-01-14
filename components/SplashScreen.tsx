"use client";

import { useEffect, useState } from "react";
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";

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
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [finishLoading, setCount]);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0.5 }}
      transition={{
        duration: 1,
        delay: 2,
      }}
      className="z-50 fixed top-0 left-0 right-0 bottom-0 bg-blue-50 dark:bg-primary min-h-screen overflow-hidden">
      <motion.div
        initial={{ marginLeft: 0 }}
        animate={{ marginLeft: "-100%" }}
        transition={{ ease: easeOut, duration: 1, delay: 2 }}
        className="w-full absolute top-0 bottom-0 left-0 overflow-hidden clip-polygon-1 bg-primary h-full flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ease: easeOut,
            duration: 0.5,
            delay: 0.2,
          }}
          className="tracking-wider text-8xl lg:text-9xl xl:text-[10rem] font-extrabold text-transparent drop-shadow-lg text-stroke-secondary">
          jim div
        </motion.h2>
      </motion.div>
      <motion.div
        initial={{ marginRight: 0 }}
        animate={{ marginRight: "-100%" }}
        transition={{ ease: easeOut, duration: 1, delay: 2 }}
        className="w-full absolute top-0 bottom-0 right-0 overflow-hidden clip-polygon-2 bg-secondary h-full flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ease: easeOut,
            duration: 0.5,
            delay: 0.2,
          }}
          className="tracking-wider text-8xl lg:text-9xl xl:text-[10rem] font-extrabold text-transparent drop-shadow-lg text-stroke-primary">
          jim div
        </motion.h2>
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
