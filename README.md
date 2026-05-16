# Autoreg Docs

A technical documentation website for **Autoreg** (AI test regression agent), inspired by modern docs experiences such as LangChain's docs layout.

## Stack

- Next.js
- Nextra (`nextra-theme-docs`)
- MDX pages in `pages/`
- Vercel deployment

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build and run production mode

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push code to GitHub.
2. Import repo in Vercel.
3. Leave framework as **Next.js**.
4. Deploy.

`vercel.json` is included for explicit build settings.
