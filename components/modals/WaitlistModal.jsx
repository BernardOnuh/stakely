// ============================================
// components/modals/WaitlistModal.jsx - GAMING STYLE
// ============================================
import React, { useState, useEffect } from 'react';
import { socialAuth } from '../../lib/reown';
import { useSession } from 'next-auth/react';

export default function WaitlistModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Get current session from NextAuth
  const { data: session, status } = useSession();

  // Track connected social accounts with usernames
  const [socialConnections, setSocialConnections] = useState({
    farcasterUsername: null,
    twitterUsername: null
  });

  // Update social connections when session changes
  useEffect(() => {
    if (session) {
      if (session.provider === 'twitter') {
        setSocialConnections(prev => ({
          ...prev,
          twitterUsername: session.username,
          farcasterUsername: null // Clear the other one
        }));
      } else if (session.provider === 'farcaster') {
        setSocialConnections(prev => ({
          ...prev,
          farcasterUsername: session.username,
          twitterUsername: null // Clear the other one
        }));
      }
    } else {
      // No session, clear connections
      setSocialConnections({
        farcasterUsername: null,
        twitterUsername: null
      });
    }
  }, [session]);

  const handleSocialConnect = async (platform) => {
    setError('');
    setLoading(true);

    try {
      let result;
      
      if (platform === 'twitter') {
        result = await socialAuth.connectTwitter();
      } else if (platform === 'farcaster') {
        result = await socialAuth.connectFarcaster();
      }

      if (!result.success) {
        throw new Error(result.error || `Failed to connect to ${platform}`);
      }

      // The useEffect will handle updating the state when session changes
      console.log(`✅ ${platform} connected successfully`);
      
    } catch (error) {
      console.error(`❌ ${platform} connection failed:`, error);
      setError(`❌ Failed to connect to ${platform}. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  const handleDisconnect = async () => {
    try {
      await socialAuth.disconnect();
      setSocialConnections({
        farcasterUsername: null,
        twitterUsername: null
      });
    } catch (error) {
      console.error('❌ Disconnect failed:', error);
      setError('❌ Failed to disconnect. Please try again.');
    }
  };

  const handleSubmit = async () => {
    if (!email) {
      setError('⚠️ Email required to get notified!');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('⚠️ Please enter a valid email address!');
      return;
    }
    
    if (!socialConnections.farcasterUsername && !socialConnections.twitterUsername) {
      setError('⚠️ Connect at least one social account!');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Prepare data for backend - exact structure you requested
      const waitlistData = {
        forecasterUsername: socialConnections.farcasterUsername,
        twitterUsername: socialConnections.twitterUsername,
        email: email.trim()
      };

      // Send to backend API
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(waitlistData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Waitlist submission successful:', result);
      
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to submit to waitlist:', error);
      setError('⚠️ Failed to join waitlist. Please try again!');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
      setError('');
      // Don't reset social connections - they persist across modal opens
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fadeIn">
      <div className="relative max-w-lg w-full animate-scaleIn">
        {submitted ? (
          // ========================================
          // SUCCESS STATE
          // ========================================
          <div className="relative">
            {/* Massive Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/40 via-[#4c1d95]/50 to-[#7C3AED]/40 rounded-3xl blur-3xl opacity-80 animate-pulse-slow"></div>
            
            <div className="relative bg-gradient-to-b from-[#1a0f3a] via-black to-[#0a0a1f] rounded-3xl p-12 border-4 border-[#7C3AED] text-center shadow-2xl overflow-hidden">
              {/* Animated Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent animate-shimmer-fast"></div>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(124,58,237,0.3)_25%,transparent_25%,transparent_75%,rgba(124,58,237,0.3)_75%),linear-gradient(45deg,rgba(124,58,237,0.3)_25%,transparent_25%,transparent_75%,rgba(124,58,237,0.3)_75%)] bg-[size:40px_40px] bg-[position:0_0,20px_20px]"></div>
              </div>

              <div className="relative z-10">
                {/* Success Icon */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-[#7C3AED] rounded-full blur-3xl opacity-40 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-[#7C3AED] to-[#4c1d95] w-32 h-32 rounded-full flex items-center justify-center mx-auto border-4 border-white/20 shadow-2xl shadow-purple-500/60">
                    <svg className="w-16 h-16 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                {/* Success Message */}
                <h2 
                  className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight leading-none"
                  style={{ 
                    fontFamily: '"Bebas Neue", "Impact", sans-serif',
                    textShadow: '0 0 40px rgba(124,58,237,0.8)'
                  }}
                >
                  You're <span className="text-[#7C3AED]">In!</span> 🎉
                </h2>
                
                <p className="text-gray-400 text-lg mb-3">
                  We'll notify you at
                </p>
                <p className="text-[#7C3AED] font-black text-2xl mb-8" style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}>
                  {email}
                </p>

                {/* Connected Accounts */}
                <div className="bg-black/40 border-2 border-[#7C3AED]/30 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                  <p className="text-gray-400 text-sm mb-4 uppercase tracking-wider font-bold">Connected</p>
                  <div className="flex gap-3 justify-center flex-wrap">
                    {socialConnections.twitterUsername && (
                      <div className="flex items-center gap-2 bg-[#7C3AED]/20 text-white px-5 py-3 rounded-xl border-2 border-[#7C3AED]/40 backdrop-blur-sm">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                        <span className="font-black uppercase text-sm" style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}>@{socialConnections.twitterUsername} ✓</span>
                      </div>
                    )}
                    {socialConnections.farcasterUsername && (
                      <div className="flex items-center gap-2 bg-[#7C3AED]/20 text-white px-5 py-3 rounded-xl border-2 border-[#7C3AED]/40 backdrop-blur-sm">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                        </svg>
                        <span className="font-black uppercase text-sm" style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}>@{socialConnections.farcasterUsername} ✓</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Close Button */}
                <button 
                  onClick={handleClose}
                  className="bg-gradient-to-r from-[#7C3AED] to-[#4c1d95] text-white px-12 py-4 rounded-xl font-black uppercase tracking-wider hover:opacity-90 transition-all shadow-lg shadow-purple-500/50 text-xl border-2 border-white/20"
                  style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
                >
                  Let's Go! 🚀
                </button>
              </div>

              {/* Corner Glows */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#7C3AED]/30 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#4c1d95]/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        ) : (
          // ========================================
          // FORM STATE
          // ========================================
          <div className="relative">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/30 via-[#4c1d95]/40 to-[#7C3AED]/30 rounded-3xl blur-2xl opacity-60 animate-pulse-slow"></div>
            
            <div className="relative bg-gradient-to-b from-[#1a0f3a] via-black to-[#0a0a1f] rounded-3xl p-8 border-4 border-[#7C3AED]/50 shadow-2xl overflow-hidden">
              {/* Animated Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent animate-shimmer-fast"></div>
              
              {/* Background Grid */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.2)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 
                      className="text-4xl md:text-5xl font-black text-white mb-2 uppercase tracking-tight leading-none"
                      style={{ 
                        fontFamily: '"Bebas Neue", "Impact", sans-serif',
                        textShadow: '0 0 20px rgba(124,58,237,0.6)'
                      }}
                    >
                      Join <span className="text-[#7C3AED]">Beta</span>
                    </h2>
                    <p className="text-gray-400 text-sm font-semibold">Be first to challenge and stake 🎯</p>
                  </div>
                  <button 
                    onClick={handleClose}
                    className="text-gray-400 hover:text-white hover:rotate-90 transition-all duration-300 p-2"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Instructions */}
                <div className="bg-[#7C3AED]/10 border-2 border-[#7C3AED]/30 rounded-xl p-4 mb-6 backdrop-blur-sm">
                  <p className="text-white text-sm font-bold text-center">
                    ⚡ Connect <span className="text-[#7C3AED]">Twitter</span> or <span className="text-[#7C3AED]">Farcaster</span> (choose one) + Email
                  </p>
                </div>

                {/* Social Connect Buttons */}
                <div className="space-y-4 mb-6">
                  <button
                    type="button"
                    onClick={() => handleSocialConnect('twitter')}
                    disabled={loading}
                    className={`group relative w-full py-4 px-6 rounded-xl font-black uppercase tracking-wider transition-all flex items-center justify-center gap-3 border-2 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed ${
                      socialConnections.twitterUsername 
                        ? 'bg-gradient-to-r from-[#7C3AED] to-[#4c1d95] text-white border-[#7C3AED] shadow-lg shadow-purple-500/40' 
                        : 'bg-black/40 text-gray-300 border-[#7C3AED]/30 hover:border-[#7C3AED] hover:bg-[#7C3AED]/10'
                    }`}
                    style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
                  >
                    {/* Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-[#7C3AED]/0 via-[#7C3AED]/20 to-[#7C3AED]/0 transform ${socialConnections.twitterUsername ? 'translate-x-full' : '-translate-x-full'} group-hover:translate-x-full transition-transform duration-1000`}></div>
                    
                    <svg className="relative w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span className="relative text-lg">
                      {socialConnections.twitterUsername ? `✓ @${socialConnections.twitterUsername}` : 'Connect Twitter (X)'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSocialConnect('farcaster')}
                    disabled={loading}
                    className={`group relative w-full py-4 px-6 rounded-xl font-black uppercase tracking-wider transition-all flex items-center justify-center gap-3 border-2 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed ${
                      socialConnections.farcasterUsername 
                        ? 'bg-gradient-to-r from-[#7C3AED] to-[#4c1d95] text-white border-[#7C3AED] shadow-lg shadow-purple-500/40' 
                        : 'bg-black/40 text-gray-300 border-[#7C3AED]/30 hover:border-[#7C3AED] hover:bg-[#7C3AED]/10'
                    }`}
                    style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
                  >
                    {/* Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-[#7C3AED]/0 via-[#7C3AED]/20 to-[#7C3AED]/0 transform ${socialConnections.farcasterUsername ? 'translate-x-full' : '-translate-x-full'} group-hover:translate-x-full transition-transform duration-1000`}></div>
                    
                    <svg className="relative w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                    <span className="relative text-lg">
                      {socialConnections.farcasterUsername ? `✓ @${socialConnections.farcasterUsername}` : 'Connect Farcaster'}
                    </span>
                  </button>
                </div>

                {/* Divider */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-[#7C3AED]/30"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-black px-4 text-[#7C3AED] uppercase tracking-widest text-xs font-black" style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}>
                      + Your Email
                    </span>
                  </div>
                </div>

                {/* Email Input */}
                <div className="mb-6">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 bg-black/60 border-2 border-[#7C3AED]/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/20 transition-all font-semibold text-lg"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-6 p-4 bg-red-500/10 border-2 border-red-500 rounded-xl animate-shake backdrop-blur-sm">
                    <p className="text-red-400 text-sm text-center font-bold">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="group relative w-full py-5 px-6 bg-gradient-to-r from-[#7C3AED] to-[#4c1d95] text-white font-black uppercase tracking-wider rounded-xl transition-all shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 hover:scale-105 border-2 border-white/20 overflow-hidden text-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ fontFamily: '"Bebas Neue", "Impact", sans-serif' }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Joining...
                      </>
                    ) : (
                      <>
                        <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                        </svg>
                        Join Waitlist
                      </>
                    )}
                  </span>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </button>

                <p className="text-gray-500 text-xs text-center mt-4 font-semibold">
                  🔒 Your data is secure. We'll never spam you.
                </p>
              </div>

              {/* Corner Glows */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-[#7C3AED]/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#4c1d95]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

