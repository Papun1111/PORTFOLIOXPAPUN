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
      className="text-center space-y-6 bg-white dark:bg-[#1a1a1a] p-8 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1"></div>
        
        {/* Switch Toggle */}
        <button
          onClick={toggleDarkMode}
          className="relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 bg-gray-200 dark:bg-gray-700 overflow-hidden"
        >
          <motion.div
            className="absolute top-1 w-6 h-6 bg-white dark:bg-[#D9FF5C] rounded-full shadow-md flex items-center justify-center"
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
                <GiNightSky className="w-4 h-4 text-gray-900" />
              ) : (
                <GiSunPriest className="w-4 h-4 text-orange-500" />
              )}
            </motion.div>
          </motion.div>
        </button>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Hi, I'm Papun Mohapatra
      </h1>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base max-w-2xl mx-auto">
        I craft modern web applications with cutting-edge technologies,
        currently exploring the fascinating world of Web3 and decentralised
        applications.
      </p>

      <div className="flex items-center justify-center gap-4 pt-4">
        <motion.a
          href="https://github.com/Papun1111"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 shadow-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-5 h-5" />
        </motion.a>
        <motion.a
          href="https://x.com/gotenseijuro"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 shadow-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="w-5 h-5" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/papunm/"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 shadow-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-5 h-5" />
        </motion.a>
      </div>
    </motion.div>
  );
}