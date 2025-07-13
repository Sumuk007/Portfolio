import React from 'react';
import gmailicon from '../assets/icons/gmail.svg';
import phoneicon from '../assets/icons/phone.svg';
import instagramicon from '../assets/icons/instagram.svg';
import githubicon from '../assets/icons/github.svg';
import linkedinicon from '../assets/icons/linkedin.svg';


 const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Sumuk007', color: 'bg-white/70 hover:bg-white', src: githubicon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sumuk/#', color: 'hover:bg-blue-500/20 hover:border-blue-400', src: linkedinicon },
    { name: 'Instagram', url: 'https://www.instagram.com/__sumuk__bhat__?igsh=MWdtOXhiN3Y0YTZmMA==', color: 'hover:bg-pink-500/20 hover:border-pink-400', src: instagramicon },
  ];

  return (
    <div className="bg-black mt-0">
      <footer className="relative overflow-hidden">
        <div className=" w-80 md:w-250 border-b-2 border-white/40 mx-auto"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-8">
          {/* Top row: Contact info left, Social icons right */}
          <div className="flex justify-between items-start mb-6">
            
            {/* Left: Contact Info - Ready for your images */}
            <div className="flex flex-col space-y-3">
              <a href="mailto:sumukbhat007@gmail.com" className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300">
                <div className="w-8 h-8  rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-white/25 transition-all duration-300">
                  <img src={gmailicon} alt="Gmail" />
                  <div className="w-5 h-5 bg-white/20 rounded opacity-50"></div>
                </div>
                <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  sumukbhat007@gmail.com
                </span>
              </a>
              <a href="tel:+91-7899097174" className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-white/25 transition-all duration-300">
                  <img src={phoneicon} alt="Phone" />
                  <div className="w-5 h-5 bg-white/20 rounded opacity-50"></div>
                </div>
                <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  +91-7899097174
                </span>
              </a>
            </div>
 
            {/* Right: Social Links - Ready for your images */}
            <div className=" flex flex-wrap md:flex-row justify-end md:justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target='_blank'
                  className={`group mt-4 relative w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-700/50 transition-all duration-300 hover:scale-110 hover:rotate-12 ${social.color} hover:shadow-lg`}
                  aria-label={social.name}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img src={social.src} alt={social.name} />
                  <div className="w-6 h-6 bg-gray-600 rounded opacity-30"></div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {social.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom center: Enhanced Copyright */}
          <div className="text-center pt-4 border-t border-gray-800/30">
            <div className="inline-flex items-center space-x-2 text-gray-500 text-xs">
              <span className='text-white'>© 2025 Sumuk.</span>
              <span className="text-white">|</span>
              <span className='text-white'>All rights reserved.</span>
              <span className="text-white">|</span>
              <span className="text-white">Made with</span>
              <span className="text-red-600 text-lg animate-pulse">♥</span>
            </div>
          </div>
        </div> 
      </footer>
    </div>
  );
}

export default Footer;