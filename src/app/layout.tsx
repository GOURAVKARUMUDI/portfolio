'use client'

import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import AnimatedBackground from '@/components/AnimatedBackground'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Gourav Karumudi - Portfolio</title>
        <meta name="description" content="Personal portfolio website showcasing my projects and skills" />
      </head>
      <body className={`${inter.className} relative min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <AnimatedBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
} 