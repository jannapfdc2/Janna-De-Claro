# Janna Patricia De Claro — Portfolio

A portfolio focused on remote virtual assistant and freelance administrative support, built with React, TypeScript, Vite, Tailwind CSS, Motion, and Lucide icons.

## Content

- Remote support services grounded in actual experience: administrative support, project coordination, bookkeeping support, and process documentation.
- Professional work history retains the actual job titles from the supplied resume. Target VA roles are presented as opportunities, with no invented clients, results, or availability.
- Tools are grouped by professional use, personal projects, and ongoing learning. The solar project identifies workflow planning and AI-assisted development as the contribution.
- Clear services, contact, and resume actions, plus education and certification.
- Part-time Bookkeeper dates: **Oct 2024–Apr 2025**, corrected in both the page and the downloadable resume.
- One featured project: **Solar Website & Proposal Builder**, with labeled **Redesign** and **Original design** previews from the supplied source ZIPs. Both 16:9 thumbnails open their full screenshot. The Sunward redesign remains first; the original STEC website is included alongside it. No public live demo or project repository is linked.

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
- `public/projects/solar-original.jpg`: screenshot of the original STEC solar website's supplied read-only demo, displayed at 16:9.

The solar project is a concept preview. The portfolio does not claim a deployed demo or measured client outcomes.
