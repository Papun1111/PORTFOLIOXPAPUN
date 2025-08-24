
import { Variants } from "framer-motion";
import { IconType } from "react-icons/lib";

export interface Project {
  id: number;
  name: string;
  description: string;
  status: string;
  technologies: string[];
  liveDemo: boolean;
  icon: string|IconType;
  liveLink:string,
  github:string
}

export interface Tool {
  name: string;
  icon: string;
  color: string;
}

export interface ToolsData {
  Frontend: Tools[];
  "Backend & Infrastructure": Tools[];
  "Database & ORM": Tools[];
}

export interface Tools {
  name: string;
  icon: IconType;
  color: {
    light: string; // e.g. "text-blue-500"
    dark: string;  // e.g. "text-blue-300"
  };
}

export type { Variants as MotionVariants };
