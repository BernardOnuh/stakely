// ============================================
// pages/api/waitlist.js - Waitlist API Endpoint
// ============================================

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { forecasterUsername, twitterUsername, email } = req.body;

    // Validate required fields
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    if (!forecasterUsername && !twitterUsername) {
      return res.status(400).json({ error: 'At least one social account (Twitter or Farcaster) is required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Prepare the waitlist entry
    const waitlistEntry = {
      email: email.toLowerCase().trim(),
      forecasterUsername: forecasterUsername || null,
      twitterUsername: twitterUsername || null,
      timestamp: new Date().toISOString(),
      userAgent: req.headers['user-agent'] || '',
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown'
    };

    // Here you would typically save to your database
    // For now, we'll just log it and simulate success
    console.log('📧 New Waitlist Entry:', JSON.stringify(waitlistEntry, null, 2));

    // TODO: Replace this with your actual database save logic
    // Examples:
    // - Save to MongoDB
    // - Save to PostgreSQL
    // - Save to Firebase
    // - Send to external service like Mailchimp, ConvertKit, etc.
    
    // Simulate saving to database
    await new Promise(resolve => setTimeout(resolve, 500));

    // You might also want to:
    // 1. Send confirmation email to user
    // 2. Send notification to your team
    // 3. Add to email marketing list
    // 4. Send to analytics service

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Successfully joined the waitlist!',
      data: {
        email: waitlistEntry.email,
        forecasterUsername: waitlistEntry.forecasterUsername,
        twitterUsername: waitlistEntry.twitterUsername,
        timestamp: waitlistEntry.timestamp
      }
    });

  } catch (error) {
    console.error('❌ Waitlist API Error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Internal server error. Please try again later.',
      ...(process.env.NODE_ENV === 'development' && { details: error.message })
    });
  }
}