"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function OtherSection() {
  return (
    <div className="space-y-8">
      {/* Education */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Education
        </h3>

        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-[#1a1a1a] rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 shadow-sm dark:shadow-none"
        >
          <div className="flex items-start gap-4">
            <div className="text-gray-600 dark:text-gray-400">
              <GraduationCap className="w-6 h-6" />
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <h4 className="font-semibold text-base text-gray-900 dark:text-white">
                  Institute of Technical Education And Research
                </h4>
                <Badge
                  variant="outline"
                  className="bg-transparent text-[#D9FF5C] border-[#D9FF5C] px-2 py-0.5 text-xs"
                >
                  FINAL YEAR
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Award className="w-4 h-4" />
                  <span>Bachelor&apos;s in Computer Science</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>2022 - Present</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Current CGPA
                </span>
                <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-1.5 rounded-md text-sm font-semibold">
                  8.75/10
                </div>
              </div>

              {/* Progress bar for CGPA visualization */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500">
                  <span>Academic Progress</span>
                  <span>87.5%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-gradient-to-r from-gray-400 to-gray-500 dark:from-[#D9FF5C] dark:to-[#a3e635] h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "87.5%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Friends */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Friends
        </h3>
        <div className="flex flex-wrap gap-3">
          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 shadow-sm dark:shadow-none transition-all duration-200">
              Rishi Mandal
            </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
            <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-700 dark:text-gray-300 shadow-sm dark:shadow-none transition-all duration-200">
              Naka
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}