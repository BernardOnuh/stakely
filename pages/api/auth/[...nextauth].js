// ============================================
// pages/api/auth/[...nextauth].js - NextAuth Configuration
// ============================================
import NextAuth from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'

export default NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0", // Use Twitter API v2
    }),
    // Custom Farcaster provider
    {
      id: "farcaster",
      name: "Farcaster",
      type: "oauth",
      authorization: {
        url: "https://warpcast.com/~/siwn",
        params: {
          scope: "read",
          response_type: "code",
        },
      },
      token: "https://api.warpcast.com/v1/oauth/token",
      userinfo: "https://api.warpcast.com/v1/me",
      clientId: process.env.FARCASTER_CLIENT_ID,
      clientSecret: process.env.FARCASTER_CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.result?.user?.fid,
          name: profile.result?.user?.displayName,
          username: profile.result?.user?.username,
          image: profile.result?.user?.pfp?.url,
        }
      },
    },
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      // Store the OAuth account info in the token
      if (account) {
        token.provider = account.provider
        token.username = profile?.username || profile?.screen_name
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client
      session.provider = token.provider
      session.username = token.username
      return session
    },
  },
  pages: {
    // Custom sign-in page (optional)
    // signIn: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
})