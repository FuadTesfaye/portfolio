# Fuad Tesfaye — Portfolio

An editorial portfolio designed in the retro-technical digital craftsman aesthetic, inspired by Jacob Leech. Built with **Next.js 16**, **Tailwind CSS**, and **Bun**.

## Highlights

- **Aesthetic**: Warm parchment editorial design (`#f2d99b`), high-contrast typography, and isometric architectural technical drawings.
- **Typography**: High-impact scale with [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (headings, giant marquee, drop caps) and [EB Garamond](https://fonts.google.com/specimen/EB+Garamond) (editorial body copy) loaded via Next.js Font Optimization.
- **Dark Mode**: Complete light and dark editorial theme support with system OS preference detection and smooth toggling.
- **Components**: Fully modular, type-safe React components with typed content in `src/data/portfolioData.ts`.
- **Performance**: Zero-runtime CSS variables, static prerendering, and optimized SVGs.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- **Runtime & Package Manager**: [Bun](https://bun.sh)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Language**: TypeScript

## Getting Started

Run the development server:

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

Build for production:

```bash
bun run build
bun run start
```
