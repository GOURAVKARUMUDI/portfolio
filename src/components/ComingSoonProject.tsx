'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiSparkles } from 'react-icons/hi'

const ComingSoonProject = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg relative group"
    >
      <div className="h-48 bg-gradient-to-r from-primary/20 to-accent/20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(79,70,229,0.2) 0%, rgba(245,158,11,0.2) 100%)',
              'linear-gradient(225deg, rgba(79,70,229,0.2) 0%, rgba(245,158,11,0.2) 100%)',
              'linear-gradient(45deg, rgba(79,70,229,0.2) 0%, rgba(245,158,11,0.2) 100%)',
            ],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <HiSparkles className="w-16 h-16 text-primary" />
          </motion.div>
        </motion.div>
      </div>

      <div className="p-6">
        <motion.h3
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xl font-semibold mb-2 text-gray-900 dark:text-white"
        >
          Exciting Project Coming Soon
        </motion.h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          A revolutionary e-commerce platform that will transform online shopping experiences.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ComingSoonProject 