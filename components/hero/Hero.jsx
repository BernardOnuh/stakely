// ============================================
// components/hero/Hero.jsx
// ============================================
import React from 'react';

export default function Hero({ onGetStartedClick, onPlayStakelyClick }) {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="text-center max-w-4xl mx-auto mt-auto">
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-[#7C3AED]/50 rounded-full px-5 py-2 mb-8 animate-float shadow-lg shadow-purple-500/30">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#7C3AED]"></span>
          </span>
          <span className="text-[#7C3AED] text-sm font-bold uppercase tracking-wider">🎮 Beta Access - Join Now</span>
        </div>

        {/* Main Heading - Gaming Style */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-slideUp uppercase tracking-tight">
          <span className="text-white drop-shadow-[0_0_40px_rgba(124,58,237,0.5)]" style={{ fontFamily: '"Bebas Neue", "Impact", "Arial Black", sans-serif' }}>
            Challenge
          </span>
          <br />
          <span className="relative inline-block">
            <span 
              className="bg-gradient-to-r from-[#7C3AED] to-[#1a0f3a] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
              style={{ 
                fontFamily: '"Bebas Neue", "Impact", "Arial Black", sans-serif',
                textShadow: '0 0 80px rgba(124,58,237,0.8), 0 0 120px rgba(124,58,237,0.5)'
              }}
            >
              Yourself
            </span>
            <span className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-[#7C3AED] via-[#4c1d95] to-transparent blur-md"></span>
          </span>
        </h1>

        {/* Subheading - EXPLOSIVE VERSION */}
        <div className="mb-12 max-w-3xl mx-auto animate-slideUp animation-delay-200">
          {/* Main Tagline */}
          <p 
            className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight leading-tight"
            style={{ 
              fontFamily: '"Bebas Neue", "Impact", sans-serif',
              textShadow: '0 0 30px rgba(124,58,237,0.5)'
            }}
          >
            Stake Crypto. <span className="text-[#7C3AED]">Win Massive.</span>
          </p>
          
          {/* Secondary Text */}
          <p className="text-lg md:text-xl text-gray-300 font-bold leading-relaxed">
            Put your money where your mouth is. <span className="text-white">Prove yourself</span> on-chain and <span className="text-[#7C3AED] font-black">dominate the leaderboard</span>. 🔥
          </p>

   
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center items-center flex-wrap animate-slideUp animation-delay-400">
          <button
            onClick={onGetStartedClick}
            className="group relative overflow-hidden bg-white text-black px-10 py-4 rounded-lg font-black text-lg uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/40 border-2 border-white"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button
            onClick={onPlayStakelyClick}
            className="group relative overflow-hidden bg-gradient-to-r from-[#7C3AED] to-[#1a0f3a] text-white px-10 py-4 rounded-lg font-black text-lg uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/60 flex items-center gap-3 border-2 border-[#7C3AED]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
              </svg>
              Play Now
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4c1d95] to-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[#7C3AED] blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
          </button>
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
      </div>
    </main>
  );
}

// ============================================
// Add to your globals.css or tailwind.config.js
// ============================================
/*
Import gaming font in your HTML head or globals.css:

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

Or add to your next.config.js / layout.jsx:
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />

Alternatively, download gaming fonts like:
- Bebas Neue
- Oswald
- Teko
- Rajdhani
- Orbitron
*/