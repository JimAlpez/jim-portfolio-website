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
import { MdLocalMovies } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { BiMusic } from "react-icons/bi";

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
  {
    title: "General Academic Strand",
    subTitle: "Pagsanghan Senior High School",
    date: "2017 - 2019",
  },
] as const;

export const EXPERIENCE_DATA = [
  {
    title: "BS Computer Engineering Experience",
    subTitle: "College",
    date: "2020 - 2023",
  },
  {
    title: "BS Computer Engineering 2",
    subTitle: "Northwest Samar State University 2",
    date: "2020 - 2023",
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
] as const;

export const INTEREST_DATA = [
  {
    title: "Games",
    icon: React.createElement(CgGames),
  },
  {
    title: "Movies",
    icon: React.createElement(MdLocalMovies),
  },
  {
    title: "Music",
    icon: React.createElement(BiMusic),
  },
] as const;
