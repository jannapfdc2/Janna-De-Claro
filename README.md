# Janna Patricia De Claro — Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, Tailwind CSS, Motion, and Lucide icons.

## Content

- Professional profile, work history, skills, education, and contact information from the supplied resume.
- Part-time Bookkeeper dates: **Oct 2024–Apr 2025**, corrected in both the page and the downloadable resume.
- One featured project: **Solar Panel Business Website Redesign**, based on the supplied redesign ZIP. The 16:9 thumbnail is a screenshot of that design; clicking it opens the full preview image. No public live demo or project repository is available yet.

## Development

Use Node.js 22.12+ and npm.

```sh
npm ci
npm run dev
```

## Validation and build

```sh
npm run typecheck
npm run build
npm run preview
```

The build includes TypeScript checking and outputs a static site in `dist/`. No API key, server, or environment variables are required. A package lock is included for repeatable installs.

## Hosting

Publish the contents of `dist/` using a static host. Relative asset paths support hosting at a domain root or a repository subpath, such as `/Janna-De-Claro/`. Serve a directory URL with its trailing slash, as standard static hosts do. Google Fonts supplies Inter and Playfair Display, with local fallback fonts if unavailable.

## Public assets

- `public/Janna-Patricia-De-Claro-Resume.pdf`: supplied resume with its Bookkeeper date corrected, retaining the original layout.
- `public/projects/solar-redesign.jpg`: screenshot of the supplied Sunward solar redesign, displayed at 16:9 and stored locally for reliable display.

The solar project is a concept preview. The portfolio does not claim a deployed demo or measured client outcomes.
