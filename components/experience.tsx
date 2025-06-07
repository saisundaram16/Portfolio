"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Leading the frontend development team in building responsive and accessible web applications. Implementing modern UI/UX designs and optimizing performance.",
    skills: ["React", "Next.js", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    location: "New York, NY",
    period: "2020 - 2022",
    description:
      "Developed and maintained full-stack applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    skills: ["React", "Node.js", "Express", "MongoDB", "AWS"],
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Studios",
    location: "Boston, MA",
    period: "2018 - 2020",
    description:
      "Assisted in the development of responsive websites and web applications. Worked on frontend implementations and backend integrations.",
    skills: ["HTML/CSS", "JavaScript", "jQuery", "PHP", "MySQL"],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="experience" ref={ref} className="py-20 min-h-screen flex items-center relative">
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-3xl"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey in the tech industry. Here's a timeline of my career growth and the companies I've
            worked with.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 transform md:translate-x-px"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"}`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-gray-900 ${
                  index % 2 === 0 ? "left-0 md:-left-2.5" : "left-0 md:-left-2.5"
                }`}
              ></div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                <h4 className="text-cyan-400 font-medium mb-3">{exp.company}</h4>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    {exp.location}
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

