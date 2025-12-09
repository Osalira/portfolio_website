'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personal'
import { GraduationCap, Code, Cloud } from 'lucide-react'

const highlights = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Built production SaaS with React, TypeScript, and Firebase. Strong in backend APIs, databases, and concurrency.'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Hands-on with Docker, Firebase Cloud Functions, Stripe integrations, and load testing with JMeter.'
  },
  {
    icon: GraduationCap,
    title: 'CS Fundamentals',
    description: 'Solid foundation in algorithms, data structures, distributed systems, and software architecture.'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              {personalInfo.bio.long.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{personalInfo.education.degree}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                {personalInfo.education.school}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {/* Graduated {personalInfo.education.graduation} */}
              </p>
              <div>
                <p className="text-sm font-semibold mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.education.coursework.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

