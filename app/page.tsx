'use client';

import { Github, Linkedin, Mail, Twitter, ArrowDown } from 'lucide-react';

export default function Home() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900 pt-20">
        {/* Simple background - no gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-lg bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-600" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up text-slate-900 dark:text-white">
              Hi, I'm Rohit
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 animate-slide-up delay-100">
              Software Engineering Student
            </p>
            
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8 animate-slide-up delay-200">
              Building elegant solutions to complex problems. Currently studying at Victoria University, Wellington 🇳🇿
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up delay-300">
              <a href="/contact" className="px-8 py-3 bg-primary-light dark:bg-accent text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                Get In Touch
              </a>
              <a href="/projects" className="px-8 py-3 bg-white dark:bg-slate-800 text-primary-light dark:text-accent border-2 border-primary-light dark:border-accent rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                View Projects
              </a>
            </div>

            {/* Scroll Indicator */}
            <button onClick={scrollToAbout} className="animate-bounce text-slate-500 dark:text-slate-400 hover:text-primary-light dark:hover:text-accent transition-colors" aria-label="Scroll down">
              <ArrowDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <p className="text-lg leading-relaxed">
                I'm a first-year Software Engineering student at Victoria University in Wellington, passionate about creating innovative software solutions and learning new technologies.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in tech started with a curiosity about how things work, and has evolved into a deep passion for problem-solving through code. I love working on projects that challenge me and help me grow as a developer.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me exploring Wellington's coffee scene, contributing to open-source projects, or learning about the latest tech trends.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Projects', value: '15+' },
                { label: 'Technologies', value: '10+' },
                { label: 'GitHub Repos', value: '20+' },
                { label: 'Coffee ☕', value: '∞' },
              ].map((stat, index) => (
                <div key={index} className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-primary-light dark:text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Connect With Me
            </h3>
            
            <div className="flex space-x-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
              
              <a href="mailto:your.email@example.com" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg shadow-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300" aria-label="Email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              © 2025 Rohit. Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
