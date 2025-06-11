'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  demoLink?: string
  githubLink?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  githubLink,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubLink && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            >
              <FaGithub size={20} />
            </motion.a>
          )}
          {demoLink && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            >
              <FaExternalLinkAlt size={20} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard 