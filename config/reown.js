// ============================================
// config/reown.js
// Reown (WalletConnect) Configuration
// ============================================

import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet, polygon, arbitrum, base } from '@reown/appkit/networks';

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.reown.com
const projectId = '8acf088ac7952cff06befd7c018f4733';

if (!projectId) {
  throw new Error('NEXT_PUBLIC_REOWN_PROJECT_ID is not set');
}

// 2. Set up Wagmi Adapter
const networks = [mainnet, polygon, arbitrum, base];

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true, // Enable if using Next.js SSR
});

// 3. Create the AppKit modal instance
const metadata = {
  name: 'Play Stakely',
  description: 'High-stakes gaming platform with crypto rewards',
  url: 'https://playstakely.com', // Update with your actual URL
  icons: ['https://playstakely.com/logo.png'], // Update with your actual logo
};

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    // Enable social login features
    socials: ['farcaster', 'twitter'],
    email: true, // Optional: Enable email login
    analytics: true, // Optional: Enable analytics
  },
  themeMode: 'dark', // Match your gaming theme
  themeVariables: {
    '--w3m-color-mix': '#7C3AED', // Purple brand color
    '--w3m-color-mix-strength': 40,
    '--w3m-accent': '#7C3AED',
    '--w3m-border-radius-master': '8px',
  },
});

export { wagmiAdapter, queryClient };

// ============================================
// Export the config for use in _app.js or layout
// ============================================
export function ReownProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}