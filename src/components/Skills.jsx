import React, { useState } from "react";
import reacticon from "../assets/icons/react_icon.svg";
import htmlicon from "../assets/icons/html.svg";
import jsicon from "../assets/icons/JavaScript.svg";
import tailwindicon from "../assets/icons/tailwind.svg";
import cssicon from "../assets/icons/css.svg";
import pythonicon from "../assets/icons/python.svg";
import fastapiicon from "../assets/icons/fastapi.svg";
import bootstrapicon from "../assets/icons/bootstrap.svg";
import djangoicon from "../assets/icons/django.svg";
import phpicon from "../assets/icons/php.svg";
import postgresqlicon from "../assets/icons/postgresql.svg";
import sqliteicon from "../assets/icons/sqlite.svg";
import mysqlicon from "../assets/icons/mysql.svg";
import cicon from "../assets/icons/c.svg";
import cppicon from "../assets/icons/cpp.svg";
import ricon from "../assets/icons/r.svg";
import javaicon from "../assets/icons/java.svg";

const Skills = () => {
  const techStacks = [
    {
      category: "Frontend",
      color: "text-blue-600 border-blue-300 text-center",
      techs: [
        { name: "React", src: reacticon },
        { name: "JavaScript", src: jsicon },
        { name: "HTML5", src: htmlicon },
        { name: "CSS3", src: cssicon },
        { name: "Tailwind CSS", src: tailwindicon },
        { name: "Bootstrap", src: bootstrapicon },
      ],
    },
    {
      category: "Backend",
      color: "text-green-600 border-green-300 text-center",
      techs: [
        { name: "Python", src: pythonicon },
        { name: "Django", src: djangoicon },
        { name: "FastAPI", src: fastapiicon },
        { name: "PHP", src: phpicon },
      ],
    },
    {
      category: "Database",
      color: "text-purple-600 border-purple-300 text-center",
      techs: [
        { name: "PostgreSQL", src: postgresqlicon },
        { name: "MySQL", src: mysqlicon },
        { name: "SQLite", src: sqliteicon },
      ],
    },
    {
      category: "Programming Languages",
      color: "text-orange-600 border-orange-300 text-center",
      techs: [
        { name: "C", src: cicon },
        { name: "C++", src: cppicon },
        { name: "Java", src: javaicon },
        { name: "Python", src: pythonicon },
        { name: "R", src: ricon },
      ],
    },
  ];

  // // Helper function to get tech stack icon URL
  // const getTechIcon = (techName) => {
  //   const iconName = techName.toLowerCase()
  //     .replace(/\s+/g, '')
  //     .replace('.js', 'js')
  //     .replace('.', '')
  //     .replace('css3', 'css')
  //     .replace('html5', 'html')
  //     .replace('postgresql', 'postgres')
  //     .replace('github actions', 'githubactions')
  //     .replace('vs code', 'vscode')
  //     .replace('spring boot', 'springboot')
  //     .replace('fast api', 'fastapi')
  //     .replace('express.js', 'express')
  //     .replace('tailwind css', 'tailwindcss');

  //   return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName}/${iconName}-original.svg`;
  // };

  // Fallback for icons that might not exist
  const handleImageError = (e) => {
    e.target.style.display = "none";
    e.target.nextSibling.style.display = "flex";
  };

  return (
    <section className="py-12 bg-black" id="skills">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I work with
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Tech Stacks */}
        <div className="max-w-5xl mx-auto space-y-8">
          {techStacks.map((stack) => (
            <div
              key={stack.category}
              className="bg-white/5 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-white shadow-[0_4px_30px_rgba(255,255,255,0.1)]"
            >
              <h3
                className={`text-lg font-semibold mb-4 pb-2 border-b-2 ${stack.color}`}
              >
                {stack.category}
              </h3>

              <div className="flex justify-center flex-wrap gap-3">
                {stack.techs.map((tech) => (
                  <a
                    key={tech.name}
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={tech.src}
                        alt={tech.name}
                        className="w-5 h-5 flex-shrink-0"
                        onError={handleImageError}
                      />
                      <span className="text-sm font-medium text-gray-700 whitespace-nowrap antialiased transition-colors duration-200 group-hover:text-black">
                        {tech.name}
                      </span>
                    </div>
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
