import { LucideProps } from "lucide-react";
import { Variants } from "framer-motion";

export interface Project {
  id: number;
  name: string;
  description: string;
  status: string;
  technologies: string[];
  liveDemo: boolean;
  icon: string;
  liveLink:string,
  github:string
}

export interface Tool {
  name: string;
  icon: string;
  color: string;
}

export interface ToolsData {
  [category: string]: Tool[];
}

export type { Variants as MotionVariants };
