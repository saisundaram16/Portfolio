"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 88 },
      { name: "Next.js", level: 82 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 78 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 72 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "TypeScript", level: 80 },
      { name: "Testing", level: 75 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" ref={ref} className="py-20 min-h-screen flex items-center relative">
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here's an overview of my technical
            skills and proficiency levels.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-cyan-400">{skillGroup.category}</h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.2 + index * 0.1 + groupIndex * 0.2 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 + groupIndex * 0.2 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6 text-cyan-400">Other Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Redux", "Vue.js", "Sass", "Firebase", "Jest", "Webpack", "Figma", "Material UI", "Python", "CI/CD"].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="px-4 py-2 bg-gray-800/70 text-gray-300 rounded-full border border-gray-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ),
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

