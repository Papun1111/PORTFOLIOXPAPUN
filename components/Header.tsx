import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionVariants } from "@/types";

interface HeaderProps {
  toggleDarkMode: () => void;
  itemVariants: MotionVariants;
  darkMode:boolean
}

export default function Header({ toggleDarkMode, itemVariants,darkMode }: HeaderProps) {
  return (
    <motion.div 
      variants={itemVariants} 
      className="text-center space-y-4 bg-blue-50 dark:bg-slate-900 p-6 rounded-lg border border-blue-200 dark:border-purple-800"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <a 
            className="no-underline" 
            href="https://github.com/Papun1111"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5 text-blue-700 dark:text-purple-300 hover:text-blue-900 dark:hover:text-purple-100 hover:w-6 hover:h-6 transition-all duration-300" />
          </a>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleDarkMode}
          className="p-2 bg-blue-100 dark:bg-purple-800 hover:bg-blue-200 dark:hover:bg-purple-700 text-blue-800 dark:text-purple-200 border border-blue-300 dark:border-purple-600"
        >
          {darkMode ? (
            <Sun className="w-4 h-4 text-orange-500" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-600" />
          )}
        </Button>
      </div>

      <h1 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-purple-100">
        Hi, I'm Papun Mohapatra
      </h1>
      <p className="text-blue-700 dark:text-purple-200 leading-relaxed text-sm sm:text-base max-w-md mx-auto">
        I craft modern web applications with cutting-edge technologies,
        currently exploring the fascinating world of Web3 and decentralised
        applications.
      </p>

      <div className="flex items-center justify-center gap-4 sm:gap-6 pt-4">
       
        <motion.a
          href="https://github.com/Papun1111"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 bg-green-100 dark:bg-teal-800 text-green-700 dark:text-teal-200 hover:text-green-800 dark:hover:text-teal-100 hover:bg-green-200 dark:hover:bg-teal-700 transition-all duration-300 rounded-md border border-green-300 dark:border-teal-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4" />
        </motion.a>
        <motion.a
          href="https://x.com/gotenseijuro"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 bg-sky-100 dark:bg-indigo-800 text-sky-600 dark:text-indigo-200 hover:text-sky-700 dark:hover:text-indigo-100 hover:bg-sky-200 dark:hover:bg-indigo-700 transition-all duration-300 rounded-md border border-sky-300 dark:border-indigo-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="w-4 h-4" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/papunm/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 bg-blue-100 dark:bg-violet-800 text-blue-600 dark:text-violet-200 hover:text-blue-700 dark:hover:text-violet-100 hover:bg-blue-200 dark:hover:bg-violet-700 transition-all duration-300 rounded-md border border-blue-300 dark:border-violet-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );
}
