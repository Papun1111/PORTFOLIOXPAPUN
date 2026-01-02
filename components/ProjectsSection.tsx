import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/project";

export default function ProjectsSection() {
  return (
    <div className="space-y-6">
      {/* Section Title */}
      <h2
        className="
          text-2xl
          font-bold
          tracking-wide
          text-gray-900
          dark:text-[#D9FF5C]
          mb-8
        "
      >
        PROJECTS
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{
              y: -6,
              boxShadow:
                "0 0 25px rgba(217, 255, 92, 0.25)",
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              rounded-xl
              p-6
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
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <h3
                className="
                  text-lg
                  font-semibold
                  tracking-wide
                  text-gray-900
                  dark:text-white
                "
              >
                {project.name}
              </h3>

              <div className="flex items-center gap-3">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    className="
                      text-gray-500
                      hover:text-[#D9FF5C]
                      dark:text-gray-400
                      dark:hover:text-[#D9FF5C]
                      transition-colors
                    "
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                )}

                {project.liveDemo && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    className="
                      text-gray-500
                      hover:text-[#D9FF5C]
                      dark:text-gray-400
                      dark:hover:text-[#D9FF5C]
                      transition-colors
                    "
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                )}
              </div>
            </div>

            {/* Description */}
            <p
              className="
                text-sm
                leading-relaxed
                mb-6
                text-gray-600
                dark:text-gray-400
              "
            >
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="
                    text-xs
                    px-3
                    py-1
                    uppercase
                    tracking-wider

                    /* Light Mode */
                    text-gray-900
                    border-gray-300
                    hover:border-[#D9FF5C]
                    hover:text-black
                    hover:bg-[#D9FF5C]

                    /* Dark Mode */
                    dark:text-[#D9FF5C]
                    dark:border-[#D9FF5C]
                    dark:hover:bg-[#D9FF5C]
                    dark:hover:text-black

                    transition-all
                    duration-200
                  "
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
