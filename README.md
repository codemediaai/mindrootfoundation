# Mindroot Foundation

**Memory as Artifact** — Preserving family memory across generations through artifact-centered archival systems.

Includes **MindPrint**, a free service: a daily printed page composed fresh each morning with your schedule, focus, and nothing else.

## Stack

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- Firebase (Auth, Firestore, Hosting, Cloud Functions)
- Vertex AI (stateless page generation)

## Development

```bash
cp .env.example .env.local
# Fill in your Firebase config values
npm install
npm run dev
```

## Deploy

See [DEPLOY.md](./DEPLOY.md) for full deployment instructions.

```bash
npm run build
firebase deploy
```
