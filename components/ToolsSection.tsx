import { motion } from "framer-motion";
import { tools } from "@/lib/tools";
import type { Tools } from "@/types";

export default function ToolsSection() {
  return (
    <div className="space-y-8">
      {Object.entries(tools).map(([category, items]) => (
        <div key={category} className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {category}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {(items as Tools[]).map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center justify-center p-6 bg-white dark:bg-[#1a1a1a] rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 shadow-sm dark:shadow-none"
                >
                  <div className="mb-3">
                    <Icon
                      className={`text-3xl ${tool.color.light} ${tool.color.dark}`}
                      aria-label={tool.name}
                      title={tool.name}
                    />
                  </div>

                  <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">
                    {tool.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}