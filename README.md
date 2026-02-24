# Neil Allen T. Cena Portfolio

Mobile-first, recruiter-friendly portfolio website built with Vue 3 and Firebase.

## Stack

- Vue 3 + Vite
- Vue Router + Pinia
- Tailwind CSS (theme tokens with royal blue default)
- Firebase Firestore (content source)
- Firebase Hosting (deployment)

## Features

- Clean, professional UI with subtle personality
- Mobile-first responsive layout and sticky navigation
- Recruiter-first sections: About, Experience, Skills, Projects, Education, Contact
- Firestore-backed content (detached from deployment)
- Graceful fallback content when Firestore is unavailable
- Projects section prepared for future additions

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Copy env template:

```bash
cp .env.example .env
# Windows PowerShell: Copy-Item .env.example .env
```

3. Fill `.env` with your Firebase web config and service-account values.

4. Run dev server:

```bash
npm run dev
```

## Firestore Data Model

Collections used by the app:

- `siteConfig/main`
- `profile/main`
- `experiences/{id}`
- `skills/{id}`
- `projects/{id}`
- `education/{id}`

All list collections support an `order` field for sorting.

## Seeding Firestore

The repository includes a seed script that inserts initial resume-based content.

```bash
npm run seed:firestore
```

Required env vars for the seed script:

- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

## Firebase Setup

1. Create a Firebase project.
2. Enable Firestore (production mode recommended).
3. Update `.firebaserc` with your project id.
4. Set Firestore rules and indexes:

```bash
npx firebase deploy --only firestore:rules,firestore:indexes
```

## Deploy

Build and deploy the static app:

```bash
npm run build
npx firebase deploy --only hosting
```

## Theme Customization

Palette is centralized for easy swapping:

- CSS variables in `src/assets/main.css`
- Tailwind semantic mappings in `tailwind.config.js`

Default brand color starts at royal blue (`primary-500`).
