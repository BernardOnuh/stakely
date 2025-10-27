// ============================================
// pages/_app.js
// Updated with Reown Provider
// ============================================
import "@/styles/globals.css";
import { ReownProvider } from '@/config/reown';

export default function App({ Component, pageProps }) {
  return (
    <ReownProvider>
      <Component {...pageProps} />
    </ReownProvider>
  );
}

// ============================================
// That's it! Your entire app now has access to:
// - Farcaster login
// - Twitter login  
// - Wallet connections
// - useAccount, useDisconnect, etc. hooks
// ============================================