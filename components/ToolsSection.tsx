import { motion } from "framer-motion";
import { tools } from "@/lib/tools";
import type { Tools } from "@/types";

export default function ToolsSection() {
  return (
    <div className="space-y-12">
      {Object.entries(tools).map(([category, items]) => (
        <div key={category} className="space-y-6">
          {/* Category Header */}
          <div className="flex items-center gap-4">
            <h3
              className="
                text-xl
                font-semibold
                tracking-wide
                text-gray-900
                dark:text-white
              "
            >
              {category.toUpperCase()}
            </h3>

            <div
              className="
                flex-1 h-px

                /* Light */
                bg-gradient-to-r from-gray-300 via-gray-200 to-transparent

                /* Dark */
                dark:bg-gradient-to-r dark:from-[#D9FF5C]/40 dark:to-transparent
              "
            />
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {(items as Tools[]).map((tool, index) => {
              const Icon = tool.icon;

              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.025 }}
                  whileHover={{
                    y: -6,
                    boxShadow:
                      "0 0 18px rgba(217, 255, 92, 0.25)",
                  }}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    items-center
                    justify-center
                    p-5
                    rounded-xl
                    cursor-pointer
                    transition-all
                    duration-300

                    /* Light Mode */
                    bg-white
                    border border-gray-200
                    hover:border-[#D9FF5C]

                    /* Dark Mode */
                    dark:bg-[#0B0F0A]
                    dark:border-[#1f2a1f]
                    dark:hover:border-[#D9FF5C]
                  "
                >
                  {/* Energy Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-xl
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300

                      /* Light */
                      bg-gradient-to-br from-[#D9FF5C]/10 to-transparent

                      /* Dark */
                      dark:bg-gradient-to-br dark:from-[#D9FF5C]/15 dark:to-transparent
                    "
                  />

                  {/* Icon */}
                  <div className="relative z-10 mb-3 group-hover:scale-110 transition-transform duration-200">
                    <Icon
                      className={`
                        text-2xl sm:text-3xl
                        ${tool.color.light}
                        ${tool.color.dark}
                        drop-shadow-[0_0_8px_rgba(217,255,92,0.35)]
                        transition-all
                        duration-200
                      `}
                      aria-label={tool.name}
                      title={tool.name}
                    />
                  </div>

                  {/* Name */}
                  <span
                    className="
                      relative
                      z-10
                      text-xs
                      sm:text-sm
                      font-medium
                      text-center

                      /* Light */
                      text-gray-700
                      group-hover:text-gray-900

                      /* Dark */
                      dark:text-gray-300
                      dark:group-hover:text-white

                      transition-colors
                      duration-200
                    "
                  >
                    {tool.name}
                  </span>

                  {/* Neon Indicator */}
                  <span
                    className="
                      absolute
                      top-2
                      right-2
                      w-2
                      h-2
                      rounded-full
                      bg-[#D9FF5C]
                      opacity-0
                      group-hover:opacity-100
                      shadow-[0_0_8px_#D9FF5C]
                      transition-opacity
                    "
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
