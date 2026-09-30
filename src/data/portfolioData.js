// Assets import
import sumukAvatar from '../assets/sumuk_logo.jpg';
import sumukWebp from '../assets/sumuk.webp';

// Project images
import facestudio from '../assets/projects/facestudio.png';
import quietly from '../assets/projects/quietly.png';
import ai_resume from '../assets/projects/ai_resume_analyzer.webp';
import slcm from '../assets/projects/slcm.webp';
import reelninja from '../assets/projects/reelninja.webp';

// Icons
import reactIcon from '../assets/icons/react_icon.svg';
import flutterIcon from '../assets/icons/flutter.svg';
import jsIcon from '../assets/icons/javascript.svg';
import htmlIcon from '../assets/icons/html.svg';
import cssIcon from '../assets/icons/css.svg';
import tailwindIcon from '../assets/icons/tailwind.svg';
import bootstrapIcon from '../assets/icons/bootstrap.svg';

import pythonIcon from '../assets/icons/python.svg';
import fastapiIcon from '../assets/icons/fastapi.svg';
import djangoIcon from '../assets/icons/django.svg';
import phpIcon from '../assets/icons/php.svg';

import postgresqlIcon from '../assets/icons/postgresql.svg';
import mysqlIcon from '../assets/icons/mysql.svg';
import sqliteIcon from '../assets/icons/sqlite.svg';

import cIcon from '../assets/icons/c.svg';
import cppIcon from '../assets/icons/cpp.svg';
import javaIcon from '../assets/icons/java.svg';
import dartIcon from '../assets/icons/dart.svg';
import githubIcon from '../assets/icons/github.svg';

export const PERSONAL_INFO = {
  name: "Sumuk Bhat",
  alias: "Sumuk Mudarangadi",
  role: "Full-Stack & Mobile Developer",
  tagline: "Building clean web apps with React & FastAPI, and cross-platform mobile apps with Flutter.",
  bio: "Full-stack developer from India with published apps on Google Play and hands-on experience building web and mobile applications. Currently pursuing an MCA at Manipal Institute of Technology.",
  location: "India",
  status: "Available for roles & projects",
  avatar: sumukAvatar,
  avatarWebp: sumukWebp,
  resumeUrl: "https://drive.google.com/drive/folders/1MDyDxm9jZFnA3pvD1dsU6qN0HrUyMns6?usp=sharing",
  email: "sumukbhat007@gmail.com",
  phone: "+91-7899097174",
  socials: {
    github: "https://github.com/Sumuk007",
    linkedin: "https://www.linkedin.com/in/sumuk/",
    instagram: "https://www.instagram.com/__sumuk__bhat__?igsh=MWdtOXhiN3Y0YTZmMA==",
  }
};

export const METRICS = [
  { label: "Projects Built", value: "5+" },
  { label: "Google Play Apps", value: "2" },
  { label: "Master's (MCA)", value: "MIT Manipal" },
  { label: "Status", value: "Open to Work" }
];

export const PROJECTS = [
  {
    id: "facestudio",
    title: "Face Studio - Face Shape AI",
    badge: "Google Play",
    category: "mobile",
    featured: true,
    description: "An AI-powered Flutter app that uses Google ML Kit to detect face shapes in real time and recommend hairstyles. Monetized with RevenueCat in-app subscriptions and Google AdMob.",
    image: facestudio,
    techStack: [
      { name: "Flutter", icon: flutterIcon },
      { name: "Dart", icon: dartIcon },
      { name: "Google ML Kit" },
      { name: "RevenueCat" },
      { name: "Google AdMob" }
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.viper.facestudio",
    githubUrl: null,
    isStoreApp: true,
  },
  {
    id: "quietly",
    title: "Quietly: Sleep & White Noise",
    badge: "Google Play",
    category: "mobile",
    featured: false,
    description: "A Flutter relaxation app with ambient nature sounds, multi-track audio mixing, offline playback, and premium sound packs via RevenueCat.",
    image: quietly,
    techStack: [
      { name: "Flutter", icon: flutterIcon },
      { name: "Dart", icon: dartIcon },
      { name: "RevenueCat" },
      { name: "SharedPreferences" },
      { name: "AdMob" }
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.viper.sleepsounds",
    githubUrl: null,
    isStoreApp: true,
  },
  {
    id: "ai-resume",
    title: "AI Resume Analyzer",
    badge: "Web App",
    category: "ai",
    featured: false,
    description: "A web app that scores resumes against job descriptions and suggests actionable improvements using Google Gemini AI and FastAPI.",
    image: ai_resume,
    techStack: [
      { name: "React", icon: reactIcon },
      { name: "FastAPI", icon: fastapiIcon },
      { name: "Python", icon: pythonIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "Gemini API" }
    ],
    liveUrl: "https://resumeanalyzer-ai.vercel.app/",
    githubUrl: "https://github.com/Sumuk007/AI-Resume-Analyzer",
    isStoreApp: false,
  },
  {
    id: "reelninja",
    title: "ReelNinja - Instagram Downloader",
    badge: "Web App",
    category: "web",
    featured: false,
    description: "A fast web tool to download Instagram Reels or extract audio directly from a URL, built with Django and Python.",
    image: reelninja,
    techStack: [
      { name: "Django", icon: djangoIcon },
      { name: "Python", icon: pythonIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "Bootstrap", icon: bootstrapIcon }
    ],
    liveUrl: "https://reelninja.onrender.com/",
    githubUrl: "https://github.com/Sumuk007/ReelNinja",
    isStoreApp: false,
  },
  {
    id: "slcm",
    title: "Student Lifecycle Management (SLCM)",
    badge: "Android App",
    category: "mobile",
    featured: false,
    description: "An Android application built with Java and Firebase to manage attendance, assignments, and timetables for students and faculty.",
    image: slcm,
    techStack: [
      { name: "Java", icon: javaIcon },
      { name: "Android SDK" },
      { name: "Firebase" }
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Sumuk007/Attendance_System",
    isStoreApp: false,
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Frontend & Mobile",
    skills: [
      { name: "React", icon: reactIcon },
      { name: "Flutter", icon: flutterIcon },
      { name: "Dart", icon: dartIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "HTML5", icon: htmlIcon },
      { name: "CSS3", icon: cssIcon },
      { name: "Bootstrap", icon: bootstrapIcon }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", icon: pythonIcon },
      { name: "FastAPI", icon: fastapiIcon },
      { name: "Django", icon: djangoIcon },
      { name: "PHP", icon: phpIcon },
      { name: "REST APIs" }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "MySQL", icon: mysqlIcon },
      { name: "SQLite", icon: sqliteIcon },
      { name: "Firebase" }
    ]
  },
  {
    category: "Languages & Tools",
    skills: [
      { name: "Java", icon: javaIcon },
      { name: "C++", icon: cppIcon },
      { name: "C", icon: cIcon },
      { name: "Git", icon: githubIcon },
      { name: "SAP / QA" }
    ]
  }
];

export const EXPERIENCE_LOG = [
  {
    id: "optimum-codes",
    role: "Software Engineer Intern",
    company: "Optimum Codes",
    location: "Udupi, India",
    period: "June 2025 - August 2025",
    type: "Internship",
    description: "Worked on a full-stack mental health companion web application using React and FastAPI.",
    highlights: [
      "Built responsive user interfaces in React with Tailwind CSS.",
      "Developed backend REST API endpoints in FastAPI integrated with PostgreSQL via SQLAlchemy.",
      "Configured CORS and client-side communication for smooth frontend-backend integration."
    ],
    technologies: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy", "Tailwind CSS", "Python"]
  },
  {
    id: "accenture",
    role: "Custom Software Engineer Intern",
    company: "Accenture",
    location: "Bengaluru, India",
    period: "December 2025 - May 2026",
    type: "Internship",
    description: "Worked in the SAP Testing domain on an enterprise ERP project in an Agile team.",
    highlights: [
      "Performed functional testing across SAP ERP modules.",
      "Executed test cases and assisted with defect validation.",
      "Collaborated with engineers to support quality assurance cycles."
    ],
    technologies: ["SAP ERP", "Tosca", "UFT", "Agile Testing"]
  }
];

export const ACADEMIC_CREDENTIALS = [
  {
    id: "mit-mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Manipal Institute of Technology",
    location: "Manipal, India",
    period: "2024 - 2026",
    score: "7.61 CGPA",
    description: "Focusing on full-stack development, data structures, and machine learning."
  },
  {
    id: "mgm-bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Mahatma Gandhi Memorial College",
    location: "Udupi, India",
    period: "2021 - 2024",
    score: "8.68 CGPA",
    description: "Studied programming fundamentals, database management, and software engineering."
  }
];
