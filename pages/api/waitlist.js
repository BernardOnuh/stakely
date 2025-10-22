// ============================================
// pages/api/waitlist.js - Waitlist API Endpoint
// ============================================

let waitlistCounter = 0; // Simple counter for position tracking
const waitlistEntries = new Map(); // Simple in-memory storage

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      error: 'Method not allowed' 
    });
  }

  try {
    const { forecasterUsername, twitterUsername, email } = req.body;
    const errors = [];

    // Validate required fields
    if (!email) {
      errors.push('Email is required');
    }

    if (!forecasterUsername && !twitterUsername) {
      errors.push('Either Farcaster username or Twitter username is required');
    }

    // Validate email format
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errors.push('Invalid email format');
      }
    }

    // Return validation errors
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check for duplicate email
    if (waitlistEntries.has(normalizedEmail)) {
      return res.status(409).json({
        success: false,
        message: 'Email already exists in waitlist'
      });
    }

    // Generate unique ID and position
    const id = `${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    waitlistCounter++;
    const position = waitlistCounter;

    // Prepare the waitlist entry
    const waitlistEntry = {
      id,
      email: normalizedEmail,
      forecasterUsername: forecasterUsername || null,
      twitterUsername: twitterUsername || null,
      position,
      timestamp: new Date().toISOString(),
      userAgent: req.headers['user-agent'] || '',
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown'
    };

    // Store the entry (in production, save to your database)
    waitlistEntries.set(normalizedEmail, waitlistEntry);
    
    console.log('📧 New Waitlist Entry:', JSON.stringify(waitlistEntry, null, 2));

    // TODO: Replace this with your actual database save logic
    // Examples:
    // - Save to MongoDB
    // - Save to PostgreSQL
    // - Save to Firebase
    // - Send to external service like Mailchimp, ConvertKit, etc.
    
    // Simulate saving to database
    await new Promise(resolve => setTimeout(resolve, 200));

    // You might also want to:
    // 1. Send confirmation email to user
    // 2. Send notification to your team
    // 3. Add to email marketing list
    // 4. Send to analytics service

    // Return success response with proper format
    res.status(201).json({
      success: true,
      message: 'Successfully joined the waitlist!',
      id: waitlistEntry.id,
      position: waitlistEntry.position
    });

  } catch (error) {
    console.error('❌ Waitlist API Error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      ...(process.env.NODE_ENV === 'development' && { details: error.message })
    });
  }
}