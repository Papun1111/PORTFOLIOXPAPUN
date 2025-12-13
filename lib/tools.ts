import { ToolsData } from "@/types";
import {
  FaReact,
  FaAngular,
  FaJava,
  FaPython,
  FaDocker,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiSpringboot,
  SiSpring,
  SiMongodb,
  SiPostgresql,
  SiHibernate,
  SiShadcnui,
  SiPrisma,
  SiKubernetes, 
  SiFastapi,    
  SiSolidity,   
  SiSolana,     
  SiEthereum,
  SiRust,  
  SiGo 
} from "react-icons/si";

export const tools: ToolsData = {
  Frontend: [
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: {
        light: "text-black",
        dark: "dark:text-white",
      },
    },
    {
      name: "React",
      icon: FaReact,
      color: {
        light: "text-cyan-500",
        dark: "dark:text-cyan-300",
      },
    },
    {
      name: "Angular",
      icon: FaAngular,
      color: {
        light: "text-red-600",
        dark: "dark:text-red-400",
      },
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: {
        light: "text-blue-600",
        dark: "dark:text-blue-400",
      },
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: {
        light: "text-yellow-500",
        dark: "dark:text-yellow-300",
      },
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: {
        light: "text-cyan-600",
        dark: "dark:text-cyan-400",
      },
    },
    {
      name: "Shadcn UI",
      icon: SiShadcnui,
      color: {
        light: "text-purple-500",
        dark: "dark:text-purple-300",
      },
    },
  ],

  "Backend & Infrastructure": [
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: {
        light: "text-green-600",
        dark: "dark:text-green-400",
      },
    },
    {
      name: "Express",
      icon: SiExpress,
      color: {
        light: "text-gray-700",
        dark: "dark:text-gray-300",
      },
    },
    {
      name: "Java",
      icon: FaJava,
      color: {
        light: "text-red-600",
        dark: "dark:text-red-400",
      },
    },
    {
      name: "Spring Boot",
      icon: SiSpringboot,
      color: {
        light: "text-green-500",
        dark: "dark:text-green-300",
      },
    },
    {
      name: "Spring",
      icon: SiSpring,
      color: {
        light: "text-green-600",
        dark: "dark:text-green-400",
      },
    },
    {
      name: "Python",
      icon: FaPython,
      color: {
        light: "text-yellow-500",
        dark: "dark:text-yellow-300",
      },
    },
    {
      name: "FastAPI", // Added
      icon: SiFastapi,
      color: {
        light: "text-teal-500",
        dark: "dark:text-teal-300",
      },
    },
    {
      name: "Docker",
      icon: FaDocker,
      color: {
        light: "text-blue-500",
        dark: "dark:text-blue-300",
      },
    },
    {
      name: "Kubernetes", // Added
      icon: SiKubernetes,
      color: {
        light: "text-blue-600",
        dark: "dark:text-blue-400",
      },
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: {
        light: "text-blue-600",
        dark: "dark:text-blue-400",
      },
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: {
        light: "text-yellow-500",
        dark: "dark:text-yellow-300",
      },
    },
     {
      name: "Go Lang",
      icon: SiGo,
      color: {
        light: "text-blue-600",
        dark: "dark:text-blue-400",
      },
    },
  ],

  "Database & ORM": [
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: {
        light: "text-green-600",
        dark: "dark:text-green-400",
      },
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: {
        light: "text-blue-600",
        dark: "dark:text-blue-400",
      },
    },
    {
      name: "Prisma",
      icon: SiPrisma,
      color: {
        light: "text-purple-500",
        dark: "dark:text-purple-300",
      },
    },
    {
      name: "Hibernate",
      icon: SiHibernate,
      color: {
        light: "text-orange-500",
        dark: "dark:text-orange-300",
      },
    },
  ],

  // Added new category for Web3
  "Web3 & Blockchain": [
    {
      name: "Solidity",
      icon: SiSolidity,
      color: {
        light: "text-gray-700",
        dark: "dark:text-gray-300",
      },
    },
    {
      name: "Ethereum",
      icon: SiEthereum,
      color: {
        light: "text-blue-700",
        dark: "dark:text-blue-500",
      },
    },
    {
      name: "Solana",
      icon: SiSolana,
      color: {
        light: "text-purple-600",
        dark: "dark:text-purple-400",
      },
    },{
      name: "Rust",
      icon: SiRust,
      color: {
        light: "#CE422B",
        dark: "dark:text-orange-400",
      },
    },
  ],
};