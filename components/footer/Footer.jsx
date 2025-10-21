// ============================================
// components/footer/Footer.jsx - GAMING STYLE
// ============================================
import React from 'react';

export default function Footer() {
  const socialLinks = [
    { name: 'X (Twitter)', icon: '𝕏', url: '#' },
    { name: 'Discord', icon: '💬', url: '#' },
    { name: 'Farcaster', icon: '🟣', url: '#' },
    { name: 'Telegram', icon: '✈️', url: '#' }
  ];

  return (
    <footer className="relative z-10 bg-black border-t-4 border-[#7C3AED] mt-32 overflow-hidden">
      {/* Animated Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-1">
        <div className="h-full bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent animate-shimmer-fast"></div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4c1d95]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.2)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#4c1d95] rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-[#7C3AED] to-[#1a0f3a] rounded-full flex items-center justify-center border-2 border-[#7C3AED]/50 shadow-xl shadow-purple-500/50 transform group-hover:scale-110 group-hover:rotate-12 transition-all">
                  <span className="text-white font-black text-2xl" style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}>S</span>
                </div>
              </div>
              <div>
                <div 
                  className="text-white text-3xl font-black uppercase tracking-tight leading-none"
                  style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
                >
                  Play <span className="text-[#7C3AED]">Stakely</span>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              The <span className="text-[#7C3AED] font-bold">ultimate</span> social challenge platform. Stake crypto, prove yourself, and dominate the leaderboard.
            </p>

            {/* Social Links - GAMING STYLE */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="group relative w-12 h-12 bg-gradient-to-br from-[#1E293B] to-black border-2 border-[#7C3AED]/30 rounded-xl flex items-center justify-center hover:border-[#7C3AED] transition-all hover:scale-110 overflow-hidden"
                  title={social.name}
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-[#7C3AED]/0 group-hover:bg-[#7C3AED]/20 transition-all"></div>
                  
                  {/* Icon */}
                  <span className="relative text-2xl transform group-hover:scale-125 transition-transform">
                    {social.icon}
                  </span>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="text-white text-xl font-black uppercase tracking-tight mb-6"
              style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
            >
              Platform
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'How It Works', href: '#how-it-works' },
                { name: 'Features', href: '#features' },
                { name: 'Leaderboard', href: '#' },
                { name: 'Challenges', href: '#' }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="group text-gray-400 hover:text-[#7C3AED] transition-colors text-sm flex items-center gap-3 font-semibold"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-[#7C3AED] transition-all duration-300"></span>
                    <span className="transform group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 
              className="text-white text-xl font-black uppercase tracking-tight mb-6"
              style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
            >
              Resources
            </h3>
            <ul className="space-y-3">
              {['Docs', 'FAQ', 'Support', 'API'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="group text-gray-400 hover:text-[#7C3AED] transition-colors text-sm flex items-center gap-3 font-semibold"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-[#7C3AED] transition-all duration-300"></span>
                    <span className="transform group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#7C3AED]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-500 text-sm font-semibold">
              © 2025 <span className="text-[#7C3AED]">Play Stakely</span>. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Cookies'].map((item, index) => (
                <a 
                  key={index}
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mt-8">
            <p 
              className="text-[#7C3AED] text-lg font-black uppercase tracking-wider"
              style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
            >
              🎯 Stake. Prove. Win. Repeat.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}