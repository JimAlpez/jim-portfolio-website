import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import Image1 from "@/public/corpcomment.png";

import { MdLocalMovies } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { BiMusic } from "react-icons/bi";

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
    title: "ToDo List",
    image: Image1,
    link: "#",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat non porro error dignissimos accusantium facilis qui nemo veritatis. Reiciendis, fuga libero officia magnam itaque inventore nisi maiores at saepe doloribus.",
    tabs: ["All", "Mobile"],
  },
  {
    id: 3,
    title: "E-Commerce",
    image: Image1,
    content: "3rd Item",
    tabs: ["All", "Wordpress"],
  },
  {
    id: 4,
    title: "E-Commerce",
    image: Image1,
    content: "4th Item",
    tabs: ["All", "React"],
  },
  {
    id: 5,
    title: "E-Commerce",
    image: Image1,
    content: "5th Item",
    tabs: ["All", "Wordpress"],
  },
  {
    id: 6,
    title: "E-Commerce",
    image: Image1,
    content: "5th Item",
    tabs: ["All", "Wordpress"],
  },
  {
    id: 7,
    title: "E-Commerce",
    image: Image1,
    content: "5th Item",
    tabs: ["All", "Wordpress"],
  },
  {
    id: 8,
    title: "E-Commerce",
    image: Image1,
    content: "5th Item",
    tabs: ["All", "Wordpress"],
  },
  {
    id: 9,
    title: "E-Commerce",
    image: Image1,
    content: "5th Item",
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
