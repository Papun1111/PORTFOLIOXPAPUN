import { motion } from "framer-motion";
import { tools } from "@/lib/tools";

export default function ToolsSection() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {Object.entries(tools).map(([category, items]) => (
        <div key={category} className="space-y-3 sm:space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
            {category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {items.map((tool, index: number) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex flex-col items-center p-3 sm:p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all shadow-xs dark:shadow-none"
              >
                <div className={`text-xl sm:text-2xl mb-2 ${tool.color}`}>
                  {tool.icon}
                </div>
                <span className="text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-white">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
