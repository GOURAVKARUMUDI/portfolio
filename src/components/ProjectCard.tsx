'use client'

import React, { useState } from 'react'
import Image from 'next/image'
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
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 group">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 blur-[2px]' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-primary/60 flex items-center justify-center gap-6 transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full text-primary hover:text-white hover:bg-accent transform hover:scale-110 transition-all duration-300 animate-float-slow"
              aria-label="View Demo"
            >
              <FaExternalLinkAlt size={24} />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full text-primary hover:text-white hover:bg-accent transform hover:scale-110 transition-all duration-300 animate-float"
              aria-label="View Source Code"
            >
              <FaGithub size={24} />
            </a>
          )}
        </div>
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-primary/10 text-primary dark:bg-primary/20 rounded-full hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard 