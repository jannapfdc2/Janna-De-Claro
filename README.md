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
- Suweco Energy Portal (a proposed company system) and Solar Solutions (a personal project developed with Claude AI assistance). Each project has keyboard-accessible Context, My contribution, and IE approach tabs. Click a live website preview to open an interactive dialog, then choose **View full website** to open the original site in a new tab. Previews unload offscreen; dialogs support close, Escape, backdrop dismissal, and focus restoration. Suweco's monitoring workspace requires sign-in; the portfolio does not claim company adoption or measured operational improvements.
- An internship contribution explaining the cashier-workflow flowchart, process mapping, role handoffs, and its purpose as a reference for standardized procedures and future work instructions. The gallery includes four page images and a PDF link; publication of company materials requires explicit approval.
- Expandable professional roles, with procurement, budget, and delivery monitoring described as use of company-provided templates.
- A five-step proposed client approach covering what Janna does, what the client provides, and the expected deliverable at each stage.
- Text-only About Me, original skill groups, education and certification, academic research themes, and an invitation to volunteer opportunities.
- A topic-based inquiry form that opens an email draft for the visitor to review and send. No messages are sent by the site and no backend stores form contents.

## Content maintenance

Editable portfolio content and project stories live in `src/portfolioData.ts`. Page composition lives in `src/App.tsx`, website previews in `src/ProjectPreview.tsx`, and styles in `src/index.css`. The flowchart gallery lives in `src/InternshipFlowchart.tsx`, with assets in `public/internship/`. Legacy project screenshots remain in `public/projects/` and are no longer displayed.

Tabs support Left/Right/Home/End navigation. Reduced-motion preferences are respected. The page includes visible keyboard focus, a skip link, accessible labels, native disclosure controls, and responsive layouts.

Only add a resume download after a real public PDF is supplied. The current portfolio states that a resume is available upon request. Keep project status, dates, claims, and contact details aligned with the owner's confirmed information.
