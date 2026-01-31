'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function JoinSection() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    experience: 'beginner',
    message: '',
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert(`Thank you for your interest, ${formData.name}! We'll review your application and get back to you soon.`);
    setFormData({
      name: '',
      email: '',
      portfolio: '',
      experience: 'beginner',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="join" className="py-32 px-6 lg:px-8 bg-background border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 border border-white text-[10px] tracking-[0.2em] uppercase text-white mb-6">
            Join Us
          </span>
          <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-6">
            Become a Member
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Join our collective of passionate photographers and be part of a community that celebrates visual storytelling.
          </p>
        </div>

        <div className="clay-inset p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Portfolio & Experience */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
                  Portfolio URL
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  placeholder="https://yourportfolio.com"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
                  Experience Level
                </label>
                <div className="relative">
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  >
                    <option value="beginner" className="bg-zinc-900">Beginner (0-2 years)</option>
                    <option value="intermediate" className="bg-zinc-900">Intermediate (3-5 years)</option>
                    <option value="advanced" className="bg-zinc-900">Advanced (5+ years)</option>
                    <option value="professional" className="bg-zinc-900">Professional</option>
                  </select>
                  <div className="absolute right-0 top-3 pointer-events-none text-zinc-500">
                    <Icon name="ChevronDownIcon" size={16} variant="outline" />
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
                Tell Us About Your Photography
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border border-zinc-800 rounded-lg p-4 text-sm text-white focus:outline-none focus:border-white transition-colors resize-none"
                placeholder="Share your passion, style, and what you hope to achieve as part of our collective..."
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-zinc-800">
              <p className="text-[10px] text-zinc-600 max-w-xs">
                By submitting, you agree to our membership terms and community guidelines.
              </p>
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-white hover:bg-zinc-200 text-black text-xs font-semibold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 group glow-button"
              >
                Submit Application
                <Icon
                  name="ArrowRightIcon"
                  size={16}
                  variant="outline"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}