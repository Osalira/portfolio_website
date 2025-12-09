'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personal'
import { Code, Server, Palette, Database, Cloud, TestTube } from 'lucide-react'

const skillCategories = [
  {
    name: 'Languages',
    icon: Code,
    skills: personalInfo.skills.languages
  },
  {
    name: 'Backend',
    icon: Server,
    skills: personalInfo.skills.backend
  },
  {
    name: 'Frontend',
    icon: Palette,
    skills: personalInfo.skills.frontend
  },
  {
    name: 'Data & Infrastructure',
    icon: Database,
    skills: [...personalInfo.skills.data, ...personalInfo.skills.infrastructure]
  },
  {
    name: 'Cloud & APIs',
    icon: Cloud,
    skills: personalInfo.skills.cloud
  },
  {
    name: 'Testing & Quality',
    icon: TestTube,
    skills: personalInfo.skills.testing
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through academic coursework and hands-on project experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-bold text-lg">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

