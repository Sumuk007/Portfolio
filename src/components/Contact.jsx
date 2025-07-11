import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4" id='contact'>
      <div className="w-full max-w-lg">
        {/* Floating header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* Modern card with glassmorphism effect */}
        <div className="relative">
          {/* Glowing background effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 rounded-2xl blur opacity-20"></div>
          
          <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-800/50">
            <div className="space-y-8">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused('')}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-700 text-white text-lg py-3 px-0 focus:outline-none focus:border-cyan-400 transition-all duration-300 peer placeholder-transparent"
                  placeholder="Your name"
                />
                <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                  formData.name || focused === 'name' 
                    ? '-top-6 text-sm text-cyan-400' 
                    : 'top-3 text-lg text-gray-400'
                }`}>
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused('')}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-700 text-white text-lg py-3 px-0 focus:outline-none focus:border-cyan-400 transition-all duration-300 peer placeholder-transparent"
                  placeholder="your@email.com"
                />
                <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                  formData.email || focused === 'email' 
                    ? '-top-6 text-sm text-cyan-400' 
                    : 'top-3 text-lg text-gray-400'
                }`}>
                  Email Address
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  rows="4"
                  className="w-full bg-transparent border-0 border-b-2 border-gray-700 text-white text-lg py-3 px-0 focus:outline-none focus:border-cyan-400 transition-all duration-300 resize-none placeholder-transparent"
                  placeholder="Your message..."
                />
                <label className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                  formData.message || focused === 'message' 
                    ? '-top-6 text-sm text-cyan-400' 
                    : 'top-3 text-lg text-gray-400'
                }`}>
                  Message
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="group relative w-full overflow-hidden bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message
                    <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse delay-300"></div>
      </div>
    </div>
  );
}