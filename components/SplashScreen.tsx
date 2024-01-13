"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [finishLoading, setCount]);
  return (
    <main className="min-h-screen grid place-items-center bg-transparent">
      <h1>Loading...</h1>
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
              height: count >= 100 ? "100vh" : "10px",
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-gray-500 rounded-full"></motion.div>
        </motion.div>
      </div>
      <div className="text-5xl font-bold">{count}</div>
    </main>
  );
}
