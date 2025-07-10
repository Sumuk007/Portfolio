import React, { useState, useEffect } from 'react';
import { Home, Code, Brain, Mail, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Experience', icon: Briefcase, href: '#experience' },
    { name: 'Skills', icon: Brain , href: '#skills' },
    { name: 'Projects', icon: Code, href: '#projects' },
    { name: 'Contact', icon: Mail, href: '#contact' },
    
  ];

  return (
    <div className="relative">
      {/* Navbar - Responsive for all screen sizes */}
      <nav className={`fixed top-6 md:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'backdrop-blur-md bg-white/10' : 'backdrop-blur-sm bg-white/5'
      } rounded-full border border-white/20 shadow-md max-w-4xl`}>
        <div className="px-12 md:px-3 py-1 md:py-2">
          <ul className="flex justify-center space-x-4 md:space-x-8">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`flex items-center justify-center md:space-x-2 px-3 md:px-6 py-2 md:py-3 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200${
                    index === 0 ? 'bg-white/10 text-white' : ''
                  }`}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <item.icon size={20} />
                  <span className="text-xs md:text-sm font-medium hidden md:block">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;