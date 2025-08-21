"use client";
import Squares from "@/components/Squares";
import { useState, useEffect, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MotionVariants } from "@/types";

// Import all section components
import Header from "@/components/Header";
import Navigation, { TabType } from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";
import ToolsSection from "@/components/ToolsSection";
import ExperienceSection from "@/components/ExperienceSection";
import OtherSection from "@/components/OtherSection";
import Footer from "@/components/Footer";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabType>("Projects");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to toggle dark mode by adding/removing 'dark' class
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  // Check if dark mode is currently active
  const isDarkMode = () => {
    return document.documentElement.classList.contains('dark');
  };

  if (!mounted) return null;

  const containerVariants: MotionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: MotionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const tabContentVariants: MotionVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 },
    },
  };

  const renderTabContent = (): JSX.Element => {
    switch (activeTab) {
      case "Projects":
        return <ProjectsSection />;
      case "Experience":
        return <ExperienceSection />;
      case "Tools":
        return <ToolsSection />;
      case "Other":
        return <OtherSection />;
      default:
        return <ProjectsSection />;
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 relative overflow-hidden bg-white text-black dark:bg-black dark:text-white">
      {/* Background Squares */}
      <div className="absolute inset-0 w-full h-full min-h-full z-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="cyan"
          hoverFillColor="#222"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* Header */}
          <Header
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
            itemVariants={itemVariants}
          />

          {/* Navigation */}
          <Navigation
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            itemVariants={itemVariants}
          />

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-4 sm:space-y-6"
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>

          {/* Footer */}
          <Footer itemVariants={itemVariants} />
        </motion.div>
      </div>
    </div>
  );
}
