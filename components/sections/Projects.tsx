'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedProjects } from '@/data/projects'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

export default function Projects() {
  const projects = getFeaturedProjects()

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my experience in full-stack development, 
            distributed systems, and cloud architecture.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Project Info */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                      {project.tagline}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-6">
                      <p className="font-semibold text-sm mb-2">Key Highlights:</p>
                      <ul className="space-y-1">
                        {project.highlights.slice(0, 3).map((highlight, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <p className="font-semibold text-sm mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 6).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 6 && (
                          <span className="px-2 py-1 text-gray-500 dark:text-gray-400 text-xs">
                            +{project.techStack.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg font-medium transition-colors text-sm"
                    >
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 hover:border-primary-600 dark:hover:border-primary-400 rounded-lg font-medium transition-colors text-sm"
                      >
                        Live Demo
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 hover:border-primary-600 dark:hover:border-primary-400 rounded-lg font-medium transition-colors text-sm"
                      >
                        <Github className="mr-2 w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative rounded-lg overflow-hidden min-h-[300px] bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

