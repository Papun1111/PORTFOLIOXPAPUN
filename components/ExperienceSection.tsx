import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Program Analyst",
    company: "Cognizant",
    period: "2025 – Present",
    status: "current",
    details: [
      "Working on innovative solutions and contributing to open source projects.",
      "Passionate about creating efficient, scalable applications.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold tracking-wide text-gray-900 dark:text-white">
          EXPERIENCE
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 dark:from-[#D9FF5C]/40 to-transparent" />
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="
            absolute
            left-[7px]
            top-2
            bottom-0
            w-0.5

            /* Light */
            bg-gray-300

            /* Dark */
            dark:bg-[#1f2a1f]
          "
        />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.12, duration: 0.4 }}
              whileHover={{ x: 4 }}
              className="relative pl-10"
            >
              {/* Timeline Dot */}
              <div
                className={`
                  absolute
                  left-0
                  top-2
                  w-4
                  h-4
                  rounded-full
                  border-2

                  ${
                    exp.status === "current"
                      ? `
                        bg-[#D9FF5C]
                        border-[#D9FF5C]
                        shadow-[0_0_12px_rgba(217,255,92,0.6)]
                      `
                      : `
                        bg-gray-300
                        border-gray-400
                        dark:bg-gray-600
                        dark:border-gray-500
                      `
                  }
                `}
              />

              {/* Content Card */}
              <motion.div
                whileHover={{
                  boxShadow:
                    exp.status === "current"
                      ? "0 0 22px rgba(217,255,92,0.25)"
                      : "0 0 10px rgba(0,0,0,0.05)",
                }}
                transition={{ duration: 0.25 }}
                className="
                  rounded-xl
                  p-5
                  transition-all
                  duration-300

                  /* Light */
                  bg-white
                  border border-gray-200

                  /* Dark */
                  dark:bg-[#0B0F0A]
                  dark:border-[#1f2a1f]
                "
              >
                <div className="space-y-3">
                  {/* Title */}
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

                  {/* Details */}
                  {exp.details.length > 0 && (
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      {exp.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="leading-relaxed before:content-['▸'] before:mr-2 before:text-[#D9FF5C]"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}

                  {!exp.company && (
                    <p className="text-sm text-gray-500 font-medium">
                      {exp.period}
                    </p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
