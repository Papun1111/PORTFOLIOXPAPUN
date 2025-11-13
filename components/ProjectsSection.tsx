import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/project";

export default function ProjectsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Projects
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => {
          return (
            <motion.div
              key={project.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-[#1a1a1a] rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 shadow-sm dark:shadow-none"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  )}
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs px-3 py-1 bg-transparent text-blue-900 dark:text-[#D9FF5C] border-[#D9FF5C] hover:bg-[#D9FF5C] hover:text-black transition-colors duration-200"
                  >
                    {tech.toUpperCase()}
                  </Badge>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}