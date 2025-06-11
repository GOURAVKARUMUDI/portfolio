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
      className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 group">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary rounded-full text-white hover:bg-primary/80 transform hover:scale-110 transition-all"
              aria-label="View Demo"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary rounded-full text-white hover:bg-primary/80 transform hover:scale-110 transition-all"
              aria-label="View Source Code"
            >
              <FaGithub size={20} />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
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