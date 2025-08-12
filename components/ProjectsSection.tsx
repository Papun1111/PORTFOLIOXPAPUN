import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/project";

export default function ProjectsSection() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
        Projects
      </h2>
      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none"
        >
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="text-xl sm:text-2xl">{project.icon}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <Badge
                  variant="secondary"
                  className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs border-green-200 dark:border-green-800"
                >
                  {project.status}
                </Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                {project.technologies.map((tech: string) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="text-xs bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-4">
                {project.liveDemo && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Live Demo
                  </motion.a>
                )}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-200"
                >
                  <Github className="w-3 h-3" />
                  Source Code
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
