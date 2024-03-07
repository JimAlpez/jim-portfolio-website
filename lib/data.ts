import React from "react";

// Skills
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { RiBootstrapLine } from "react-icons/ri";
import { SiWordpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import { TbBrandFramerMotion } from "react-icons/tb";

// Interest
import { CgGames } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa6";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { MdElectricBolt } from "react-icons/md";

// Projects
import Portfolio from "@/public/Projects/Portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Experience",
    hash: "/#experience",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const SKILLS_DATA = [
  {
    title: "ReactJS",
    icon: React.createElement(GrReactjs),
  },
  {
    title: "NextJS",
    icon: React.createElement(TbBrandNextjs),
  },
  {
    title: "Typescript",
    icon: React.createElement(TbBrandTypescript),
  },
  {
    title: "Tailwind",
    icon: React.createElement(BiLogoTailwindCss),
  },
  {
    title: "Bootstrap",
    icon: React.createElement(RiBootstrapLine),
  },
  {
    title: "Wordpress",
    icon: React.createElement(SiWordpress),
  },
  {
    title: "MongoDB",
    icon: React.createElement(SiMongodb),
  },
  {
    title: "Sass",
    icon: React.createElement(IoLogoSass),
  },
  {
    title: "Framer Motion",
    icon: React.createElement(TbBrandFramerMotion),
  },
] as const;

export const EDUCATION_DATA = [
  {
    title: "BS Computer Engineering",
    subTitle: "Northwest Samar State University",
    date: "2019 - 2023",
  },
] as const;

export const EXPERIENCE_DATA = [
  {
    title: "Frontend Website Developer",
    subTitle: "Full Time",
    date: "2023 - Now",
  },
  {
    title: "Frontend Website Developer",
    subTitle: "Part Time",
    date: "2021 - 2023",
  },
] as const;

export const INTEREST_DATA = [
  {
    title: "Coding",
    icon: React.createElement(FaLaptopCode),
  },
  {
    title: "Electrical",
    icon: React.createElement(MdElectricBolt),
  },
  {
    title: "Puzzle",
    icon: React.createElement(IoExtensionPuzzleOutline),
  },
  {
    title: "Games",
    icon: React.createElement(CgGames),
  },
] as const;

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Title Here",
    link: "#",
    image: Portfolio,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat non porro error dignissimos accusantium facilis qui nemo veritatis. Reiciendis, fuga libero officia magnam itaque inventore nisi maiores at saepe doloribus.",
    tabs: ["All", "Wordpress"],
  },
  {
    id: 2,
    title: "Title Here",
    link: "#",
    image: Portfolio,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat non porro error dignissimos accusantium facilis qui nemo veritatis. Reiciendis, fuga libero officia magnam itaque inventore nisi maiores at saepe doloribus.",
    tabs: ["All", "Wordpress"],
  },
  {
    id: 3,
    title: "Title Here",
    link: "#",
    image: Portfolio,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat non porro error dignissimos accusantium facilis qui nemo veritatis. Reiciendis, fuga libero officia magnam itaque inventore nisi maiores at saepe doloribus.",
    tabs: ["All", "Wordpress"],
  },
  {
    id: 4,
    title: "Title Here",
    link: "#",
    image: Portfolio,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat non porro error dignissimos accusantium facilis qui nemo veritatis. Reiciendis, fuga libero officia magnam itaque inventore nisi maiores at saepe doloribus.",
    tabs: ["All", "Wordpress"],
  },
  {
    id: 5,
    title: "Title Here",
    link: "#",
    image: Portfolio,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat non porro error dignissimos accusantium facilis qui nemo veritatis. Reiciendis, fuga libero officia magnam itaque inventore nisi maiores at saepe doloribus.",
    tabs: ["All", "Wordpress"],
  },
  {
    id: 6,
    title: "Title Here",
    link: "#",
    image: Portfolio,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat non porro error dignissimos accusantium facilis qui nemo veritatis. Reiciendis, fuga libero officia magnam itaque inventore nisi maiores at saepe doloribus.",
    tabs: ["All", "Wordpress"],
  },
  {
    id: 7,
    title: "Title Here",
    link: "#",
    image: Portfolio,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat non porro error dignissimos accusantium facilis qui nemo veritatis. Reiciendis, fuga libero officia magnam itaque inventore nisi maiores at saepe doloribus.",
    tabs: ["All", "Wordpress"],
  },
] as const;
