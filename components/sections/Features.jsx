// ============================================
// components/sections/Features.jsx
// ============================================
import React from 'react';

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "AI-VERIFIED",
      subtitle: "Challenges",
      description: "Only real, verifiable challenges accepted. No fake outcomes.",
      stat: "99.9%",
      statLabel: "Accuracy",
      delay: "0s"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "SMART CONTRACT",
      subtitle: "Escrow",
      description: "Your crypto is locked and secure. Automatic payouts, zero trust needed.",
      stat: "100%",
      statLabel: "Secure",
      delay: "0.1s"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "COMMUNITY",
      subtitle: "Governance",
      description: "Fair voting from neutral members. Earn rewards for honest votes.",
      stat: "1000+",
      statLabel: "Voters",
      delay: "0.2s"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "SOCIAL",
      subtitle: "Integration",
      description: "Connect Twitter or Farcaster. Your identity becomes your reputation.",
      stat: "Instant",
      statLabel: "Setup",
      delay: "0.3s"
    }
  ];

  return (
    <div id="features" className="mt-32 w-full max-w-7xl mx-auto px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7C3AED]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4c1d95]/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#7C3AED]/5 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-20 relative z-10">
        {/* Badge with Pulse */}
        <div className="inline-block mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-[#7C3AED] blur-xl opacity-50 rounded-full animate-pulse-slow"></div>
            <span className="relative text-[#7C3AED] text-sm font-black uppercase tracking-widest bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-[#7C3AED]/50 shadow-lg shadow-purple-500/30 inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C3AED]"></span>
              </span>
              🔥 Platform Features
            </span>
          </div>
        </div>
        
        {/* Title */}
        <h2 
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight"
          style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
        >
          Built for <span className="text-[#7C3AED] drop-shadow-[0_0_40px_rgba(124,58,237,0.8)]">Winners</span>
        </h2>
        <p className="text-gray-400 text-lg font-semibold max-w-2xl mx-auto">
          Powered by cutting-edge Web3 technology. <span className="text-[#7C3AED] font-bold">No compromises.</span>
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group relative bg-gradient-to-br from-[#1E293B]/80 via-black/60 to-[#0a0a1f]/80 backdrop-blur-md border-2 border-[#7C3AED]/30 rounded-2xl p-8 hover:border-[#7C3AED] transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 overflow-hidden cursor-pointer"
            style={{ animationDelay: feature.delay }}
          >
            {/* Animated Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-[#4c1d95]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Animated Border Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] via-[#4c1d95] to-[#7C3AED] animate-gradient bg-[length:200%_auto] blur-xl"></div>
            </div>

            {/* Diagonal Stripe Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#7C3AED] to-transparent transform rotate-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
            </div>

            {/* Content Container */}
            <div className="relative flex items-start gap-6">
              {/* Icon Container with Orbit Effect */}
              <div className="relative flex-shrink-0">
                {/* Outer Ring - Orbiting */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#7C3AED] rounded-full animate-orbit-fast"></div>
                  <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-[#7C3AED] rounded-full animate-orbit-fast" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#7C3AED] rounded-full animate-orbit-fast" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#4c1d95] rounded-2xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse-slow"></div>
                
                {/* Icon Box */}
                <div className="relative bg-gradient-to-br from-[#7C3AED] to-[#1a0f3a] w-20 h-20 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-[#7C3AED]/50 shadow-xl shadow-purple-500/30">
                  <div className="text-white group-hover:scale-125 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>

                {/* Stat Badge */}
                <div className="absolute -bottom-2 -right-2 bg-black border-2 border-[#7C3AED] rounded-lg px-2 py-1 shadow-lg shadow-purple-500/50 transform group-hover:scale-110 transition-transform z-10">
                  <div className="text-center">
                    <p className="text-[#7C3AED] font-black text-xs leading-none" style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}>
                      {feature.stat}
                    </p>
                    <p className="text-gray-400 text-[8px] uppercase tracking-wider leading-none">
                      {feature.statLabel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="relative flex-1 pt-1">
                <div className="mb-3">
                  <h3 
                    className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-none mb-1 group-hover:text-[#7C3AED] transition-colors duration-300"
                    style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-lg text-[#7C3AED] font-bold uppercase tracking-wide leading-none"
                    style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
                  >
                    {feature.subtitle}
                  </p>
                </div>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm font-medium">
                  {feature.description}
                </p>

                {/* Arrow Indicator */}
                <div className="mt-4 flex items-center gap-2 text-[#7C3AED] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className="text-sm font-bold uppercase tracking-wider">Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Shine Effect Moving Across */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform group-hover:translate-x-[300%] transition-transform duration-1000 ease-out"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-20 relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 via-[#4c1d95]/30 to-[#7C3AED]/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
        
        <div className="relative bg-gradient-to-br from-[#7C3AED]/20 via-black/40 to-[#4c1d95]/20 border-2 border-[#7C3AED]/50 rounded-3xl p-12 text-center backdrop-blur-md overflow-hidden">
          {/* Animated Top Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent animate-shimmer"></div>
          
          <h3 
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4"
            style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
          >
            Ready to <span className="text-[#7C3AED]">Dominate?</span>
          </h3>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of players already staking, winning, and building their reputation on-chain.
          </p>
          
          <button className="group/btn relative overflow-hidden bg-gradient-to-r from-[#7C3AED] to-[#4c1d95] text-white px-12 py-4 rounded-xl font-black uppercase tracking-wider transition-all duration-300 hover:scale-110 border-2 border-[#7C3AED] shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/80">
            <span className="relative z-10 flex items-center gap-3 text-xl" style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}>
              <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
              </svg>
              Start Playing Now
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#4c1d95] to-[#7C3AED] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
