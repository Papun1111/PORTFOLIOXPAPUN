"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function OtherSection() {
  return (
    <div className="space-y-12">
      {/* ================= EDUCATION ================= */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-semibold tracking-wide text-gray-900 dark:text-white">
            EDUCATION
          </h3>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 dark:from-[#D9FF5C]/40 to-transparent" />
        </div>

        <motion.div
          whileHover={{
            y: -6,
            boxShadow: "0 0 22px rgba(217, 255, 92, 0.25)",
          }}
          transition={{ duration: 0.25 }}
          className="
            rounded-xl
            p-6
            transition-all
            duration-300

            /* Light */
            bg-white
            border border-gray-200
            hover:border-[#D9FF5C]

            /* Dark */
            dark:bg-[#0B0F0A]
            dark:border-[#1f2a1f]
            dark:hover:border-[#D9FF5C]
          "
        >
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="text-gray-600 dark:text-[#D9FF5C]">
              <GraduationCap className="w-6 h-6" />
            </div>

            <div className="flex-1 space-y-5">
              {/* Title */}
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <h4 className="font-semibold text-base text-gray-900 dark:text-white">
                  Institute of Technical Education And Research
                </h4>

                <Badge
                  variant="outline"
                  className="
                    text-xs
                    px-2
                    py-0.5
                    tracking-wider

                    /* Light */
                    text-gray-900
                    border-gray-300

                    /* Dark */
                    dark:text-[#D9FF5C]
                    dark:border-[#D9FF5C]
                  "
                >
                  FINAL YEAR
                </Badge>
              </div>

              {/* Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Award className="w-4 h-4" />
                  <span>Bachelor&apos;s in Computer Science</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>2022 – Present</span>
                </div>
              </div>

              {/* CGPA */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-[#1f2a1f]">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Current CGPA
                </span>
                <div
                  className="
                    px-4
                    py-1.5
                    rounded-md
                    text-sm
                    font-semibold

                    /* Light */
                    bg-gray-100
                    text-gray-900

                    /* Dark */
                    dark:bg-[#0f140f]
                    dark:text-white
                    dark:shadow-[0_0_10px_rgba(217,255,92,0.25)]
                  "
                >
                  8.75 / 10
                </div>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Academic Progress</span>
                  <span>87.5%</span>
                </div>

                <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-[#1a1f1a] overflow-hidden">
                  <motion.div
                    className="
                      h-2
                      rounded-full

                      /* Light */
                      bg-gradient-to-r from-gray-400 to-gray-600

                      /* Dark */
                      dark:bg-gradient-to-r dark:from-[#D9FF5C] dark:to-[#A6FF00]
                    "
                    initial={{ width: 0 }}
                    animate={{ width: "87.5%" }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= FRIENDS ================= */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-semibold tracking-wide text-gray-900 dark:text-white">
            FRIENDS
          </h3>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 dark:from-[#D9FF5C]/40 to-transparent" />
        </div>

        <div className="flex flex-wrap gap-3">
          {["Rishi Mandal", "Naka"].map((friend) => (
            <motion.div
              key={friend}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 12px rgba(217, 255, 92, 0.3)",
              }}
              className="
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
                cursor-pointer
                transition-all
                duration-300

                /* Light */
                bg-white
                border border-gray-200
                text-gray-700
                hover:border-[#D9FF5C]

                /* Dark */
                dark:bg-[#0B0F0A]
                dark:border-[#1f2a1f]
                dark:text-gray-300
                dark:hover:border-[#D9FF5C]
              "
            >
              {friend}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
