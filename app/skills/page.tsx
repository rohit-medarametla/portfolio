'use client';

import { Code2, Database, Globe, Wrench, Smartphone, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'C++', level: 65 },
    ],
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: [
      { name: 'React', level: 80 },
      { name: 'Next.js', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Node.js', level: 70 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'Firebase', level: 75 },
      { name: 'MongoDB', level: 65 },
      { name: 'PostgreSQL', level: 60 },
      { name: 'Oracle Cloud', level: 55 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Processing IDE', level: 75 },
      { name: 'Docker', level: 50 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Smartphone,
    skills: [
      { name: 'Spring Boot', level: 70 },
      { name: 'Express.js', level: 65 },
      { name: 'Framer Motion', level: 60 },
      { name: 'Three.js', level: 45 },
    ],
  },
  {
    title: 'Concepts & Methodologies',
    icon: Brain,
    skills: [
      { name: 'Data Structures', level: 80 },
      { name: 'Algorithms', level: 75 },
      { name: 'Responsive Design', level: 85 },
      { name: 'RESTful APIs', level: 70 },
      { name: 'Agile Development', level: 65 },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Skills & Expertise
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-primary-light/10 dark:bg-accent/10 rounded-lg">
                    <IconComponent className="w-6 h-6 text-primary-light dark:text-accent" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h2>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">
                          {skill.name}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary-light dark:bg-accent rounded-full transition-all duration-1000 ease-out group-hover:opacity-80"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Currently Learning */}
        <div className="mt-16 bg-slate-50 dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Neural Networks', 'Machine Learning', 'Docker & Kubernetes', 'GraphQL', 'Rust'].map((tech) => (
              <span key={tech} className="px-6 py-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
