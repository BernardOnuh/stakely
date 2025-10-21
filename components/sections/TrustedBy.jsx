import React from 'react';

export default function TrustedBy() {
  const platforms = ['BASE', 'FARCASTER', 'X (TWITTER)', 'COINBASE', 'WALLETCONNECT', 'ENS', 'ETHEREUM', 'POLYGON'];
  
  // Duplicate for seamless loop
  const duplicatedPlatforms = [...platforms, ...platforms, ...platforms];

  return (
    <div className="mt-32 w-full relative overflow-hidden py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0a0a1f] to-black pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,black_0%,transparent_10%,transparent_90%,black_100%)] pointer-events-none z-10"></div>

      {/* Header */}
      <div className="text-center mb-8 relative z-20">
        <div className="inline-block mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-[#7C3AED] blur-lg opacity-40 rounded-full"></div>
            <span className="relative text-[#7C3AED] text-xs font-black uppercase tracking-[0.3em] bg-black/60 backdrop-blur-sm px-6 py-2 rounded-full border-2 border-[#7C3AED]/30">
              🤝 Powered By
            </span>
          </div>
        </div>
        <h3 
          className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight"
          style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
        >
          Trusted <span className="text-[#7C3AED]">Web3</span> Infrastructure
        </h3>
      </div>

      {/* Scrolling Text Carousel */}
      <div className="relative">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {duplicatedPlatforms.map((platform, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-8"
            >
              <span 
                className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-white to-[#7C3AED] hover:from-white hover:via-[#7C3AED] hover:to-white transition-all duration-300 cursor-pointer"
                style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
              >
                {platform}
              </span>
              <span className="text-[#7C3AED] text-4xl md:text-5xl mx-8">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Glow Line */}
      <div className="relative mt-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#7C3AED]/50 to-transparent"></div>
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent animate-shimmer-fast"></div>
      </div>
    </div>
  );
}
