"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })

      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
        >
          Sai Sathvik
        </motion.div>

        <ul className="hidden md:flex space-x-1">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <a
                href={item.href}
                className={cn(
                  "relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-cyan-400 group",
                  activeSection === item.href.substring(1) ? "text-cyan-400" : "text-gray-300",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                    activeSection === item.href.substring(1) && "scale-x-100",
                  )}
                />
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
    </motion.nav>
  )
}

