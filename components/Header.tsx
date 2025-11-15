import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

import { MotionVariants } from "@/types";
import { GiSunPriest, GiNightSky } from "react-icons/gi";

interface HeaderProps {
  toggleDarkMode: (e: React.MouseEvent) => void;
  itemVariants: MotionVariants;
  darkMode: boolean;
}

export default function Header({ toggleDarkMode, itemVariants, darkMode }: HeaderProps) {
  return (
    <motion.div 
      variants={itemVariants} 
      className="text-center space-y-4 bg-transparent p-6 rounded-lg border border-blue-200 dark:border-[#a3e635]"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <a 
            className="no-underline" 
            href="https://github.com/Papun1111"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5 text-blue-700 dark:text-lime-300 hover:text-blue-900 dark:hover:text-lime-200 hover:w-6 hover:h-6 transition-all duration-300" />
          </a>
        </div>
        
        {/* Switch Toggle */}
        <button
          onClick={toggleDarkMode}
          className="relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-purple-400 bg-gray-200 dark:bg-gray-700 overflow-hidden"
        >
          <motion.div
            className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
            animate={{
              left: darkMode ? '36px' : '4px'
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }}
          >
            <motion.div
              initial={{ rotate: 0, scale: 1 }}
              animate={{ 
                rotate: darkMode ? 360 : 0,
                scale: darkMode ? 1 : 1
              }}
              transition={{ 
                rotate: { duration: 0.6, ease: "easeInOut" },
                scale: { duration: 0.3 }
              }}
            >
              {darkMode ? (
                <GiNightSky className="w-4 h-4 text-lime-600 hover:cursor-pointer" />
              ) : (
                <GiSunPriest className="w-4 h-4 text-orange-500 hover:cursor-pointer" />
              )}
            </motion.div>
          </motion.div>
        </button>
      </div>

      <h1 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-[#C6E2E9]">
        Hi, I'm Papun Mohapatra
      </h1>
      <p className="bg-gradient-to-r from-blue-900 to-gray-900 bg-clip-text text-transparent dark:text-[#DAB894] leading-relaxed text-sm sm:text-base max-w-md mx-auto">
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
          <FaGithub className="w-4 h-4" />
        </motion.a>
        <motion.a
          href="https://x.com/gotenseijuro"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 bg-sky-100 dark:bg-indigo-800 text-sky-600 dark:text-indigo-200 hover:text-sky-700 dark:hover:text-indigo-100 hover:bg-sky-200 dark:hover:bg-indigo-700 transition-all duration-300 rounded-md border border-sky-300 dark:border-indigo-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="w-4 h-4" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/papunm/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 bg-blue-100 dark:bg-violet-800 text-blue-600 dark:text-violet-200 hover:text-blue-700 dark:hover:text-violet-100 hover:bg-blue-200 dark:hover:bg-violet-700 transition-all duration-300 rounded-md border border-blue-300 dark:border-violet-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.div>
  );
}