"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const textElement = textRef.current
    if (!textElement) return

    const text = textElement.innerText
    textElement.innerHTML = ""
    ;[...text].forEach((char, i) => {
      const span = document.createElement("span")
      span.innerText = char
      span.style.opacity = "0"
      span.style.transform = "translateY(20px)"
      span.style.display = "inline-block"
      span.style.transition = `opacity 0.5s ease ${i * 0.03}s, transform 0.5s ease ${i * 0.03}s`
      textElement.appendChild(span)

      setTimeout(() => {
        span.style.opacity = "1"
        span.style.transform = "translateY(0)"
      }, 100)
    })
  }, [])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-cyan-400 font-medium mb-4"
        >
          Hello, I'm
        </motion.p>

        <h1 ref={textRef} className="text-5xl md:text-7xl font-bold mb-4">
          P. Sai Sathvik
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl md:text-3xl text-gray-300 mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Full Stack Developer
          </span>{" "}
          & Tech Enthusiast
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 max-w-xl mb-8"
        >
          I build exceptional digital experiences with modern technologies. Passionate about creating innovative
          solutions that make a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-4"
        >
          <Button
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105 group"
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Get in touch
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outline"
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            View my work
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex gap-4 mt-8"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

