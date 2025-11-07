'use client';

import { Github, Linkedin, Mail, Twitter, ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-light/20 to-purple-600/20 dark:from-primary-dark/10 dark:to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/20 to-pink-500/20 dark:from-blue-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-purple-600 rounded-full blur-lg opacity-50 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary-light to-purple-600"></div>
                  {/* Replace with your actual image */}
                  {/* <Image src="/profile.jpg" alt="Profile" fill className="object-cover" /> */}
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-primary-light via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hi, I'm Your Name
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 animate-slide-up delay-100">
              Software Engineering Student
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 animate-slide-up delay-200">
              Passionate about building elegant solutions to complex problems. 
              Currently studying at Victoria University, Wellington 🇳🇿
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up delay-300">
              <a
                href="/contact"
                className="px-8 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg font-medium
                         hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="px-8 py-3 bg-white dark:bg-slate-800 text-primary-light dark:text-primary-dark 
                         border-2 border-primary-light dark:border-primary-dark rounded-lg font-medium
                         hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                View Projects
              </a>
            </div>

            {/* Scroll Indicator */}
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg">
                I'm a first-year Software Engineering student at Victoria University in Wellington, 
                passionate about creating innovative software solutions and learning new technologies.
              </p>
              <p className="text-lg">
                My journey in tech started with a curiosity about how things work, and has evolved 
                into a deep passion for problem-solving through code. I love working on projects 
                that challenge me and help me grow as a developer.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring Wellington's coffee scene, 
                contributing to open-source projects, or learning about the latest tech trends.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Projects Completed', value: '15+' },
                { label: 'Technologies', value: '10+' },
                { label: 'GitHub Repos', value: '20+' },
                { label: 'Coffee Consumed', value: '∞' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-primary-light/10 to-purple-600/10 
                           dark:from-primary-dark/10 dark:to-purple-600/10 rounded-xl 
                           border border-gray-200 dark:border-gray-700 hover:scale-105 
                           transition-transform duration-300"
                >
                  <div className="text-3xl font-bold text-primary-light dark:text-primary-dark mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Connect With Me
            </h3>
            
            <div className="flex space-x-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md 
                         hover:scale-110 hover:shadow-xl transition-all duration-300
                         text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md 
                         hover:scale-110 hover:shadow-xl transition-all duration-300
                         text-gray-700 dark:text-gray-300 hover:text-blue-600"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md 
                         hover:scale-110 hover:shadow-xl transition-all duration-300
                         text-gray-700 dark:text-gray-300 hover:text-sky-500"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              
              <a
                href="mailto:your.email@example.com"
                className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md 
                         hover:scale-110 hover:shadow-xl transition-all duration-300
                         text-gray-700 dark:text-gray-300 hover:text-red-500"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 Your Name. Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
