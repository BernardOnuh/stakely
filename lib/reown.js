// ============================================
// lib/oauth.js - Real OAuth Implementation
// ============================================
import { signIn, signOut, getSession } from 'next-auth/react'

export const socialAuth = {
  // Real Twitter OAuth using NextAuth
  connectTwitter: async () => {
    try {
      console.log('🐦 Initiating Twitter OAuth...');
      
      const result = await signIn('twitter', { 
        redirect: false,
        callbackUrl: window.location.origin 
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      // Get the session to retrieve user data
      const session = await getSession();
      
      if (session?.provider === 'twitter' && session?.username) {
        console.log('🐦 Twitter connected:', session.username);
        return { 
          success: true, 
          platform: 'twitter',
          username: session.username 
        };
      }

      throw new Error('Failed to get Twitter user data');
    } catch (error) {
      console.error('❌ Twitter OAuth failed:', error);
      return { 
        success: false, 
        error: error.message || 'Twitter authentication failed' 
      };
    }
  },

  // Real Farcaster OAuth using NextAuth
  connectFarcaster: async () => {
    try {
      console.log('🟣 Initiating Farcaster OAuth...');
      
      const result = await signIn('farcaster', { 
        redirect: false,
        callbackUrl: window.location.origin 
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      // Get the session to retrieve user data
      const session = await getSession();
      
      if (session?.provider === 'farcaster' && session?.username) {
        console.log('🟣 Farcaster connected:', session.username);
        return { 
          success: true, 
          platform: 'farcaster',
          username: session.username 
        };
      }

      throw new Error('Failed to get Farcaster user data');
    } catch (error) {
      console.error('❌ Farcaster OAuth failed:', error);
      return { 
        success: false, 
        error: error.message || 'Farcaster authentication failed' 
      };
    }
  },

  // Disconnect social accounts
  disconnect: async (platform) => {
    try {
      await signOut({ redirect: false });
      console.log(`❌ Disconnected from ${platform}`);
      return { success: true };
    } catch (error) {
      console.error('❌ Disconnect failed:', error);
      return { success: false, error: error.message };
    }
  },

  // Get current session
  getCurrentSession: async () => {
    try {
      const session = await getSession();
      return session;
    } catch (error) {
      console.error('❌ Failed to get session:', error);
      return null;
    }
  }
};

// Alternative implementation using direct OAuth flows (more complex but more control)
export const directOAuth = {
  // Direct Twitter OAuth 2.0 implementation
  connectTwitterDirect: async () => {
    try {
      // Generate Twitter OAuth URL
      const clientId = process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID;
      const redirectUri = encodeURIComponent(`${window.location.origin}/api/auth/callback/twitter`);
      const state = Math.random().toString(36).substring(2, 15);
      const codeChallenge = 'challenge'; // In production, generate proper PKCE challenge
      
      const twitterAuthUrl = `https://twitter.com/i/oauth2/authorize?` +
        `response_type=code&` +
        `client_id=${clientId}&` +
        `redirect_uri=${redirectUri}&` +
        `scope=tweet.read%20users.read&` +
        `state=${state}&` +
        `code_challenge=${codeChallenge}&` +
        `code_challenge_method=plain`;

      // Open OAuth popup
      const popup = window.open(
        twitterAuthUrl,
        'twitter-oauth',
        'width=500,height=600,scrollbars=yes,resizable=yes'
      );

      // Listen for OAuth callback
      return new Promise((resolve, reject) => {
        const checkClosed = setInterval(() => {
          if (popup.closed) {
            clearInterval(checkClosed);
            reject(new Error('OAuth popup was closed'));
          }
        }, 1000);

        // Listen for message from popup
        const messageListener = (event) => {
          if (event.origin !== window.location.origin) return;
          
          if (event.data.type === 'TWITTER_OAUTH_SUCCESS') {
            clearInterval(checkClosed);
            window.removeEventListener('message', messageListener);
            popup.close();
            resolve({
              success: true,
              platform: 'twitter',
              username: event.data.username
            });
          } else if (event.data.type === 'TWITTER_OAUTH_ERROR') {
            clearInterval(checkClosed);
            window.removeEventListener('message', messageListener);
            popup.close();
            reject(new Error(event.data.error));
          }
        };

        window.addEventListener('message', messageListener);
      });
    } catch (error) {
      console.error('❌ Direct Twitter OAuth failed:', error);
      return { success: false, error: error.message };
    }
  },

  // Direct Farcaster OAuth implementation
  connectFarcasterDirect: async () => {
    try {
      // Farcaster uses Sign In With Neynar (SIWN) or similar
      const neynarApiKey = process.env.NEXT_PUBLIC_NEYNAR_API_KEY;
      
      if (!neynarApiKey) {
        throw new Error('Neynar API key not configured');
      }

      // For Farcaster, you'd typically use their SDK or Neynar API
      // This is a simplified example - check Farcaster docs for latest implementation
      const response = await fetch('/api/auth/farcaster/initiate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { authUrl } = await response.json();

      // Open Farcaster auth popup
      const popup = window.open(
        authUrl,
        'farcaster-oauth',
        'width=500,height=600,scrollbars=yes,resizable=yes'
      );

      return new Promise((resolve, reject) => {
        const checkClosed = setInterval(() => {
          if (popup.closed) {
            clearInterval(checkClosed);
            reject(new Error('OAuth popup was closed'));
          }
        }, 1000);

        const messageListener = (event) => {
          if (event.origin !== window.location.origin) return;
          
          if (event.data.type === 'FARCASTER_OAUTH_SUCCESS') {
            clearInterval(checkClosed);
            window.removeEventListener('message', messageListener);
            popup.close();
            resolve({
              success: true,
              platform: 'farcaster',
              username: event.data.username
            });
          } else if (event.data.type === 'FARCASTER_OAUTH_ERROR') {
            clearInterval(checkClosed);
            window.removeEventListener('message', messageListener);
            popup.close();
            reject(new Error(event.data.error));
          }
        };

        window.addEventListener('message', messageListener);
      });
    } catch (error) {
      console.error('❌ Direct Farcaster OAuth failed:', error);
      return { success: false, error: error.message };
    }
  }
};