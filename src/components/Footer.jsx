import React from 'react';
 const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: '#', color: 'hover:bg-purple-500/20 hover:border-purple-400' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'hover:bg-blue-500/20 hover:border-blue-400' },
    { name: 'Twitter', icon: '🐦', url: '#', color: 'hover:bg-sky-500/20 hover:border-sky-400' },
    { name: 'Instagram', icon: '📸', url: '#', color: 'hover:bg-pink-500/20 hover:border-pink-400' }
  ];

  return (
    <div className="bg-black">
      <footer className="relative overflow-hidden">
        
        {/* Background glow effect */}
        <div className=" w-250 border-b-2 border-white/40 mx-auto"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-8">
          {/* Top row: Contact info left, Social icons right */}
          <div className="flex justify-between items-start mb-6">
            
            {/* Left: Contact Info - Ready for your images */}
            <div className="flex flex-col space-y-3">
              <a href="mailto:hello@yourname.com" className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-cyan-400/25 transition-all duration-300">
                  {/* Your email icon image will go here */}
                  <div className="w-5 h-5 bg-white/20 rounded opacity-50"></div>
                </div>
                <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  hello@yourname.com
                </span>
              </a>
              <a href="tel:+1234567890" className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-emerald-400/25 transition-all duration-300">
                  {/* Your phone icon image will go here */}
                  <div className="w-5 h-5 bg-white/20 rounded opacity-50"></div>
                </div>
                <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                  +1 (234) 567-890
                </span>
              </a>
            </div>

            {/* Right: Social Links - Ready for your images */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href="#"
                  className={`group mt-4 relative w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-700/50 transition-all duration-300 hover:scale-110 hover:rotate-12 ${social.color} hover:shadow-lg`}
                  aria-label={social.name}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Your image will go here */}
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