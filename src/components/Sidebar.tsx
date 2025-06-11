'use client'

import React, { useState } from 'react'
import { HiHome, HiUser, HiCode, HiBriefcase, HiMail, HiX, HiMenu } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { id: 'home', label: 'Home', icon: HiHome },
    { id: 'about', label: 'About', icon: HiUser },
    { id: 'skills', label: 'Skills', icon: HiCode },
    { id: 'projects', label: 'Projects', icon: HiBriefcase },
    { id: 'contact', label: 'Contact', icon: HiMail },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-50 top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg md:hidden"
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-40"
          >
            <div className="flex flex-col h-full py-20">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center px-6 py-4 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <item.icon className="w-6 h-6 mr-4" />
                  <span className="text-lg">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col gap-4 z-50">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection(item.id)}
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <item.icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </motion.button>
        ))}
      </div>
    </>
  )
}

export default Sidebar 