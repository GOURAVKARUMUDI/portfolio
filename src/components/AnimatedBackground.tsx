'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  useEffect(() => {
    // Force the browser to recognize the animations
    document.body.style.webkitBackfaceVisibility = 'hidden'
    document.body.style.backfaceVisibility = 'hidden'
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden force-gpu">
      {/* Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-primary-light/40 to-accent-light/40 blur-3xl dark:from-primary/30 dark:to-accent/30 force-gpu"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.8, 0.6],
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-gradient-to-l from-success-light/40 to-primary-light/40 blur-3xl dark:from-success/30 dark:to-primary/30 force-gpu"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] dark:opacity-[0.1] force-gpu" />

      {/* Animated Lines */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.2, 0], y: [-100, 100, -100] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-[1px] h-full bg-gradient-to-b from-transparent via-primary-light/40 to-transparent absolute left-1/4 dark:via-primary/30 force-gpu"
        />
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.2, 0], y: [100, -100, 100] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="w-[1px] h-full bg-gradient-to-b from-transparent via-accent-light/40 to-transparent absolute left-2/4 dark:via-accent/30 force-gpu"
        />
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.2, 0], y: [-100, 100, -100] }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
          className="w-[1px] h-full bg-gradient-to-b from-transparent via-success-light/40 to-transparent absolute left-3/4 dark:via-success/30 force-gpu"
        />
      </div>

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          animate={{
            opacity: [0, 0.5, 0],
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute w-1 h-1 rounded-full bg-primary-light/50 dark:bg-primary/40 force-gpu"
        />
      ))}
    </div>
  )
}

export default AnimatedBackground 