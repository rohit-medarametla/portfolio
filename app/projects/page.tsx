'use client';

import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Lock In - Study Productivity App',
    description: 'A web app to track study sessions with timers, leaderboards, and user notifications. Built during hackathon with PWA support.',
    image: '/projects/project1.jpg',
    technologies: ['React', 'Spring Boot', 'Firebase', 'TypeScript'],
    category: 'Web App',
    github: 'https://github.com/yourusername/lock-in',
    demo: 'https://lock-in-demo.vercel.app',
  },
  {
    id: 2,
    title: 'Ice Breaker Web App',
    description: 'An interactive web application designed for events to help people connect through fun activities and conversation starters.',
    image: '/projects/project2.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'Oracle Cloud'],
    category: 'Web App',
    github: 'https://github.com/yourusername/icebreaker',
    demo: 'https://icebreaker-demo.vercel.app',
  },
  {
    id: 3,
    title: 'Flappy Bird Clone',
    description: 'Classic Flappy Bird game recreation with smooth animations and high score tracking.',
    image: '/projects/project3.jpg',
    technologies: ['Processing', 'Java'],
    category: 'Game',
    github: 'https://github.com/yourusername/flappy-bird',
    demo: null,
  },
  {
    id: 4,
    title: 'Chrome Extension - Productivity Booster',
    description: 'A Chrome extension to block distracting websites and track productive time.',
    image: '/projects/project4.jpg',
    technologies: ['JavaScript', 'Chrome API', 'CSS'],
    category: 'Extension',
    github: 'https://github.com/yourusername/productivity-extension',
    demo: null,
  },
  {
    id: 5,
    title: 'Algorithm Visualizer',
    description: 'Interactive tool to visualize sorting and searching algorithms with step-by-step animations.',
    image: '/projects/project5.jpg',
    technologies: ['React', 'TypeScript', 'D3.js'],
    category: 'Tool',
    github: 'https://github.com/yourusername/algo-visualizer',
    demo: 'https://algo-visualizer-demo.vercel.app',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'This very website! A modern portfolio built with Next.js 15 and Tailwind CSS featuring dark mode and responsive design.',
    image: '/projects/project6.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    category: 'Web App',
    github: 'https://github.com/yourusername/portfolio',
    demo: 'https://yourportfolio.vercel.app',
  },
];

const categories = ['All', 'Web App', 'Game', 'Extension', 'Tool'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary-light to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                  ? 'bg-primary-light dark:bg-primary-dark text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:shadow-md hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg 
                       hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-light/20 to-purple-600/20 dark:from-primary-dark/20 dark:to-purple-600/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                  {/* Replace with actual image */}
                  <div className="text-center">
                    <div className="text-4xl mb-2">🚀</div>
                    <p className="text-sm">Project Image</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 text-xs font-medium bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm font-medium">Demo</span>
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
