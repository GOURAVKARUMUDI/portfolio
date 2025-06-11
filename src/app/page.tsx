'use client'

import React from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { HiCode, HiDatabase, HiCloud, HiMail, HiAcademicCap } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import ScrollToTop from '@/components/ScrollToTop'
import { motion } from 'framer-motion'
import Sidebar from '../components/Sidebar'
import ComingSoonProject from '../components/ComingSoonProject'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js and Tailwind CSS, featuring dark mode and responsive design.',
    image: '/project-placeholder.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    demoLink: 'https://your-portfolio.com',
    githubLink: 'https://github.com/GOURAVKARUMUDI',
  },
  {
    title: 'Coming Soon',
    description: 'A new and exciting project will be revealed here soon!',
    image: '/project-placeholder.png',
    technologies: [],
    demoLink: '',
    githubLink: '',
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
          className="max-w-4xl w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Education</h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg flex flex-col items-center">
            <Image
              src="/profile.jpg"
              alt="GOURAV KARUMUDI"
              width={150}
              height={150}
              className="rounded-full mb-6"
            />
            <div className="flex items-center gap-4 mb-4">
              <HiAcademicCap className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold">KL University, Vijayawada</h3>
                <p className="text-gray-600 dark:text-gray-400">B.Tech in CSE - Cybersecurity and Blockchain Technology</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Enrollment Year: 2024 | Expected Graduation: 2028</p>
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
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-6xl w-full text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Certificates</h2>
          <ComingSoonProject />
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex gap-4 text-2xl text-primary"
              >
                <a href="https://github.com/GOURAVKARUMUDI" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://x.com/GouravKarumudi" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
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
