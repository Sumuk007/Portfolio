import React, { useState } from 'react';

const Skills = () => {

  const techStacks = [
    {
      category: 'Frontend',
      color: 'text-blue-600 border-blue-300',
      techs: [
        { name: 'React', href: '' },
        { name: 'JavaScript', href: '' },
        { name: 'TypeScript', href: '' },
        { name: 'HTML5', href: '' },
        { name: 'CSS3', href: '' },
        { name: 'Tailwind CSS', href: '' },
        { name: 'Vue.js', href: '' },
        { name: 'Next.js', href: '' },
        { name: 'Angular', href: '' },
        { name: 'Sass', href: '' }
      ]
    },
    {
      category: 'Backend',
      color: 'text-green-600 border-green-300',
      techs: [
        { name: 'Node.js', href: '' },
        { name: 'Python', href: '' },
        { name: 'Express.js', href: '' },
        { name: 'Django', href: '' },
        { name: 'FastAPI', href: '' },
        { name: 'Spring Boot', href: '' },
        { name: 'PHP', href: '' },
        { name: 'Laravel', href: '' }
      ]
    },
    {
      category: 'Database',
      color: 'text-purple-600 border-purple-300',
      techs: [
        { name: 'PostgreSQL', href: '' },
        { name: 'MongoDB', href: '' },
        { name: 'MySQL', href: '' },
        { name: 'Redis', href: '' },
        { name: 'Firebase', href: '' },
        { name: 'SQLite', href: '' }
      ]
    },
    {
      category: 'DevOps & Cloud',
      color: 'text-orange-600 border-orange-300',
      techs: [
        { name: 'AWS', href: '' },
        { name: 'Docker', href: '' },
        { name: 'Kubernetes', href: '' },
        { name: 'Git', href: '' },
        { name: 'GitHub Actions', href: '' },
        { name: 'Jenkins', href: '' },
        { name: 'Nginx', href: '' },
        { name: 'Linux', href: '' }
      ]
    },
    {
      category: 'Tools & Design',
      color: 'text-pink-600 border-pink-300',
      techs: [
        { name: 'Figma', href: '' },
        { name: 'VS Code', href: '' },
        { name: 'Postman', href: '' },
        { name: 'Webpack', href: '' },
        { name: 'Vite', href: '' },
        { name: 'Jest', href: '' }
      ]
    }
  ];

  // Helper function to get tech stack icon URL
  const getTechIcon = (techName) => {
    const iconName = techName.toLowerCase()
      .replace(/\s+/g, '')
      .replace('.js', 'js')
      .replace('.', '')
      .replace('css3', 'css')
      .replace('html5', 'html')
      .replace('postgresql', 'postgres')
      .replace('github actions', 'githubactions')
      .replace('vs code', 'vscode')
      .replace('spring boot', 'springboot')
      .replace('fast api', 'fastapi')
      .replace('express.js', 'express')
      .replace('tailwind css', 'tailwindcss');
    
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName}/${iconName}-original.svg`;
  };

  // Fallback for icons that might not exist
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  };

  return (
    <section className="py-12 bg-black" id='skills'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Technologies I work with</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Tech Stacks */}
        <div className="max-w-5xl mx-auto space-y-8">
          {techStacks.map((stack) => (
            <div key={stack.category} className="bg-white/5 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-white shadow-[0_4px_30px_rgba(255,255,255,0.1)]">
              <h3 className={`text-lg font-semibold mb-4 pb-2 border-b-2 ${stack.color}`}>
                {stack.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {stack.techs.map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg transition-all duration-200 hover:shadow-sm border border-gray-200 hover:border-gray-300"
                  >
                    <img
                      src={getTechIcon(tech.name)}
                      alt={tech.name}
                      className="w-5 h-5 flex-shrink-0"
                      onError={handleImageError}
                    />
                    <div 
                      className="w-5 h-5 bg-gray-300 rounded flex items-center justify-center text-xs font-bold text-gray-600 flex-shrink-0"
                      style={{ display: 'none' }}
                    >
                      {tech.name.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                      {tech.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;