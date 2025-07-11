import React, { useState } from "react";
import { Github, ExternalLink, Code, Laptop } from "lucide-react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, payment integration, and admin dashboard. Features include product catalog, shopping cart, and order management.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://your-ecommerce-site.com",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-task-app.com",
      techStack: ["React", "Firebase", "Material-UI", "Socket.io"],
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts, interactive charts, and weather alerts. Includes 7-day forecasts and weather maps.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://your-weather-app.com",
      techStack: ["Vue.js", "OpenWeather API", "Chart.js", "CSS3"],
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description:
        "An analytics dashboard for social media metrics with data visualization, trend analysis, and automated reporting features.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      githubUrl: "https://github.com/yourusername/social-analytics",
      liveUrl: null, // No live demo available
      techStack: ["Python", "Django", "PostgreSQL", "D3.js", "Bootstrap"],
    },
    {
      id: 5,
      title: "AI Chat Bot",
      description:
        "An intelligent chatbot with natural language processing, context awareness, and multi-language support for customer service automation.",
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop",
      githubUrl: "https://github.com/yourusername/ai-chatbot",
      liveUrl: "https://your-chatbot-demo.com",
      techStack: ["Python", "TensorFlow", "Flask", "OpenAI API", "React"],
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website with smooth animations, dark/light mode toggle, and interactive project showcase.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://your-portfolio.com",
      techStack: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    },
  ];

  return (
    <section className="min-h-screen bg-black py-20 px-4" id="projects">
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
