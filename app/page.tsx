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

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabType>("Projects");
  const [mounted, setMounted] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

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

  const toggleDarkMode = () => {
    const newTheme = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
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
    // UPDATED: Changed the background and text colors to a modern slate palette.
    <div className="min-h-screen transition-colors duration-300 relative overflow-hidden bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200">
      {/* Background Grid */}
      <div className="absolute inset-0 w-full h-full min-h-full z-0">
        {/* UPDATED: Changed the dot grid colors to a cool indigo accent. */}
        <DotGrid
          dotSize={2}
          gap={20}
          baseColor={darkMode ? "#4f46e5" : "#6366f1"} // Indigo shades for dark/light modes
          activeColor="#818cf8" // A lighter indigo for the shockwave effect
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
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