import { motion } from "framer-motion";
import { MotionVariants } from "@/types";

const tabs = ["Projects", "Experience", "Tools", "Other"] as const;
export type TabType = typeof tabs[number];

interface NavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  itemVariants: MotionVariants;
}

export default function Navigation({ activeTab, setActiveTab, itemVariants }: NavigationProps) {
  return (
    <motion.div variants={itemVariants} className="flex justify-center">
      <div className="flex bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-lg p-1.5 w-full max-w-md overflow-x-auto">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap flex-1 ${
              activeTab === tab
                ? "bg-white dark:bg-[#D9FF5C] text-gray-900 dark:text-black shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {tab}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}