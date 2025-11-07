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
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary-light to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl 
                         transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary-light to-purple-600 rounded-lg">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h2>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2.5 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-light to-purple-600 
                                   rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
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

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary-light/10 to-purple-600/10 dark:from-primary-dark/10 dark:to-purple-600/10 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Neural Networks', 'Machine Learning', 'Docker & Kubernetes', 'GraphQL', 'Rust'].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-white dark:bg-slate-800 rounded-full shadow-md 
                         text-gray-700 dark:text-gray-300 font-medium hover:scale-110 
                         transition-transform duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
