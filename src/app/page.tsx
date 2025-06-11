'use client'

import React from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter, FaCertificate } from 'react-icons/fa'
import { HiCode, HiDatabase, HiCloud, HiMail, HiAcademicCap } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import ScrollToTop from '@/components/ScrollToTop'
import { motion } from 'framer-motion'
import Sidebar from '../components/Sidebar'
import ComingSoonProject from '../components/ComingSoonProject'
import CertificateCard from '../components/CertificateCard'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js and Tailwind CSS, featuring dark mode and responsive design.',
    image: '/project-placeholder.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    demoLink: 'https://your-portfolio.com',
    githubLink: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
    image: '/project-placeholder.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoLink: 'https://your-ecommerce.com',
    githubLink: 'https://github.com/yourusername/ecommerce',
  },
]

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Sidebar />
      <ScrollToTop />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer | UI/UX Enthusiast
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white rounded-full hover:shadow-lg transition-shadow"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Education</h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <HiAcademicCap className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">KL University, Vijayawada</h3>
                <p className="text-gray-600 dark:text-gray-400">Bachelor's Degree</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Expected Graduation: 2028</p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Add your skills */}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-6xl w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ComingSoonProject />
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Senior Developer</h3>
                <p className="text-gray-600 dark:text-gray-400">2020 - Present</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Company Name • Location
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                <li>Led development of key features resulting in 40% user growth</li>
                <li>Mentored junior developers and implemented best practices</li>
                <li>Optimized application performance and reduced load times by 60%</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <p className="text-gray-600 dark:text-gray-400">2018 - 2020</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Previous Company • Location
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                <li>Developed and maintained multiple web applications</li>
                <li>Collaborated with cross-functional teams to deliver projects</li>
                <li>Implemented automated testing reducing bugs by 30%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-6xl w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CertificateCard />
            <CertificateCard />
            <CertificateCard />
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Me</h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col items-center gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-primary"
              >
                <HiMail className="w-6 h-6" />
                <a href="mailto:gouravkarumudi6@gmail.com" className="text-lg">
                  gouravkarumudi6@gmail.com
                </a>
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'mailto:gouravkarumudi6@gmail.com'}
                className="px-8 py-3 bg-primary text-white rounded-full hover:shadow-lg transition-shadow"
              >
                Send Email
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
} 