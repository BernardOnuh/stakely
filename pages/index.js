
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/hero/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import Features from '@/components/sections/Features';
import TrustedBy from '@/components/sections/TrustedBy';
import Footer from '@/components/footer/Footer';
import WaitlistModal from '@/components/modals/WaitlistModal';

export default function App() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1f] via-[#1a0f3a] to-[#0a0a1f] relative overflow-hidden">
      {/* ========================================
          ANIMATED BACKGROUND EFFECTS
      ======================================== */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Main Central Glow - Massive Purple */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-[#7C3AED]/30 via-[#4c1d95]/15 to-transparent blur-3xl animate-pulse-slow"></div>
        
        {/* Secondary Glow Layer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#7C3AED]/20 via-[#1a0f3a]/10 to-transparent blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
        
        {/* Floating Purple Orbs - Only Purple Theme */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#7C3AED]/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4c1d95]/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#7C3AED]/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-[#1a0f3a]/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* ========================================
          MAIN CONTENT SECTIONS
      ======================================== */}
      
      {/* Header */}
      <Header onPlayNowClick={() => setShowWaitlist(true)} />
      
      {/* Hero Section */}
      <Hero 
        onGetStartedClick={() => setShowWaitlist(true)}
        onPlayStakelyClick={() => setShowWaitlist(true)}
      />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Features Section */}
      <Features />
      
      {/* Trusted By Carousel */}
      <TrustedBy />

      {/* Footer (includes the epic tagline) */}
      <Footer />

      {/* ========================================
          WAITLIST MODAL
      ======================================== */}
      <WaitlistModal 
        isOpen={showWaitlist} 
        onClose={() => setShowWaitlist(false)} 
      />

      {/* ========================================
          GLOBAL STYLES FOR ANIMATIONS
      ======================================== */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(10px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-15px); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .bg-gradient-radial {
          background-image: radial-gradient(var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}