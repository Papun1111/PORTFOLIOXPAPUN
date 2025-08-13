import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function OtherSection() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
          Education
        </h3>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-800 shadow-xs dark:shadow-none"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="text-2xl text-blue-600 dark:text-blue-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                  Institute of Technical Education And Research
                </h4>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs border-blue-200 dark:border-blue-800"
                >
                  Final Year
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Award className="w-4 h-4" />
                  <span>Bachelor's in Computer Science</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>2022 - Present</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Current CGPA
                </span>
                <div className="flex items-center gap-2">
                  <div className="bg-linear-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    8.75/10
                  </div>
                </div>
              </div>

              {/* Progress bar for CGPA visualization */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Academic Progress</span>
                  <span>87.5%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-linear-to-r from-green-500 to-blue-500 h-2 rounded-full"
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

      <div className="space-y-3 space-x-1 sm:space-y-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
          Friends
        </h3>
        <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded px-3 py-1 text-xs text-gray-700 dark:text-white shadow-xs dark:shadow-none">
            Rishi Mandal
          </div>
          
        </motion.div>
         <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
           <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded px-3 py-1 text-xs text-gray-700 dark:text-white shadow-xs dark:shadow-none">
            Naka
          </div>
          
        </motion.div>
         
      </div>
    </div>
  );
}
