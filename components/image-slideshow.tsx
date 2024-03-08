"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Slideshow
import Image1 from "@/public/Slideshow/Image1.jpg";
import Image2 from "@/public/Slideshow/Image2.jpg";
import Image3 from "@/public/Slideshow/Image3.jpg";
import { useTheme } from "@/context/theme-context";

const images = [
  {
    image: Image1,
    alt: "Jim Alpez Observing",
  },
  {
    image: Image2,
    alt: "Reading the Books",
  },
  {
    image: Image3,
    alt: "BsCpE Boys",
  },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative w-full h-full rounded-xl overflow-hidden shadow-xl border ${
        theme === "light" ? "border-sky-950" : "border-blue-50"
      }`}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt={image.alt}
          className={`w-full h-full object-cover absolute top-0 left-0 opacity-0 scale-110 -translate-x-[1rem] -rotate-[5deg] transition ease-in-out duration-500 ${
            index === currentImageIndex
              ? "z-10 opacity-100 scale-100 translate-x-0 rotate-0"
              : ""
          }`}
        />
      ))}
    </div>
  );
}
