"use client";

import { motion } from "framer-motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { RiBootstrapLine } from "react-icons/ri";
import { SiWordpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";

export default function SkillsSection() {
  const settings = {
    dots: false,
    arrows: false,
    swipeToSlide: false,
    draggable: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full max-w-5xl mx-auto scroll-mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.2,
          },
        }}
        viewport={{ once: true }}
        className="m-1 p-6 rounded-xl shadow-lg shadow-blue-100/30 dark:shadow-sky-900/30 border-t-2 border-blue-100/30 dark:border-sky-900/30">
        <Slider {...settings}>
          {skills.map((skill) => (
            <div key={skill.title}>
              <div className="text-center space-y-2">
                <div className="grid place-items-center text-5xl">
                  {skill.icon}
                </div>
                <p className="text-xs font-semibold tracking-normal">
                  {skill.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}

const skills = [
  {
    title: "ReactJS",
    icon: <GrReactjs />,
  },
  {
    title: "NextJS",
    icon: <TbBrandNextjs />,
  },
  {
    title: "Typescript",
    icon: <TbBrandTypescript />,
  },
  {
    title: "Tailwind",
    icon: <BiLogoTailwindCss />,
  },
  {
    title: "Bootstrap",
    icon: <RiBootstrapLine />,
  },
  {
    title: "Wordpress",
    icon: <SiWordpress />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    title: "Sass",
    icon: <IoLogoSass />,
  },
  {
    title: "Wordpress",
    icon: <SiWordpress />,
  },
];
