"use client";
import { useState, useEffect, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MotionVariants } from "@/types";

import Header from "@/components/Header";
import Navigation, { TabType } from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";
import ToolsSection from "@/components/ToolsSection";
import ExperienceSection from "@/components/ExperienceSection";
import OtherSection from "@/components/OtherSection";
import Footer from "@/components/Footer";
import DotGrid from "@/components/ui/DotGrid";
import DarkModeTransition from "@/components/DarkModeTransition";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabType>("Projects");
  const [mounted, setMounted] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [triggerPosition, setTriggerPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
    setMounted(true);
  }, []);

  const toggleDarkMode = (e: React.MouseEvent) => {
    // Get click position
    setTriggerPosition({ x: e.clientX, y: e.clientY });
    
    // Toggle theme after a brief delay to let animation start
    setTimeout(() => {
      const newTheme = !darkMode ? "dark" : "light";
      setDarkMode(!darkMode);
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }, 50);
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
    <div className="min-h-screen transition-colors duration-300 relative overflow-hidden bg-gray-50 dark:bg-black">
      {/* Dark Mode Transition Animation */}
      <DarkModeTransition isDark={darkMode} triggerPosition={triggerPosition} />

      {/* Background Grid */}
      <div className="absolute inset-0 w-full h-full min-h-full z-0 opacity-40 dark:opacity-30">
        <DotGrid
          dotSize={2}
          gap={20}
          baseColor={darkMode ? "#D9FF5C" : "#9ca3af"}
          activeColor={darkMode ? "#a3e635" : "#4b5563"}
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Header */}
          <Header
            toggleDarkMode={toggleDarkMode}
            itemVariants={itemVariants}
            darkMode={darkMode}
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
              className="min-h-[400px]"
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