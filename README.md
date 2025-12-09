# Ben Osalira - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## Features

- ✨ **Modern Design**: Clean, professional layout with smooth animations
- 🌓 **Dark Mode**: Toggle between light and dark themes with persistent preference
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Performance**: Built with Next.js 14 App Router for optimal performance
- ♿ **Accessible**: Semantic HTML, ARIA labels, keyboard navigation
- 🔍 **SEO Optimized**: Meta tags, OpenGraph, sitemap ready
- 🎨 **Interactive**: Framer Motion animations for enhanced UX

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Project Structure

```
portfolio_web/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   └── projects/
│       └── [slug]/
│           ├── page.tsx         # Dynamic project pages
│           └── not-found.tsx    # 404 page for projects
├── components/
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Footer with links
│   ├── ThemeProvider.tsx        # Dark mode context
│   ├── ThemeToggle.tsx          # Theme toggle button
│   └── sections/                # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       └── Contact.tsx
├── data/
│   ├── projects.ts              # Project data
│   └── personal.ts              # Personal information
├── public/
│   └── projects/                # Project images (add screenshots here)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone or navigate to the repository**:
   ```bash
   cd portfolio_web
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

