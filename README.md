# Janna Patricia De Claro — Portfolio

An interactive portfolio for an Industrial Engineering graduate with experience in project coordination, process documentation, administrative support, and bookkeeping.

## Run locally

- Install dependencies: `npm install`
- Start the development server: `npm run dev`
- Check TypeScript: `npm run lint`
- Build for production: `npm run build`

Built with React, TypeScript, Vite, Tailwind CSS, and Lucide icons. The existing package manifest and entry point are retained.

## Experience

Soft ivory, navy, and champagne-gold styling, editorial typography, and restrained motion inspired by the supplied visual reference. The site includes:

- Service tabs with scope and links to relevant experience.
- SUNWARD Solar Website and STEC Solar Proposal Tool screenshot previews. Images open in labeled native dialogs with close, Escape, backdrop dismissal, and explicit focus restoration. STEC uses sample data; no live demo links are claimed.
- A concise internship contribution describing the cashier-workflow flowchart and its value as a reference for staff responsibilities, standardized procedures, and future work instructions. The original internal document is not included.
- Expandable professional roles, with procurement, budget, and delivery monitoring described as use of company-provided templates.
- A five-step proposed client approach covering what Janna does, what the client provides, and the expected deliverable at each stage.
- Text-only About Me, original skill groups, education and certification, academic research themes, and an invitation to volunteer opportunities.
- A topic-based inquiry form that opens an email draft for the visitor to review and send. No messages are sent by the site and no backend stores form contents.

## Content maintenance

Editable portfolio content lives in `src/portfolioData.ts`. Interactions and page composition live in `src/App.tsx`; styles are in `src/index.css`. Screenshot assets are in `public/projects/`.

Tabs support Left/Right/Home/End navigation. Reduced-motion preferences are respected. The page includes visible keyboard focus, a skip link, accessible labels, native disclosure controls, and responsive layouts.

Only add a resume download after a real public PDF is supplied. The current portfolio states that a resume is available upon request. Keep project status, dates, claims, and contact details aligned with the owner's confirmed information.
