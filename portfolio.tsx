"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code,
  Database,
  BookOpen,
  GraduationCap,
  Award,
  Languages,
  FileText,
  ChevronRight,
  Briefcase,
  Phone,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import { motion, useScroll } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 10,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, ${
              particle.id % 4 === 0
                ? "rgba(236, 72, 153, 0.6)"
                : particle.id % 4 === 1
                  ? "rgba(139, 92, 246, 0.6)"
                  : particle.id % 4 === 2
                    ? "rgba(6, 182, 212, 0.6)"
                    : "rgba(34, 197, 94, 0.6)"
            }, transparent)`,
            willChange: "transform",
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 25, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}

// Cosmic Background Stars
const CosmicStars = () => {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    opacity: Math.random() * 0.8 + 0.2,
    twinkleDelay: Math.random() * 5,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            willChange: "transform",
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: star.twinkleDelay,
          }}
        />
      ))}
    </div>
  )
}

// Animated Geometric Shapes
const GeometricShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large rotating triangle */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 border-2 border-pink-400/30"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          background: "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.1))",
          willChange: "transform",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      {/* Floating hexagon */}
      <motion.div
        className="absolute bottom-40 left-20 w-32 h-32"
        style={{
          clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          background: "linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(34, 197, 94, 0.2))",
          willChange: "transform",
        }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Pulsing circles */}
      <motion.div
        className="absolute top-1/2 left-10 w-24 h-24 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent)",
          willChange: "transform",
        }}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Morphing blob */}
      <motion.div
        className="absolute bottom-20 right-40 w-48 h-48 rounded-full"
        style={{
          background: "linear-gradient(45deg, rgba(236, 72, 153, 0.15), rgba(6, 182, 212, 0.15))",
          willChange: "transform",
        }}
        animate={{
          borderRadius: ["50%", "30% 70% 70% 30% / 30% 30% 70% 70%", "50%"],
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Additional cosmic elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34, 197, 94, 0.4), transparent)",
          willChange: "transform",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  )
}

// Interactive Mouse Follower
const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let animationFrameId: number

    const updateMousePosition = (e: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", updateMousePosition, { passive: true })

    const interactiveElements = document.querySelectorAll("button, a, input, textarea")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter, { passive: true })
      el.addEventListener("mouseleave", handleMouseLeave, { passive: true })
    })

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      window.removeEventListener("mousemove", updateMousePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{
        x: mousePosition.x - 15,
        y: mousePosition.y - 15,
        willChange: "transform",
      }}
      animate={{
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-80 blur-sm" />
    </motion.div>
  )
}

// Animated Grid Background
const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg className="w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated grid lines */}
    </div>
  )
}

// Floating Code Snippets
const FloatingCodeSnippets = () => {
  const codeSnippets = [
    "def analyze_data():",
    "SELECT * FROM patients",
    "#include <iostream>",
    "class GymMember",
    "import numpy as np",
    "void main()",
    "CREATE TABLE",
    "BMI = weight/(height*height)",
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute text-sm font-mono text-gray-400/20 whitespace-nowrap"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            willChange: "transform",
          }}
          animate={{
            y: [0, -120, 0],
            opacity: [0, 0.4, 0],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 25 + index * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 3,
            ease: "easeInOut",
          }}
        >
          {snippet}
        </motion.div>
      ))}
    </div>
  )
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = ["home", "education", "skills", "projects", "certificates", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    {
      category: "Programming",
      icon: <Code className="h-8 w-8" />,
      items: ["C", "C++", "Python"],
      color: "bg-gradient-to-br from-pink-500 to-rose-500",
    },
    {
      category: "Databases",
      icon: <Database className="h-8 w-8" />,
      items: ["SQL", "Database Management Systems (DBMS)"],
      color: "bg-gradient-to-br from-violet-500 to-purple-500",
    },
    {
      category: "Data Science",
      icon: <FileText className="h-8 w-8" />,
      items: ["Data Visualization using Python"],
      color: "bg-gradient-to-br from-cyan-500 to-blue-500",
    },
    {
      category: "Mathematics for AI",
      icon: <BookOpen className="h-8 w-8" />,
      items: ["Calculus", "Linear Algebra", "Discrete Mathematics", "Probability & Statistics"],
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      category: "Computer Science",
      icon: <Briefcase className="h-8 w-8" />,
      items: ["Digital Logic", "Data Structures", "Cybersecurity Management", "Object Oriented Programming"],
      color: "bg-gradient-to-br from-amber-500 to-yellow-500",
    },
    {
      category: "Other Skills",
      icon: <Award className="h-8 w-8" />,
      items: ["Stock Market", "Digital Marketing", "Search Engine Optimization"],
      color: "bg-gradient-to-br from-red-500 to-orange-500",
    },
  ]

  const projects = [
    {
      title: "Hospital Management System",
      description:
        "Designed a Hospital Management System as part of a Database Management Systems (DBMS) academic course. Created a Problem Statement, designed an ER Diagram, and implemented a relational database using SQL. Developed queries for patient records, doctor availability, equipment management and billing system.",
      technologies: ["SQL", "DBMS", "ER Diagram", "Database Design"],
      github: "#",
      color: "from-pink-500 to-rose-500",
      type: "Academic Project",
    },
    {
      title: "GYM Management System",
      description:
        "Developed a Gym Management System using C++ and OOP principles, implementing Encapsulation, Inheritance, Friend Functions, and Virtual Functions to manage trainers, members, and equipment efficiently. Designed an interactive, menu-driven system to track member fitness data, calculate BMI with fitness recommendations, and maintain gym equipment and cleaning schedules. Created a structured database model with classes for Person, Trainer, Member, Equipment, and Maintenance, ensuring scalable and organized data management.",
      technologies: ["C++", "OOP", "Data Structures", "Database Design"],
      github: "#",
      color: "from-violet-500 to-purple-500",
      type: "Academic Project",
    },
  ]

  const certificates = [
    {
      title: "AI for All",
      issuer: "Nvidia",
      date: "Mar 2025",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Introduction to Networking",
      issuer: "Nvidia",
      date: "Mar 2025",
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Cyber Security and Privacy",
      issuer: "IIT Madras (NPTEL)",
      date: "Nov 2024",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Python",
      issuer: "HackerRank",
      date: "Sep 2024",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Stock Market",
      issuer: "Great Learning",
      date: "Aug 2024",
      color: "from-amber-500 to-yellow-500",
    },
    {
      title: "Google Ads for Beginners",
      issuer: "Coursera",
      date: "May 2024",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "SEO for Beginners [Live Session]",
      issuer: "Great Learning",
      date: "May 2024",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Introduction to Digital Marketing",
      issuer: "Great Learning",
      date: "Mar 2024",
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Introduction to Ethical Hacking",
      issuer: "Great Learning",
      date: "Mar 2024",
      color: "from-pink-500 to-rose-500",
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Creative Background Elements */}
      <FloatingParticles />
      <CosmicStars />
      <GeometricShapes />
      <AnimatedGrid />
      <FloatingCodeSnippets />
      <MouseFollower />

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Dynamic Background Gradients */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 60% 40%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)
            `,
          }}
          animate={{
            background: [
              `radial-gradient(circle at 20% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 60% 40%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
              `radial-gradient(circle at 60% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 40% 60%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 70% 70%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
            ],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, #ff006e 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #8338ec 0%, transparent 50%),
              radial-gradient(circle at 75% 25%, #3a86ff 0%, transparent 50%),
              radial-gradient(circle at 25% 75%, #06ffa5 0%, transparent 50%)
            `,
            filter: "blur(120px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md border-b border-gray-800/50 z-40 bg-gray-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Sundaram Sai
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "education", "skills", "projects", "certificates", "contact"].map((section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  className={cn(
                    "transition-colors capitalize relative",
                    activeSection === section ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-cyan-400",
                  )}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400"
                      layoutId="activeSection"
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-4 border-t border-gray-800/50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex flex-col space-y-4">
                {["home", "education", "skills", "projects", "certificates", "contact"].map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className={cn(
                      "transition-colors capitalize",
                      activeSection === section ? "text-cyan-400 font-medium" : "text-gray-300 hover:text-cyan-400",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="mb-4 px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30">
                  Computer Science & Data Science Student
                </Badge>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="block">Hi, I'm</span>
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Sundaram Sai
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                A passionate Computer Science & Data Science student specializing in Artificial Intelligence, with
                interests in programming, data analysis, and digital marketing.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 transform hover:scale-105 transition-transform text-white"
                >
                  <a href="#projects" className="flex items-center">
                    View My Projects
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transform hover:scale-105 transition-transform"
                >
                  <a href="#contact">Contact Me</a>
                </Button>
              </motion.div>

              <motion.div
                className="flex space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <motion.a
                  href="https://github.com/saisundaram16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sundaramsai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="mailto:saisundaram16@gmail.com"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="h-6 w-6" />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-75 blur-sm"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="relative rounded-full border-4 border-gray-800 overflow-hidden w-80 h-80 md:w-[28rem] md:h-[28rem] bg-gray-800"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Image
                    src="/images/profile.jpg"
                    alt="Sundaram Sai - Computer Science & Data Science Student"
                    fill
                    className="object-cover object-center scale-110"
                    sizes="(max-width: 768px) 320px, 448px"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative overflow-hidden">
            <motion.div
              className="w-1.5 h-3 bg-gradient-to-b from-pink-400 to-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Education</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Academic Background</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              My educational journey in Computer Science, Data Science, and Artificial Intelligence.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">My Education</h3>
              <div className="space-y-6">
                <motion.div
                  className="relative pl-8 border-l-2 border-cyan-500/30 pb-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyan-500"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                  <h4 className="text-xl font-semibold text-white">
                    Bachelor of Science (Hons) in Computer Science & Data Science
                  </h4>
                  <p className="text-gray-400">Sri Sathya Sai Institute of Higher Learning, Puttaparthi</p>
                  <p className="text-gray-400">Jul 2023 – Apr 2027</p>
                  <p className="mt-2 text-gray-300">Specialization in Artificial Intelligence</p>
                </motion.div>

                <motion.div
                  className="relative pl-8 border-l-2 border-cyan-500/30"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyan-500"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                  <h4 className="text-xl font-semibold text-white">Higher Secondary Education</h4>
                  <p className="text-gray-400">International Centre English School, Kanpur</p>
                  <p className="mt-2 text-gray-300">Physics, Chemistry, Mathematics</p>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-75 blur"></div>
              <Card className="relative border-gray-800 bg-gray-800/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <GraduationCap className="h-10 w-10 text-cyan-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">Educational Focus</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-cyan-500/20 p-1 rounded-full">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <span className="text-gray-300">Computer Science & Data Science fundamentals</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-cyan-500/20 p-1 rounded-full">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <span className="text-gray-300">Artificial Intelligence specialization</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-cyan-500/20 p-1 rounded-full">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <span className="text-gray-300">Mathematics for AI and Machine Learning</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-cyan-500/20 p-1 rounded-full">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <span className="text-gray-300">Database Management Systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 bg-cyan-500/20 p-1 rounded-full">
                        <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                      </div>
                      <span className="text-gray-300">Programming and Software Development</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Skills</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Technical Skills</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              My technical expertise across various domains of computer science, data science, and more.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Card className="h-full border-gray-800 bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all overflow-hidden group relative">
                  <div className={`h-2 ${skill.color}`}></div>
                  <CardHeader>
                    <motion.div
                      className={`inline-flex p-3 rounded-lg ${skill.color} text-white mb-4`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <CardTitle className="text-2xl text-white">{skill.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: itemIndex * 0.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-sm py-1 bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
                          >
                            {item}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Languages</h3>
            <div className="flex justify-center gap-8">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-4">
                  <Languages className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white">English</h4>
                <p className="text-gray-400">Fluent</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                  <Languages className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white">Hindi</h4>
                <p className="text-gray-400">Native</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Projects</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">My Projects</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Showcasing my academic projects in database management and object-oriented programming.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-24"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <motion.div
                  className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}
                  initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge className="mb-4 px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                    {project.type}
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge
                          variant="outline"
                          className="text-sm py-1 border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:bg-gray-700"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div
                  className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="relative group">
                    <motion.div
                      className={`absolute -inset-1 rounded-lg bg-gradient-to-r ${project.color} opacity-75 blur group-hover:opacity-100 transition duration-300`}
                      animate={{ rotate: [0, 1, -1, 0] }}
                      transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />
                    <motion.div
                      whileHover={{ scale: 1.02, rotateY: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <Card className="relative border-gray-800 bg-gray-800/50 backdrop-blur-sm overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-6">
                            {project.title.includes("Hospital") ? (
                              <Database className="h-12 w-12 text-pink-400 mr-4" />
                            ) : (
                              <Code className="h-12 w-12 text-violet-400 mr-4" />
                            )}
                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                          </div>
                          <div className="space-y-4">
                            <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${project.color}`}
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              {project.technologies.map((tech, i) => (
                                <div key={i} className="flex items-center">
                                  <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></div>
                                  <span className="text-gray-300 text-sm">{tech}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
              Certificates
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Certifications</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Professional certifications and courses I've completed to enhance my skills.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Card className="h-full border-gray-800 bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all overflow-hidden group relative">
                  <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                  <CardContent className="pt-6 relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="relative mr-4">
                        <motion.div
                          className={`absolute -inset-0.5 rounded-full bg-gradient-to-r ${cert.color} opacity-75 blur-sm`}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                        <div
                          className={`relative rounded-full overflow-hidden w-12 h-12 flex items-center justify-center bg-gradient-to-r ${cert.color}`}
                        >
                          <Award className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{cert.title}</h4>
                        <p className="text-sm text-gray-400">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-gray-400 border-gray-600">
                        {cert.date}
                      </Badge>
                    </div>
                  </CardContent>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-3 py-1 text-sm bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Contact</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Feel free to reach out to me for academic collaborations, projects, or any inquiries.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
              <Card className="border-gray-800 bg-gray-800/50 backdrop-blur-sm shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send Me a Message</CardTitle>
                  <CardDescription className="text-gray-400">I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-300">
                          Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="mt-1 bg-gray-700 border-gray-600 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-300">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          className="mt-1 bg-gray-700 border-gray-600 text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-gray-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        placeholder="How can I help you?"
                        className="mt-1 bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        rows={5}
                        className="mt-1 bg-gray-700 border-gray-600 text-white"
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white"
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
              <Card className="border-gray-800 shadow-lg h-full bg-gradient-to-br from-pink-500 to-cyan-500 text-white relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(147, 51, 234, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)",
                      "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)",
                      "linear-gradient(225deg, rgba(6, 182, 212, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)",
                      "linear-gradient(315deg, rgba(147, 51, 234, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)",
                    ],
                  }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription className="text-white/80">
                    Feel free to reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <motion.div
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="bg-white/20 p-3 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Mail className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-white/80">Email</p>
                      <a href="mailto:saisundaram16@gmail.com" className="hover:underline">
                        saisundaram16@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="bg-white/20 p-3 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Phone className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-white/80">Phone</p>
                      <a href="tel:+919451250815" className="hover:underline">
                        +91 9451250815
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="bg-white/20 p-3 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Github className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-white/80">GitHub</p>
                      <a
                        href="https://github.com/saisundaram16"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        github.com/saisundaram16
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="bg-white/20 p-3 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-white/80">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/sundaramsai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        linkedin.com/in/sundaramsai
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="bg-white/20 p-3 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <MapPin className="h-5 w-5" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-white/80">Location</p>
                      <a
                        href="https://maps.google.com/?q=Kanpur,Uttar+Pradesh,India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Kanpur, Uttar Pradesh, India
                      </a>
                    </div>
                  </motion.div>

                  <div className="pt-6">
                    <p className="text-lg font-medium mb-2">Current Status</p>
                    <p className="text-white/80">
                      Currently pursuing my degree and open to academic collaborations and internship opportunities.
                    </p>
                    <motion.div
                      className="mt-4 flex items-center space-x-2"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm">Available for opportunities</span>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <motion.div
                className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Sundaram Sai
              </motion.div>
              <p className="text-gray-400 max-w-xs">
                A passionate Computer Science & Data Science student focused on AI and creating innovative solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                {["home", "education", "skills", "projects", "certificates", "contact"].map((link) => (
                  <li key={link}>
                    <motion.a
                      href={`#${link}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors capitalize"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Connect</h3>
              <div className="flex space-x-4">
                {[
                  { Icon: Github, href: "https://github.com/saisundaram16" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/sundaramsai" },
                  { Icon: Mail, href: "mailto:saisundaram16@gmail.com" },
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target={href.startsWith("mailto") ? "_self" : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-cyan-400 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          <motion.div
            className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-400">© 2024 Sundaram Sai. All rights reserved.</p>
            <motion.p
              className="text-gray-400 text-sm mt-2 md:mt-0"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              Designed & Built with ❤️
            </motion.p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
