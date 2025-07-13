import React, { useState } from "react";
import { Github, ExternalLink, Code, Laptop } from "lucide-react";
import ai_resume from "../assets/projects/ai-resume_analyzer.png";
import reelninja from "../assets/projects/reelninja.png";
import packageinfo from "../assets/projects/package_info.png";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "AI Resume Analyzer",
      description:
        "An AI tool that reviews resumes against job descriptions, scores them out of 100, and suggests key improvements to boost job relevance.",
      image: ai_resume,
      githubUrl: "https://github.com/Sumuk007/AI-Resume-Analyzer",
      liveUrl: "https://resumeanalyzer-ai.vercel.app/",
      techStack: ["React", "FastAPI", "Gemini API", "Axios", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "ReelNinja - Instagram Reel Downloader",
      description:
        "A tool to download Instagram Reels or extract audio quickly and easily using just the reel URL.",
      image: reelninja,
      githubUrl: "https://github.com/Sumuk007/ReelNinja",
      liveUrl: "https://reelninja.onrender.com/",
      techStack: ["Django","Python", "HTML", "CSS", "Bootstrap"],
    },
    {
      id: 3,
      title: "Python Package Info Viewer",
      description:
        "A tool to search and view key details of Python packages, with user authentication and data stored in PostgreSQL.",
      image: packageinfo,
      githubUrl: "https://github.com/Sumuk007/Python-Package-Info",
      liveUrl: null,
      techStack: ["FastAPI", "HTML", "Jinja2", "CSS", "PostgreSQL"],
    },
  ];

  return (
    <section className="min-h-screen bg-black pt-20 lg:pb-25 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group border-none relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl  ${
                index % 2 === 0 ? "animate-fadeInUp" : "animate-fadeInUp"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay with Action Buttons */}
                <div
                  className={`absolute inset-0 bg-black/80 flex items-center justify-center space-x-6 transition-all duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* GitHub Button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full border border-gray-600 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6 text-white group-hover/btn:text-cyan-400 transition-colors duration-300" />
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                      Code
                    </span>
                  </a>

                  {/* Live Demo Button */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full border border-gray-600 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-6 h-6 text-white group-hover/btn:text-cyan-400 transition-colors duration-300" />
                      <span className="absolute text-nowrap -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                        Live Demo
                      </span>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 font-bold py-1 bg-gray-800 text-cyan-400 text-xs rounded-full border border-gray-700 hover:border-cyan-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;
