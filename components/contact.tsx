"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formState)
    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Message sent successfully!")
  }

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
    <section id="contact" ref={ref} className="py-20 min-h-screen flex items-center relative">
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me for any questions, project inquiries, or just to say hello. I'll get back to
            you as soon as possible.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="space-y-8">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                    <a
                      href="mailto:contact@saisathvik.com"
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      contact@saisathvik.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white mb-1">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white mb-1">Location</h3>
                    <p className="text-gray-300">San Francisco, California, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

