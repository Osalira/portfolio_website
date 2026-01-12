export interface Project {
  id: string
  title: string
  slug: string
  tagline: string
  description: string
  longDescription: string
  problem: string
  solution: string
  techStack: string[]
  features: string[]
  highlights: string[]
  lessonsLearned: string[]
  liveUrl?: string
  githubUrl?: string
  image: string
  category: 'SaaS' | 'Full-Stack' | 'Distributed Systems'
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'TheSchedulerApp',
    slug: 'theschedulerapp',
    tagline: 'Task Management SaaS with AI-Powered Planning',
    description: 'A real-time collaborative task management platform featuring AI goal planning, Stripe subscriptions, and team collaboration.',
    longDescription: 'TheSchedulerApp is a production SaaS application that helps individuals and teams organize tasks with Trello-like boards, calendar views, and AI-powered planning. Built with a cloud-first architecture on Firebase, it handles authentication, real-time data sync, payment processing, and AI integrations.',
    problem: 'Teams struggle to break down large goals into actionable tasks and coordinate work across multiple projects. Existing tools lack AI assistance and flexible billing for growing teams.',
    solution: 'Built a full-featured task management SaaS with real-time collaboration, AI-powered task generation via OpenAI API, and flexible Stripe subscriptions. Firebase backend handles auth, data, and serverless functions for billing webhooks and AI processing.',
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'TailwindCSS',
      'Firebase (Firestore/Auth/Functions/Hosting)',
      'Stripe API',
      'OpenAI API',
      'dnd-kit',
      'Recharts'
    ],
    features: [
      'Real-time task boards with drag & drop (dnd-kit)',
      'Calendar scheduling views and notifications',
      'Team collaboration: project invites and shared access control',
      'Email/Password + Google OAuth authentication',
      'Stripe subscriptions with webhook-driven entitlement checks',
      'AI goal planning: generates step-by-step task plans (editable)',
      'Progress dashboards with visualizations (Recharts)',
      'Dark mode and responsive design'
    ],
    highlights: [
      'Shipped production SaaS serving paying customers',
      'Implemented Stripe billing with Firebase Cloud Functions webhooks',
      'Built AI features using OpenAI API for intelligent task generation',
      'Designed Firestore data model for team access and permissions',
      'Integrated real-time sync across multiple users and devices'
    ],
    lessonsLearned: [
      'Serverless architecture patterns: Firebase Cloud Functions for payment webhooks and AI processing',
      'Payment integration complexity: handling subscription lifecycle, prorations, and entitlements',
      'Real-time data modeling: structuring Firestore for permissions and collaborative access',
      'Production SaaS considerations: error handling, loading states, user feedback, edge cases'
    ],
    liveUrl: 'https://theschedulerapp.com',
    githubUrl: '', // Private repo - placeholde
    image: '/projects/scheduler.png',
    category: 'SaaS',
    featured: true
  },
  {
    id: '2',
    title: 'CareConnectED',
    slug: 'careconnected',
    tagline: 'Emergency Department Virtual Triage Platform',
    description: 'Full-stack Dockerized web application helping patients check ED wait times, virtually register, and complete triage remotely.',
    longDescription: 'CareConnectED streamlines emergency department workflows by allowing patients to check real-time ED load, register virtually, complete triage questionnaires, and receive notifications. Built with a multi-service Docker architecture featuring async task processing.',
    problem: 'Emergency departments face overcrowding and long wait times. Patients lack visibility into wait times and must complete registration and triage in person, leading to inefficiency.',
    solution: 'Developed a full-stack platform with Django backend for async processing (Celery + Redis), Vue frontend for patient interactions, and Dockerized deployment. Patients can check load, register online, complete triage, and receive notifications—reducing in-person congestion.',
    techStack: [
      'Vue.js',
      'Django',
      'Redis',
      'Celery',
      'Docker',
      'Docker Compose',
      'PostgreSQL'
    ],
    features: [
      'Real-time ED load dashboard for patients',
      'Virtual registration with form validation',
      'Digital triage questionnaire with conditional logic',
      'Notification system for status updates',
      'Admin dashboard for ED staff to manage patient queue',
      'Async background task processing with Celery',
      'Multi-container orchestration with Docker Compose'
    ],
    highlights: [
      'Dockerized multi-service architecture (frontend, backend, Redis, Celery workers)',
      'Implemented async task processing for notifications and background jobs',
      'Built RESTful API with Django for patient data management',
      'Used Redis as message broker and cache layer',
      'Docker Compose for local development and deployment orchestration'
    ],
    lessonsLearned: [
      'Container orchestration: managing service dependencies and networking in Docker Compose',
      'Async workflows: Celery task queues for background processing and notifications',
      'Django patterns: building scalable REST APIs with proper separation of concerns',
      'Environment configuration: managing secrets and configs across containers'
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/Osalira/CareConnectED', // TODO: Update 
    image: '/projects/careconnected.png',
    category: 'Full-Stack',
    featured: true
  },
  {
    id: '3',
    title: 'DayTradingPlatform',
    slug: 'daytrading-platform',
    tagline: 'Distributed Microservices Trading System',
    description: 'Microservices-based trading platform with Go matching engine, API gateway patterns, and JMeter load testing.',
    longDescription: 'A distributed trading system demonstrating microservices architecture with separate services for authentication, trading, matching engine, and logging. Features a Go-based matching engine with price-time priority, gateway reliability patterns, and comprehensive performance testing.',
    problem: 'Building scalable, reliable trading systems requires understanding distributed systems, concurrency, transaction consistency, and performance under load. Traditional monolithic architectures struggle with these demands.',
    solution: 'Architected a microservices trading platform with API gateway, auth service, trading service, Go matching engine, and logging service. Implemented gateway patterns (JWT, rate limiting, circuit breaker), transactional consistency, and load-tested with JMeter to identify and fix bottlenecks.',
    techStack: [
      'Go',
      'Python',
      'Flask',
      'Django',
      'PostgreSQL',
      'Docker Compose',
      'Redis',
      'RabbitMQ',
      'JMeter',
      'React',
      'TypeScript'
    ],
    features: [
      'Microservices: API Gateway, Auth, Trading, Matching Engine, Logging',
      'Go matching engine: price–time priority (FIFO), market/limit orders',
      'Partial fills and auditable transaction logs',
      'JWT authentication and authorization',
      'API rate limiting and circuit breaker patterns',
      'Transactional database writes for consistency',
      'Caching layer (Redis) and event streaming (RabbitMQ)',
      'React/TypeScript frontend for trading UI',
      'JMeter load testing and performance optimization'
    ],
    highlights: [
      'Built matching engine in Go: implemented price-time priority and order matching logic',
      'Gateway reliability: JWT validation, rate limiting, circuit breaker for fault tolerance',
      'Performance tuning: DB connection pooling, query optimization, caching strategies',
      'Load testing with JMeter: identified bottlenecks, improved throughput by 3x',
      'Docker Compose orchestration for local multi-service development'
    ],
    lessonsLearned: [
      'Distributed systems patterns: service decomposition, inter-service communication, data consistency',
      'Concurrency in Go: goroutines, channels, and race condition handling',
      'Performance optimization: profiling, database indexing, connection pooling, caching',
      'Reliability patterns: circuit breakers, retries, graceful degradation',
      'Load testing methodology: establishing baselines, identifying bottlenecks, iterative improvements'
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/Osalira/DayTradingProjects', // TODO: Update
    image: '/projects/trading.png',
    category: 'Distributed Systems',
    featured: true
  },
  {
    id: '4',
    title: 'SozoFitness',
    slug: 'sozofitness',
    tagline: 'Full-Stack Fitness Scheduling & Payments SaaS',
    description: 'A production SaaS platform for booking and managing paid fitness sessions with Stripe payments, Zoom integration, and automated reminders.',
    longDescription: 'SozoFitness is a full-stack SaaS web application for booking and managing paid fitness sessions. Built with Next.js App Router and deployed to AWS, it handles authentication, payment processing, video meeting generation, and automated notifications through a separate worker service.',
    problem: 'Fitness professionals need a reliable platform to manage client bookings, process payments, generate meeting links, and send automated reminders—all while maintaining production-grade reliability and security.',
    solution: 'Developed a production-ready SaaS platform with Next.js + TypeScript, PostgreSQL (RDS), and Prisma for data management. Implemented Stripe webhook handling with idempotent event processing, Zoom API integration for meeting links, and a separate worker service for email/SMS reminders. Deployed to AWS using Copilot (ECS/Fargate) with custom HTTPS domain, secure secrets management, and environment-based configuration.',
    techStack: [
      'Next.js (App Router)',
      'TypeScript',
      'PostgreSQL (AWS RDS)',
      'Prisma',
      'Stripe API',
      'Zoom API',
      'SendGrid',
      'Twilio',
      'AWS (ECS/Fargate, ALB, Route 53, ACM)',
      'AWS Copilot',
      'SSM/Secrets Manager'
    ],
    features: [
      'User authentication and session management',
      'Stripe Checkout integration with webhook event handling',
      'Subscription and one-time payment support',
      'Automated entitlement provisioning via webhooks',
      'Zoom meeting link generation for appointments',
      'Email and SMS reminder notifications',
      'Background worker service for async job processing',
      'Health checks and structured logging',
      'Custom HTTPS domain (mysozofitness.com)',
      'Environment-based configuration (dev/staging/prod)'
    ],
    highlights: [
      'Production AWS deployment: ECS/Fargate with Copilot, RDS Postgres, ALB, Route 53/ACM for HTTPS',
      'Stripe webhooks: signature verification, idempotency keys, event deduplication, failure handling',
      'Data layer: Prisma schema, migrations, production migrate workflow',
      'Worker service: polling/cron-like reminders with retry strategy and notification safety',
      'Security: secrets in SSM/Copilot, least-privilege IAM, HTTPS, environment separation',
      'Operational tooling: health endpoints, structured logs, safe background processing with retries'
    ],
    lessonsLearned: [
      'Webhook reliability: signature verification, idempotency patterns to prevent double-charging and double-provisioning',
      'AWS production architecture: ECS/Fargate orchestration, RDS connectivity, ALB routing, custom domain with ACM',
      'Data migrations in production: safe Prisma migration workflow, seeding strategies, rollback planning',
      'Async job processing: worker service design, polling strategies, retry logic, failure handling',
      'Production operations: health checks, structured logging, secrets rotation, environment management, deployment strategies'
    ],
    liveUrl: 'https://mysozofitness.com',
    githubUrl: 'https://github.com/Osalira/sozofitness', // TODO: Update with actual repo URL
    image: '/projects/sozofit.png',
    category: 'SaaS',
    featured: true
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured)
}

