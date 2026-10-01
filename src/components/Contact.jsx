import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState(null); // null | 'submitting' | 'success' | 'error'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = import.meta.env.VITE_FORMSPREE_URL;

    if (!endpoint) {
      setStatus('success');
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-14 sm:py-20 bg-[#060709] border-t border-white/[0.06]">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#00f59b] to-[#00d2ff] rounded-full mt-2.5 shadow-[0_0_10px_rgba(0,245,155,0.4)]"></div>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-light">
            Have a question or want to work together? Send me a message.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/[0.08] space-y-4">
              <h3 className="text-sm font-semibold text-white">Contact Info</h3>

              <div className="space-y-3">
                {/* Email with copy */}
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-[#00f59b]/10 text-[#00f59b] flex items-center justify-center shrink-0">
                      <Mail size={15} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-400">Email</div>
                      <div className="text-xs sm:text-sm text-white font-mono truncate">{PERSONAL_INFO.email}</div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="btn-interactive p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white shrink-0"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check size={14} className="text-[#00f59b]" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Phone */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center shrink-0">
                    <Phone size={15} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Phone</div>
                    <div className="text-xs sm:text-sm text-white">{PERSONAL_INFO.phone}</div>
                  </div>
                </a>

                {/* Location */}
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-400/10 text-purple-400 flex items-center justify-center shrink-0">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm text-white">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/[0.08]">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-slate-300 block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-[#00f59b] focus:outline-none text-white text-sm transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-300 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-[#00f59b] focus:outline-none text-white text-sm transition-colors placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-[#00f59b] focus:outline-none text-white text-sm transition-colors placeholder:text-slate-600 resize-none"
                  />
                </div>

                {status === 'success' && (
                  <div className="p-3 rounded-xl bg-[#00f59b]/15 border border-[#00f59b]/30 text-xs text-[#00f59b] flex items-center gap-2">
                    <Check size={14} />
                    <span>Message sent! Thank you for reaching out.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-xs text-red-400">
                    Failed to send message. Please email me directly at {PERSONAL_INFO.email}.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-interactive w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-black bg-[#00f59b] hover:bg-[#00f59b]/90 disabled:opacity-50"
                >
                  <Send size={14} />
                  <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
