// ============================================
// components/layout/Header.jsx
// ============================================
import React from 'react';

export default function Header({ onPlayNowClick }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-8 py-6 animate-fadeIn">
      {/* Backdrop blur bar */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-lg border-b border-[#7C3AED]/20"></div>
      
      {/* Logo Section */}
      <div className="relative flex items-center gap-3 group cursor-pointer">
        {/* Logo Icon with Glow */}
        <div className="relative">
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#4c1d95] rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Logo Circle */}
          <div className="relative w-12 h-12 bg-gradient-to-br from-[#7C3AED] via-[#6C2BD9] to-[#1a0f3a] rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-2 border-[#7C3AED]/50 shadow-lg shadow-purple-500/50">
            <span className="text-white font-black text-2xl" style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}>S</span>
          </div>
          
          {/* Inner Glow Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
        </div>
        
        {/* Brand Name */}
        <div className="hidden sm:block">
          <span 
            className="text-white font-black text-2xl uppercase tracking-tight drop-shadow-[0_0_10px_rgba(124,58,237,0.8)]" 
            style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
          >
            Play <span className="text-[#7C3AED]">Stakely</span>
          </span>
        </div>
      </div>

      {/* Navigation / Play Now Button */}
      <div className="relative flex items-center gap-4">
        {/* Optional: Add nav links for desktop */}
        <nav className="hidden md:flex items-center gap-6 mr-4">
          <a href="#how-it-works" className="text-gray-300 hover:text-white font-semibold text-sm uppercase tracking-wider transition-colors">
            How It Works
          </a>
          <a href="#features" className="text-gray-300 hover:text-white font-semibold text-sm uppercase tracking-wider transition-colors">
            Features
          </a>
        </nav>

        {/* Play Now Button */}
        <button 
          onClick={onPlayNowClick}
          className="relative group overflow-hidden bg-gradient-to-r from-[#7C3AED] to-[#4c1d95] text-white px-6 sm:px-8 py-3 rounded-lg font-black uppercase tracking-wider transition-all duration-300 hover:scale-105 border-2 border-[#7C3AED] shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80"
          style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
        >
          {/* Button Text */}
          <span className="relative z-10 flex items-center gap-2 text-base sm:text-lg">
            <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
            </svg>
            Play Now
          </span>
          
          {/* Hover Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#4c1d95] to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Animated Border Glow */}
          <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#7C3AED] via-[#4c1d95] to-[#7C3AED] blur-md animate-gradient bg-[length:200%_auto]"></div>
          </div>
          
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>

        {/* Mobile Menu Button (Optional) */}
        <button className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

// ============================================
// Enhanced Features Added:
// ============================================
/*
✅ FIXED/STICKY HEADER - Stays at top while scrolling
✅ Darker purple gradient (from-[#7C3AED] to-[#4c1d95])
✅ Gaming font (Bebas Neue) on logo and button
✅ Logo rotation on hover
✅ Pulsing ring animation on logo hover
✅ Play icon on button with pulse animation
✅ Corner accent animations on hover
✅ Stronger backdrop blur for better readability
✅ Optional navigation links
✅ Responsive design (mobile menu icon)
✅ Stronger purple glow effects
✅ Animated gradient border on button hover
✅ ALL UPPERCASE for gaming aesthetic
✅ Enhanced shadow effects

IMPORTANT: Main content needs pt-24 (padding-top) to avoid being hidden behind fixed header
*/