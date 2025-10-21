// ============================================
// components/sections/HowItWorks.jsx - SUPER ENTICING VERSION
// ============================================
import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "CREATE",
      subtitle: "Your Challenge",
      description: "Connect Twitter or Farcaster. Post your challenge with a wager. We create your crypto wallet instantly.",
      icon: "🎯",
      stat: "< 2 MIN",
      statLabel: "Setup",
      feature1: "Instant Wallet",
      feature2: "Social Login",
      color: "from-[#7C3AED] to-[#4c1d95]"
    },
    {
      number: 2,
      title: "STAKE",
      subtitle: "& Watch It Grow",
      description: "Community stakes for or against you. All funds locked in smart contracts. Watch the prize pool multiply.",
      icon: "💰",
      stat: "100%",
      statLabel: "Secure",
      feature1: "Smart Escrow",
      feature2: "Real-time Pool",
      color: "from-[#4c1d95] to-[#1a0f3a]"
    },
    {
      number: 3,
      title: "WIN",
      subtitle: "Get Paid",
      description: "Community votes verify your win. Automatic payout to your wallet. Earn reputation points and build your legacy.",
      icon: "✅",
      stat: "INSTANT",
      statLabel: "Payout",
      feature1: "Auto Rewards",
      feature2: "Rep Points",
      color: "from-[#1a0f3a] to-[#7C3AED]"
    }
  ];

  return (
    <div id="how-it-works" className="mt-32 w-full max-w-7xl mx-auto px-4 relative overflow-hidden">
      {/* Massive Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#4c1d95]/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#7C3AED]/15 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Section Header - EXPLOSIVE */}
      <div className="text-center mb-24 relative z-10">
        {/* Glowing Badge */}
        <div className="inline-block mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-[#7C3AED] blur-2xl opacity-60 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 bg-[#7C3AED] blur-xl opacity-40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-[#7C3AED] via-[#4c1d95] to-[#7C3AED] px-8 py-4 rounded-full border-4 border-white/20 shadow-2xl shadow-purple-500/60 animate-gradient bg-[length:200%_auto]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <span className="text-white text-base font-black uppercase tracking-[0.3em]" style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}>
                How It Works
              </span>
            </div>
          </div>
        </div>
        
        {/* Massive Title */}
        <h2 
          className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-none"
          style={{ 
            fontFamily: '"Bebas Neue", "Impact", sans-serif',
            textShadow: '0 0 60px rgba(124,58,237,0.8), 0 0 100px rgba(124,58,237,0.5)'
          }}
        >
          <div className="inline-block transform hover:scale-110 transition-transform">Win in</div>{' '}
          <div className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-white to-[#7C3AED] animate-gradient bg-[length:200%_auto] transform hover:scale-110 transition-transform">
            3 Steps
          </div>
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 font-bold">
          <span className="text-[#7C3AED]">Create.</span> <span className="text-white">Stake.</span> <span className="text-[#7C3AED]">Dominate.</span> 🔥
        </p>
      </div>
      
      {/* Steps - MEGA CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-16">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="group relative transform hover:-translate-y-6 transition-all duration-500"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* MASSIVE Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/40 via-[#4c1d95]/30 to-[#7C3AED]/40 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 group-hover:blur-3xl transition-all duration-500 animate-pulse-slow"></div>
            
            {/* Card */}
            <div className={`relative bg-gradient-to-br ${step.color} p-[3px] rounded-3xl overflow-hidden`}>
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-fast"></div>
              
              {/* Inner Card */}
              <div className="relative bg-gradient-to-b from-black via-[#0a0a1f] to-black rounded-3xl p-8 overflow-hidden h-full">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-[#4c1d95]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Diagonal Stripe */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#7C3AED] to-transparent transform rotate-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>

                {/* Top Section - Number & Icon */}
                <div className="relative flex items-start justify-between mb-6">
                  {/* Number Badge - HUGE */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#7C3AED] rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity animate-pulse-slow"></div>
                    <div className="relative bg-gradient-to-br from-[#7C3AED] to-[#1a0f3a] w-16 h-16 rounded-2xl flex items-center justify-center border-2 border-white/20 shadow-2xl shadow-purple-500/60 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                      <span className="text-white text-3xl font-black" style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}>
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Icon - MASSIVE */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#4c1d95] rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity animate-pulse-slow"></div>
                    <div className="relative w-28 h-28 bg-gradient-to-br from-[#7C3AED] to-[#1a0f3a] rounded-3xl flex items-center justify-center border-4 border-white/10 shadow-2xl shadow-purple-500/50 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <span className="text-6xl">{step.icon}</span>
                    </div>
                    
                    {/* Orbiting Particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#7C3AED] rounded-full animate-orbit-fast shadow-lg shadow-purple-500"></div>
                      <div className="absolute top-1/2 right-0 w-2 h-2 bg-[#7C3AED] rounded-full animate-orbit-fast shadow-lg shadow-purple-500" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-[#7C3AED] rounded-full animate-orbit-fast shadow-lg shadow-purple-500" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>

                {/* Title Section */}
                <div className="relative mb-4">
                  <h3 
                    className="text-5xl font-black text-white uppercase tracking-tighter mb-2 leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7C3AED] group-hover:to-white transition-all duration-300"
                    style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-2xl font-black text-[#7C3AED] uppercase tracking-wide leading-none"
                    style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
                  >
                    {step.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6 text-sm group-hover:text-gray-300 transition-colors">
                  {step.description}
                </p>

                {/* Features Row */}
                <div className="flex gap-2 mb-6">
                  <div className="flex-1 bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-lg px-3 py-2 backdrop-blur-sm group-hover:bg-[#7C3AED]/20 group-hover:border-[#7C3AED]/50 transition-all">
                    <p className="text-[#7C3AED] text-xs font-bold uppercase text-center">
                      {step.feature1}
                    </p>
                  </div>
                  <div className="flex-1 bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-lg px-3 py-2 backdrop-blur-sm group-hover:bg-[#7C3AED]/20 group-hover:border-[#7C3AED]/50 transition-all">
                    <p className="text-[#7C3AED] text-xs font-bold uppercase text-center">
                      {step.feature2}
                    </p>
                  </div>
                </div>

                {/* Stat Badge - PROMINENT */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[#7C3AED] blur-lg opacity-0 group-hover:opacity-50 transition-opacity rounded-xl"></div>
                  <div className="relative bg-gradient-to-r from-[#7C3AED] to-[#4c1d95] border-2 border-white/20 rounded-xl px-6 py-4 shadow-xl shadow-purple-500/40 transform group-hover:scale-105 transition-transform">
                    <div className="text-center">
                      <div className="text-white text-3xl font-black mb-1 leading-none" style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}>
                        {step.stat}
                      </div>
                      <div className="text-white/80 text-sm uppercase tracking-widest font-bold">
                        {step.statLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accents - BIGGER */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Connecting Arrow - ANIMATED */}
            {index < 2 && (
              <div className="hidden lg:block absolute top-1/2 -right-4 z-30 transform -translate-y-1/2">
                <div className="relative">
                  {/* Glow */}
                  <div className="absolute inset-0 bg-[#7C3AED] blur-xl opacity-60 rounded-full"></div>
                  
                  {/* Arrow */}
                  <svg className="relative w-12 h-12 text-[#7C3AED] animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  
                  {/* Animated Flow Dots */}
                  <div className="absolute top-1/2 left-full flex gap-2 -translate-y-1/2">
                    <div className="w-2 h-2 bg-[#7C3AED] rounded-full animate-flow-dot shadow-lg shadow-purple-500"></div>
                    <div className="w-2 h-2 bg-[#7C3AED] rounded-full animate-flow-dot shadow-lg shadow-purple-500" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-[#7C3AED] rounded-full animate-flow-dot shadow-lg shadow-purple-500" style={{ animationDelay: '0.4s' }}></div>
                    <div className="w-2 h-2 bg-[#7C3AED] rounded-full animate-flow-dot shadow-lg shadow-purple-500" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner - EXPLOSIVE */}
      <div className="relative mt-20 group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/40 via-[#4c1d95]/50 to-[#7C3AED]/40 rounded-3xl blur-3xl opacity-60 group-hover:opacity-100 transition-opacity animate-pulse-slow"></div>
        
        <div className="relative bg-gradient-to-r from-[#7C3AED] via-[#4c1d95] to-[#7C3AED] p-[4px] rounded-3xl overflow-hidden animate-gradient bg-[length:200%_auto]">
          <div className="bg-gradient-to-b from-black via-[#0a0a1f] to-black rounded-3xl px-8 py-12 md:py-16 text-center overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(124,58,237,0.3)_25%,transparent_25%,transparent_75%,rgba(124,58,237,0.3)_75%,rgba(124,58,237,0.3)),linear-gradient(45deg,rgba(124,58,237,0.3)_25%,transparent_25%,transparent_75%,rgba(124,58,237,0.3)_75%,rgba(124,58,237,0.3))] bg-[size:60px_60px] bg-[position:0_0,30px_30px] animate-grid-move"></div>
            </div>

            <div className="relative z-10">
              <h3 
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-none"
                style={{ 
                  fontFamily: '"Bebas Neue", "Impact", sans-serif',
                  textShadow: '0 0 40px rgba(124,58,237,0.8)'
                }}
              >
                That's It. <span className="text-[#7C3AED]">Really.</span>
              </h3>
              <p className="text-xl md:text-2xl text-gray-400 font-bold mb-8 max-w-3xl mx-auto">
                No complicated steps. No hidden fees. Just <span className="text-white">pure competition</span> and <span className="text-[#7C3AED] font-black">massive rewards</span>.
              </p>

              <button className="group/btn relative overflow-hidden bg-gradient-to-r from-[#7C3AED] to-[#4c1d95] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-wider transition-all duration-300 hover:scale-110 border-4 border-white/20 shadow-2xl shadow-purple-500/60 hover:shadow-purple-500/80">
                <span className="relative z-10 flex items-center gap-3 text-2xl" style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}>
                  <svg className="w-7 h-7 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                  </svg>
                  Start Your First Challenge
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
