import React, { useState, useEffect } from "react";
import sumuk from '../assets/sumuk.png'; // Replace with your actual image path
import {Github, Linkedin, Twitter, Mail, Download, MapPin,} from "lucide-react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const socialLinks = [
    { icon: Github, href: "https://github.com/Sumuk007", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sumuk/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:sumukbhat007@gmail.com", label: "Email" },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden" id="home">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30" />
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                10 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4"
        id="home"
      >
        {/* Profile Image */}
        <div className="mb-2 lg:mt-18 relative group">
          <div className="absolute inset-0  rounded-full blur opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
          <img
            src={sumuk}
            alt="Sumuk"
            className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Name */}
        <h1
          className="text-4xl sm:text-6xl font-bold text-white mb-4 text-center"
          style={{
            animation: "fadeInUp 1s ease-out 0.2s both",
          }}
        >
          Hi, I am{" "}
          <span className="text-blue-700 bg-clip-text underline">Sumuk</span>
        </h1>

        {/* Role & Location */}
        <div
          className="text-lg lg:text-xl text-gray-300 text-center space-y-2 mb-6"
          style={{
            animation: "fadeInUp 1s ease-out 0.4s both",
          }}
        >
          <p className="flex items-center justify-center flex-wrap gap-2">
            <span className="text-lg lg:text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">
              Full-Stack Developer
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-lg lg:text-xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-medium">
              AI Enthusiast
            </span>
          </p>
          <p className="flex items-center justify-center gap-2 text-gray-400">
            <MapPin size={15} />
            <span className="text-sm">Based in India</span>
          </p>
        </div>

        {/* Social Links */}
        <div
          className="flex gap-6 mb-4"
          style={{
            animation: "fadeInUp 1s ease-out 0.6s both",
          }}
        >
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 mb-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              style={{
                animation: `slideInScale 0.8s ease-out ${
                  0.7 + index * 0.1
                }s both`,
              }}
            >
              <social.icon
                size={14}
                className="text-white/80 group-hover:text-white transition-colors duration-300"
              />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.label}
              </span>
            </a>
          ))}
        </div>

        {/* Resume Button */}
        {/* Resume Button */}
        <a
          href="https://drive.google.com/drive/folders/1MDyDxm9jZFnA3pvD1dsU6qN0HrUyMns6?usp=sharing"
          download={true}
          target="_blank"
          className="group relative mb-30 lg:mb-0 overflow-hidden bg-white/8 backdrop-blur-sm hover:bg-white/15 text-white font-medium px-5 py-2.5 rounded-lg border border-white/15 hover:border-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          style={{
            animation: "fadeInUp 1s ease-out 0.8s both",
          }}
        >
          <div className="relative flex items-center gap-2.5 z-10">
            <Download size={16} className="group-hover:translate-y-[-1px] transition-transform duration-200" />
            <span className="tracking-wide">Resume</span>
          </div>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/8 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800"></div>
        </a>
      </div>

      <style>{`
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

        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
