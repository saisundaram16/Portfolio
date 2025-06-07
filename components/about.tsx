"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

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
    <section id="about" ref={ref} className="py-20 min-h-screen flex items-center relative">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <motion.div variants={itemVariants} className="relative">
          <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border-4 border-cyan-500/20 shadow-xl shadow-cyan-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
            <img src="/placeholder.svg?height=500&width=500" alt="Sai Sathvik" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg -z-10"></div>
          <div className="absolute -top-5 -left-5 w-32 h-32 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg -z-10"></div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-2">
            About <span className="text-cyan-400">Me</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mb-6"
          ></motion.div>

          <motion.p variants={itemVariants} className="text-gray-300 mb-4">
            Hello! I'm P. Sai Sathvik, a passionate Full Stack Developer with a strong foundation in modern web
            technologies. I enjoy creating digital experiences that are both functional and visually appealing.
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-300 mb-6">
            With expertise in frontend and backend development, I specialize in building responsive web applications
            using React, Next.js, Node.js, and various other technologies. I'm constantly learning and adapting to new
            tools and methodologies to stay at the forefront of web development.
          </motion.p>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-cyan-400 font-medium mb-2">Education</h3>
              <p className="text-gray-300">B.Tech in Computer Science</p>
              <p className="text-gray-400 text-sm">2018 - 2022</p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-medium mb-2">Experience</h3>
              <p className="text-gray-300">3+ Years</p>
              <p className="text-gray-400 text-sm">Full Stack Development</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

