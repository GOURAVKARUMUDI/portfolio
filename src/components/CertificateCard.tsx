'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { HiLockClosed } from 'react-icons/hi'

const CertificateCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg relative overflow-hidden group"
    >
      <motion.div
        initial={{ opacity: 0.8 }}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"
      />
      
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <HiLockClosed className="w-12 h-12 text-primary" />
          </motion.div>
        </div>
        
        <h3 className="text-xl font-semibold text-center mb-4">Coming Soon</h3>
        
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center text-gray-600 dark:text-gray-400"
        >
          <p>Future Achievement Awaits</p>
          <p className="mt-2 text-sm">Stay tuned for exciting certifications!</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default CertificateCard 