"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "Redux"],
    github: "#",
    demo: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media platforms with data visualization and reporting features.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "D3.js", "Express", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Application",
    description: "A weather forecast application with location-based services and interactive maps.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "OpenWeather API", "Mapbox", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
]

export default function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" ref={ref} className="py-20 min-h-screen flex items-center relative">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my skills and experience in different areas of
            web development.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/80 p-2 rounded-full hover:bg-cyan-500/80 transition-colors duration-300"
                    aria-label="GitHub Repository"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/80 p-2 rounded-full hover:bg-purple-500/80 transition-colors duration-300"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105 group">
            View all projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

