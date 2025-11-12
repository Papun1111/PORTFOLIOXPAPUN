import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Program Analyst",
    company: "Cognizant",
    period: "2025 - Present",
    status: "current",
    details: [
      "Working on innovative solutions and contributing to open source projects.",
      "Passionate about creating efficient, scalable applications."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Experience
      </h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8"
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 top-2 w-4 h-4 rounded-full border-2 ${
                exp.status === 'current' 
                  ? 'bg-[#D9FF5C] border-[#D9FF5C] dark:bg-[#D9FF5C] dark:border-[#D9FF5C]' 
                  : 'bg-gray-300 dark:bg-gray-600 border-gray-400 dark:border-gray-500'
              }`}></div>
              
              <div className="space-y-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  {exp.company && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.company} • {exp.period}
                    </p>
                  )}
                </div>
                
                {exp.details.length > 0 && (
                  <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400 mt-3">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
                
                {!exp.company && (
                  <p className="text-sm text-gray-500 dark:text-gray-500 font-medium mt-2">
                    {exp.period}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}