"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`fixed bottom-5 right-5 h-[3rem] w-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white/40 shadow-2xl rounded-full grid place-items-center hover:scale-[1.15] active:scale-105 transition-all ${
        theme === "light"
          ? "text-primary bg-white/50"
          : "text-blue-50 bg-gray-950"
      }`}
      onClick={toggleTheme}>
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
