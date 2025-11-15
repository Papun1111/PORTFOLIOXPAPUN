import { motion } from "framer-motion";
import { tools } from "@/lib/tools";
import type { Tools } from "@/types";

export default function ToolsSection() {
  return (
    <div className="space-y-10">
      {Object.entries(tools).map(([category, items]) => (
        <div key={category} className="space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {category}
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-300 dark:from-gray-700 to-transparent"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {(items as Tools[]).map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative flex flex-col items-center justify-center p-4 sm:p-5 bg-white dark:bg-[#1a1a1a] rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-[#D9FF5C] transition-all duration-200 shadow-sm dark:shadow-none cursor-pointer"
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg pointer-events-none"></div>
                  
                  <div className="relative z-10 mb-2 sm:mb-3 transition-transform duration-200 group-hover:scale-110">
                    <Icon
                      className={`text-2xl sm:text-3xl ${tool.color.light} ${tool.color.dark} transition-all duration-200`}
                      aria-label={tool.name}
                      title={tool.name}
                    />
                  </div>

                  <span className="relative z-10 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                    {tool.name}
                  </span>

                  {/* Accent dot on hover */}
                  <motion.div
                    className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#D9FF5C] opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  ></motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}