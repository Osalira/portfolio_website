import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getProjectBySlug, projects } from '@/data/projects'
import { ExternalLink, Github, ArrowLeft, CheckCircle } from 'lucide-react'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} - Ben Osalira`,
    description: project.description,
    openGraph: {
      title: `${project.title} - Ben Osalira`,
      description: project.description,
      type: 'article',
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {project.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg font-medium transition-colors shadow-lg"
              >
                View Live Demo
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
              >
                <Github className="mr-2 w-4 h-4" />
                View Source Code
              </a>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className="relative rounded-xl overflow-hidden min-h-[400px] bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 mb-12">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Overview */}
        <div className="prose dark:prose-invert max-w-none mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-red-900 dark:text-red-100">
              The Problem
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-green-900 dark:text-green-100">
              The Solution
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technical Highlights</h2>
          <ul className="space-y-3">
            {project.highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
              >
                <span className="text-primary-600 dark:text-primary-400 font-bold">→</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Lessons Learned */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Lessons Learned</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
            <ul className="space-y-3">
              {project.lessonsLearned.map((lesson, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-500 dark:to-blue-500 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Interested in learning more?</h3>
          <p className="mb-6 text-primary-50">
            Let&apos;s discuss this project and how my experience can benefit your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get in Touch
            </a>
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

