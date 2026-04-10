# Deploy Mindroot Foundation + MindPrint

## Prerequisites

- Node.js 18+
- Firebase CLI: `npm install -g firebase-tools`

## 1. Firebase Console Setup

Go to [console.firebase.google.com](https://console.firebase.google.com)

1. **Create a project** (or select existing)
2. **Authentication** → Get started → Enable:
   - Email/Password
   - Google (set support email)
3. **Firestore Database** → Create database → Start in production mode → us-central1
4. **Project Settings** → General → Your apps → Add web app → Copy config values

## 2. Configure the Project

```bash
# Clone (or use your existing local copy)
git clone https://github.com/codemediaai/mindrootfoundation.git
cd mindrootfoundation

# Create your env file
cp .env.example .env.local
# Edit .env.local with your Firebase config values from step 1.4
```

Edit `.firebaserc` — replace `YOUR_FIREBASE_PROJECT_ID` with your actual project ID.

## 3. Deploy

```bash
# Install dependencies
npm install

# Install function dependencies
cd functions && npm install && cd ..

# Login to Firebase
firebase login

# Build the frontend
npm run build

# Deploy everything (hosting + functions + firestore rules)
firebase deploy
```

Your site is live. Firebase will print the URL.

## 4. Google Calendar API (for calendar sync)

1. Go to [Google Cloud Console](https://console.cloud.google.com) → APIs & Services
2. Enable **Google Calendar API**
3. OAuth consent screen → Add `calendar.readonly` scope
4. The app already requests this scope during Google sign-in

## What's Running

| Service | What it does |
|---------|-------------|
| Firebase Hosting | Serves the React app (landing page + dashboard) |
| Firebase Auth | Email/password + Google sign-in |
| Firestore | User profiles + MindPrint config |
| Cloud Function | `generateDailyPage` — stateless AI page composition |

## Updating

```bash
npm run build
firebase deploy --only hosting    # frontend only
firebase deploy --only functions  # backend only
firebase deploy                   # everything
```
