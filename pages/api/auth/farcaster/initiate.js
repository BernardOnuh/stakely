// ============================================
// pages/api/auth/farcaster/initiate.js - Farcaster OAuth Initiation
// ============================================

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // For Farcaster, you would typically use Sign In With Neynar (SIWN)
    // or their official SDK. This is a simplified implementation.
    
    const clientId = process.env.FARCASTER_CLIENT_ID;
    const redirectUri = `${process.env.NEXTAUTH_URL}/api/auth/callback/farcaster`;
    const state = Math.random().toString(36).substring(2, 15);
    
    // Store state in session or database for verification
    // In production, use proper state management
    
    const authUrl = `https://warpcast.com/~/siwn?` +
      `client_id=${clientId}&` +
      `redirect_uri=${encodeURIComponent(redirectUri)}&` +
      `response_type=code&` +
      `state=${state}`;

    res.status(200).json({ authUrl });
  } catch (error) {
    console.error('❌ Farcaster OAuth initiation failed:', error);
    res.status(500).json({ error: 'Failed to initiate Farcaster OAuth' });
  }
}