import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 1000);
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-8">
      <div className="relative max-w-md w-full">
        {/* Animated border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-2xl blur opacity-25 animate-pulse"></div>
        
        {/* Main form container */}
        <div className="relative bg-black border border-gray-800 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                placeholder="Your Name"
                className="w-full pl-12 pr-4 py-4 bg-gray-900 border-2 border-gray-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all duration-300"
              />
              {focusedField === 'name' && (
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transform scale-x-100 transition-transform duration-300"></div>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                placeholder="Your Email"
                className="w-full pl-12 pr-4 py-4 bg-gray-900 border-2 border-gray-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all duration-300"
              />
              {focusedField === 'email' && (
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transform scale-x-100 transition-transform duration-300"></div>
              )}
            </div>

            {/* Message Field */}
            <div className="relative">
              <div className="absolute left-3 top-4 text-gray-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                placeholder="Your Message"
                rows="5"
                className="w-full pl-12 pr-4 py-4 bg-gray-900 border-2 border-gray-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all duration-300 resize-none"
              />
              {focusedField === 'message' && (
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transform scale-x-100 transition-transform duration-300"></div>
              )}
            </div>

            {/* Send Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 hover:from-orange-600 hover:to-red-600 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 left-4 w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;