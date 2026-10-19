# FitFlow — PT Workout Assistant

A focused demo for preparing a workout, previewing the member experience, and sharing it as a self-contained link. All people and workout data are fictional. There are no accounts, database, or backend service.

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Select a member, optionally choose a template, add or remove exercises, adjust sets, reps and notes, then preview and share. Templates replace the current exercise selection and remain editable. The starter workout is there to make the demo immediately usable.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Deploy the demo

Deploy this repository to a Next.js-compatible host such as Vercel, using the default Next.js build settings (`npm install` and `npm run build`). Alternatively, run `npm run build` followed by `npm start` on a publicly reachable Node.js host. No environment variables or database are required. Generate links from the deployed URL: **localhost links refer to the device opening them and will not work across devices**.

## How sharing works

The URL contains a versioned, URL-safe encoded payload with the fictional member ID, workout title, exercise IDs, sets, reps and trainer notes. Exercise details are looked up from the local library; the link does not depend on local storage. The app validates the shape, member and exercise IDs, counts, field lengths and encoded size when creating and opening a link. Invalid or outdated links show an error. The limit is 20 exercises and 6,000 encoded characters. Anyone with a link can read its contents, so do not use it for real personal or sensitive information. URL length limits can vary across messaging apps and hosts.

## Project structure

- `app/` — trainer route, shared workout route, global styles and layout
- `components/` — builder, member view, branding and shadcn-style UI primitives
- `lib/data.ts` — fictional members, trainer, 25 exercises and four templates
- `lib/workout.ts` — compact sharing format and validation

## Demo limitations

- Nothing is saved between sessions; generated links preserve a snapshot, not a live workout. Editing the builder after sharing requires a new link.
- The library is fixed in code. Video links open verified third-party demonstrations in a new tab where available; other exercises display a labeled placeholder. External media can change or become unavailable.
- Sets and reps are sample defaults, not individualized exercise prescriptions.
- Clipboard access typically requires HTTPS (or localhost). If copying is unavailable, select the link manually.
- This prototype deliberately excludes authentication, progress tracking, nutrition, scheduling and other gym-management features.
