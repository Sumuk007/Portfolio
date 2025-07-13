import React, { useState } from 'react';
import { Calendar, MapPin, Award, Building, GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experienceData = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Optimum Codes",
      location: "Udupi, India",
      duration: "June 2025 - August 2025 (2 months)",
      type: "Intrnship",
      description: "Worked on building full-stack web applications using FastAPI and React. Gained hands-on experience integrating REST APIs with PostgreSQL and managing CORS communication between frontend and backend.",
      achievements: [
        "Built core features of a mental health companion web app using React and FastAPI",
        "Integrated FastAPI with PostgreSQL using SQLAlchemy ORM",
        "Configured secure CORS handling for seamless API communication"
      ],
      technologies: ["React", "FastAPI", "PostgreSQL", "Tailwind CSS", "SQLAlchemy"]
    },
  ];

  const educationData = [
    {
      id: 1,
      degree: "Master of Computer Applications",
      institution: "Manipal Institute of Technology",
      location: "Manipal, India",
      duration: "2024 - Present",
      cgpa: "7.61",
      description: "Studying core concepts of computer science with a focus on full-stack development, data structures, and machine learning. Gaining practical experience through hands-on projects and internships in modern web technologies.",
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications",
      institution: "Mahatma Gandhi Memorial College",
      location: "Udupi, India",
      duration: "2021 - 2024",
      cgpa: "8.68",
      description: "Studied the fundamentals of computer science with a strong emphasis on programming, algorithms, databases, and software development. Built a solid foundation through practical assignments and academic projects.",
    }
  ];

  const renderExperience = () => (
    <div className="space-y-8">
      {experienceData.map((exp) => (
        <div key={exp.id} className=" bg-white/5 backdrop-blur-md rounded-4xl p-6 border-1 border-white/30 shadow-[0_4px_30px_rgba(255,255,255,0.1)] transition-shadow duration-300">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
              <div className="flex items-center  mb-2">
                <Building className="w-4 h-4 mr-2 text-white/85" />
                <span className="font-medium text-white/90">{exp.company}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-white/85" />
                  <span className='text-white/85'>{exp.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-white/85" />
                  <span className='text-white/85'>{exp.duration}</span>
                </div>
                <span className="bg-white w-fit text-black/85 px-2 py-1 rounded-full text-xs font-medium">
                  {exp.type}
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-white/80 mb-4">{exp.description}</p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-white/90 mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {exp.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-white/80">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white/85 mb-2 ">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-50 text-black px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-8">
      {educationData.map((edu) => (
        <div key={edu.id} className="bg-white/5 backdrop-blur-md rounded-4xl p-6 border-1 border-white/30 shadow-[0_4px_30px_rgba(255,255,255,0.1)]  duration-300">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <div className="flex items-center text-gray-600 mb-2">
                <GraduationCap className="w-4 h-4 mr-2 text-white/85" />
                <span className="font-medium text-white/85">{edu.institution}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-white/85">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-white/85" />
                  <span className='text-white/85'>{edu.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1 text-white/85" />
                  <span className='text-white/85'>{edu.duration}</span>
                </div>
                <span className="bg-white text-black w-fit px-2 py-1 rounded-full text-xs font-medium">
                  CGPA: {edu.cgpa}
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-white/80 mb-4">{edu.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-black pt-2 min-h-screen" id='experience'>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">Experience & Education</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-700 rounded-4xl shadow-md p-1 flex">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex border-none items-center px-12 md:px-30 py-1.5 rounded-4xl font-medium transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-black text-white shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex border-none items-center px-12 md:px-30 py-1.5 rounded-4xl font-medium transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-black text-white shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Education
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          <div className="transition-all duration-300 ease-in-out">
            {activeTab === 'experience' ? renderExperience() : renderEducation()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;