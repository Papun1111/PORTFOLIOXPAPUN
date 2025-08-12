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
      <div className="flex bg-gray-900 rounded-lg p-1 w-full max-w-md overflow-x-auto">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap flex-1 ${
              activeTab === tab
                ? "bg-gray-700 text-white"
                : "text-gray-400 hover:text-white"
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
