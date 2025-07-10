import React, { useState } from 'react';
import { Calendar, MapPin, Award, Building, GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experienceData = [
    {
      id: 1,
      title: "Senior Software Developer",
      company: "Tech Solutions Inc.",
      location: "New York, NY",
      duration: "Jan 2022 - Present",
      type: "Full-time",
      description: "Led development of scalable web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Mentored 3 junior developers",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Innovations Ltd.",
      location: "San Francisco, CA",
      duration: "Jun 2020 - Dec 2021",
      type: "Full-time",
      description: "Developed responsive web applications and collaborated with UX/UI designers to create intuitive user interfaces.",
      achievements: [
        "Reduced page load time by 35%",
        "Implemented responsive design for 15+ web applications",
        "Collaborated with design team to improve user experience"
      ],
      technologies: ["JavaScript", "React", "CSS3", "HTML5", "Git"]
    },
    {
      id: 3,
      title: "Web Developer Intern",
      company: "StartUp Hub",
      location: "Austin, TX",
      duration: "May 2019 - Aug 2019",
      type: "Internship",
      description: "Assisted in developing company website and learned modern web development practices.",
      achievements: [
        "Built 5 responsive landing pages",
        "Learned agile development methodologies",
        "Contributed to open source projects"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    }
  ];

  const educationData = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      duration: "2018 - 2020",
      gpa: "3.8/4.0",
      description: "Specialized in Software Engineering and Machine Learning with focus on web technologies and data structures.",
      courses: [
        "Advanced Algorithms",
        "Machine Learning",
        "Database Systems",
        "Software Engineering",
        "Computer Networks"
      ],
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "Research Assistant in AI Lab",
        "Published 2 research papers"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Science in Information Technology",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      duration: "2014 - 2018",
      gpa: "3.6/4.0",
      description: "Comprehensive study of computer science fundamentals with emphasis on programming and system design.",
      courses: [
        "Data Structures",
        "Operating Systems",
        "Web Development",
        "Database Design",
        "Computer Graphics"
      ],
      achievements: [
        "Graduated Cum Laude",
        "President of Computer Science Club",
        "Winner of Annual Hackathon 2017"
      ]
    }
  ];

  const renderExperience = () => (
    <div className="space-y-8">
      {experienceData.map((exp) => (
        <div key={exp.id} className=" bg-white/5 backdrop-blur-md rounded-lg shadow-md p-6 border-l-6 border-blue-500 hover:shadow-lg transition-shadow duration-300">
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
        <div key={edu.id} className="bg-white/5 backdrop-blur-md rounded-lg shadow-md p-6 border-l-6 border-green-500 hover:shadow-lg transition-shadow duration-300">
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
                  GPA: {edu.gpa}
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
          <h2 className="text-4xl font-bold text-white mb-4">Experience & Education</h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
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