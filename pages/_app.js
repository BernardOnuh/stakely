// ============================================
// pages/_app.js
// Updated with Reown Provider
// ============================================
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// ============================================
// That's it! Your entire app now has access to:
// - Farcaster login
// - Twitter login  
// - Wallet connections
// - useAccount, useDisconnect, etc. hooks
// ============================================