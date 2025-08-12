import { motion } from "framer-motion";
import { MotionVariants } from "@/types";

interface FooterProps {
  itemVariants: MotionVariants;
}

export default function Footer({ itemVariants }: FooterProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="flex items-center justify-between">
        <span>Made with ❤️ by Papun Mohapatra</span>
      </div>
    </motion.div>
  );
}
