# 🎯 Stakely - Reown Social Authentication Setup

## 🚀 Quick Setup Instructions

### 1. Get Reown Project ID
1. Go to [Reown Cloud](https://cloud.reown.com)
2. Create a new project
3. Copy your Project ID
4. Update `.env.local` with your project ID:
   ```
   NEXT_PUBLIC_REOWN_PROJECT_ID=your_project_id_here
   ```

### 2. Install Dependencies ✅ 
Already installed:
- `@reown/appkit`
- `@reown/appkit-adapter-wagmi` 
- `wagmi`
- `viem`
- `@tanstack/react-query`

### 3. Social Authentication Flow
- **Twitter (X)**: Users click "Connect Twitter" → Reown modal opens → Authentication
- **Farcaster**: Users click "Connect Farcaster" → Reown modal opens → Authentication
- **Email**: Required field for waitlist notifications
- **Backend**: Form submits to `/api/waitlist` endpoint

### 4. Files Created/Modified
- ✅ `lib/reown.js` - Reown configuration
- ✅ `pages/_app.js` - Added Wagmi providers  
- ✅ `components/modals/WaitlistModal.jsx` - Updated with Reown integration
- ✅ `pages/api/waitlist.js` - Backend API endpoint
- ✅ `.env.local` - Environment variables template

### 5. Run the Project
```bash
npm run dev
```
Your app will be running at `http://localhost:3000`

### 6. Testing Checklist
- [ ] Click "Connect Twitter" - Reown modal should open
- [ ] Click "Connect Farcaster" - Reown modal should open  
- [ ] Enter email and submit - Should save to backend
- [ ] Check browser console for waitlist data
- [ ] Check network tab for API calls

### 7. Next Steps (Optional)
- Replace the mock database logging in `/api/waitlist.js` with real database
- Add email confirmation system
- Add analytics tracking
- Style Reown modal to match your theme

## 🔧 Technical Details

### Reown Configuration
```javascript
// Supports Twitter (X) and Farcaster social auth
socials: ['x', 'farcaster']
```

### Waitlist Data Structure
```javascript
{
  email: "user@example.com",
  socialAccounts: {
    twitter: true,
    farcaster: false
  },
  walletAddress: "0x...", // if connected
  timestamp: "2025-10-22T..."
}
```

### API Endpoint
- **URL**: `POST /api/waitlist`
- **Validation**: Email format, social account requirement
- **Response**: Success/error with data

---

🎮 **Your gaming-style waitlist modal is ready to rock!** 🚀