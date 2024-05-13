import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import aesrganImg from "@/public/aesrgan.png";
import ictmanagerImg from "@/public/ictmanager.png";
import iprImg from "@/public/ipr.png";
import lcaImg from "@/public/lca.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Illinois Center of Transportation, Lead Software Developer",
    location: "Rantoul, IL",
    description:
      "Designed and implemented multiple containerized(AWS CaaS) web applications for Pavement Life Cycle Assesment with RDBMS, ReactJS, and Django Rest Framework.",
    icon: React.createElement(FaLaptopCode),
    date: "Dec 2022 - present",
  },
  {
    title: "JP Morgna Chase - Software Engineer II",
    location: "Bengaluru, India",
    description:
      "Developed optimization system using Linear Regression & XGB prediction models for risk computation costs, reducing AWS EC2 usage by 84% for the team.",
    icon: React.createElement(BsBank),
    date: "Jan 2022 - Aug 2022",
  },
  {
    title: "JP Morgna Chase - Software Engineer I",
    location: "Bengaluru, India",
    description:
      "Built user-facing dashboards to display Derivative Trade market risk and P&L reports. Wrote the data massaging and aggregation services triggered by Market Markers.",
    icon: React.createElement(BsBank),
    date: "Aug 2020 - Jan 2022",
  },
  {
    title: "JP Morgna Chase - Software Engineering Intern",
    location: "Bengaluru, India",
    description:
      "Developed an automatic dependency upgradation for NodeJS trading app.",
    icon: React.createElement(BsBank),
    date: "May 2019 - Jul 2019",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: aesrganImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: ictmanagerImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: iprImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: lcaImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;