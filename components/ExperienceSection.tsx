import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
        Experience
      </h2>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-lime-600 shadow-xs dark:shadow-none"
      >
        <div className="space-y-3 sm:space-y-4">
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
              Full Stack Web Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Cognizant • 2025 - Present
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
            Working on innovative solutions and contributing to open source
            projects. Passionate about creating efficient, scalable
            applications.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
