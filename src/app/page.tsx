'use client'

import React from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter, FaCertificate } from 'react-icons/fa'
import { HiCode, HiDatabase, HiCloud } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'
import ScrollToTop from '@/components/ScrollToTop'

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
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white animate-fade-in">
                  Hi, I'm <span className="text-primary">Gourav Karumudi</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-in-delay">
                  A passionate developer building amazing digital experiences
                </p>
                <div className="flex gap-6 animate-fade-in-delay-2">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-glow transform hover:scale-110 transition-all duration-300 animate-float"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-glow transform hover:scale-110 transition-all duration-300 animate-float-slow"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-glow transform hover:scale-110 transition-all duration-300 animate-float-fast"
                  >
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto animate-float">
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full"></div>
                  <div className="absolute inset-4 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <Image
                      src="/profile-placeholder.png"
                      alt="Profile"
                      fill
                      className="object-cover transform hover:scale-105 transition-transform"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-white dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              My Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-glow transform hover:-translate-y-2 transition-all duration-500">
                <div className="animate-float-slow">
                  <HiCode className="w-16 h-16 text-primary mb-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white hover:text-primary transition-colors duration-300">Frontend Development</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {['React / Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3'].map((skill) => (
                    <li key={skill} className="flex items-center space-x-2 hover:text-primary dark:hover:text-primary transition-colors duration-300">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-glow transform hover:-translate-y-2 transition-all duration-500">
                <div className="animate-float">
                  <HiDatabase className="w-16 h-16 text-accent mb-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white hover:text-accent transition-colors duration-300">Backend Development</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {['Node.js', 'Python', 'SQL / NoSQL', 'RESTful APIs'].map((skill) => (
                    <li key={skill} className="flex items-center space-x-2 hover:text-accent dark:hover:text-accent transition-colors duration-300">
                      <span className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-glow transform hover:-translate-y-2 transition-all duration-500">
                <div className="animate-float-fast">
                  <HiCloud className="w-16 h-16 text-success mb-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white hover:text-success transition-colors duration-300">Other Skills</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {['Git / GitHub', 'AWS / Cloud', 'Docker', 'CI/CD'].map((skill) => (
                    <li key={skill} className="flex items-center space-x-2 hover:text-success dark:hover:text-success transition-colors duration-300">
                      <span className="w-2 h-2 bg-success rounded-full animate-pulse-slow" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Certificates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all"
                >
                  <FaCertificate className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Certificate Name</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Description of the certification and skills acquired.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Issued by: Organization Name
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
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

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 max-w-2xl mx-auto transform hover:scale-105 transition-all">
              <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out if you'd like to connect!
              </p>
              <div className="flex justify-center gap-6">
                <a
                  href="mailto:your.email@example.com"
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
                >
                  Email Me
                </a>
                <a
                  href="/your-resume.pdf"
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 