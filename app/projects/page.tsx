'use client';

import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Lock In - Study Productivity App',
    description: 'A web app to track study sessions with timers, leaderboards, and user notifications. Built during hackathon with PWA support.',
    technologies: ['React', 'Spring Boot', 'Firebase', 'TypeScript'],
    category: 'Web App',
    //github: 'https://github.com/yourusername/lock-in',
    //demo: 'https://lock-in-demo.vercel.app',
  },
  {
    id: 2,
    title: 'Maorri Dictionary App',
    description: 'Developed a full-stack web application using Flask, SQLite, and an HTML/CSS frontend. Designed and normalized a relational database to manage users, categories, and words. Implemented role-based access control, granting teachers admin rights for content management (add, edit, delete).',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'SQLite'],
    category: 'Web App',
    github: 'https://github.com/rohit-medarametla/Dictionary-Maori',
    //demo: 'https://lock-in-demo.vercel.app',
  },
  {
    id: 3,
    title: 'Ice Breaker Web App',
    description: 'An interactive web application designed for events to help people connect through fun activities and conversation starters.',
    technologies: ['Next.js', 'Tailwind CSS', 'Oracle Cloud'],
    category: 'Web App',
    //github: 'https://github.com/yourusername/icebreaker',
    //demo: 'https://icebreaker-demo.vercel.app',
  },
  {
    id: 4,
    title: 'Flappy Bird Clone',
    description: 'Classic Flappy Bird game recreation with smooth animations and high score tracking.',
    technologies: ['Processing', 'Java'],
    category: 'Game',
    //github: 'https://github.com/yourusername/flappy-bird',
    //demo: null,
  },
  {
    id: 5,
    title: 'Chrome Extension - Productivity Booster',
    description: 'A Chrome extension to block distracting websites and track productive time.',
    technologies: ['JavaScript', 'Chrome API', 'CSS'],
    category: 'Extension',
    //github: 'https://github.com/yourusername/productivity-extension',
    //demo: null,
  },
  {
    id: 6,
    title: 'Algorithm Visualizer',
    description: 'Interactive tool to visualize sorting and searching algorithms with step-by-step animations.',
    technologies: ['React', 'TypeScript', 'D3.js'],
    category: 'Tool',
    github: 'https://github.com/yourusername/algo-visualizer',
    //demo: 'https://algo-visualizer-demo.vercel.app',
  },
  {
    id: 7,
    title: 'Portfolio Website',
    description: 'This very website! A modern portfolio built with Next.js 15 and Tailwind CSS featuring dark mode and responsive design.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    category: 'Web App',
    github: 'https://github.com/rohit-medarametla/portfolio',
    demo: 'https://yourportfolio.vercel.app',
  },
];

const categories = ['All', 'Web App', 'Game', 'Extension', 'Tool'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            My Projects
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of my work spanning web development, game design, and tools
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-light dark:bg-accent text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-slate-400 dark:text-slate-500">
                <span className="text-4xl">💻</span>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 text-xs font-medium bg-primary-light/10 dark:bg-accent/10 text-primary-light dark:text-accent rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-primary-light dark:hover:text-accent transition-colors text-sm font-medium">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-primary-light dark:hover:text-accent transition-colors text-sm font-medium">
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
