# Repository guidance

## Project overview

Janna De Claro's single-page professional portfolio uses React 19, TypeScript 5.8, Vite 6, Tailwind CSS 4, and Lucide icons. Navigation uses hash anchors; state is local React hooks. Contact creates a `mailto:` draft; there is no application backend.

## Project structure

- `src/main.tsx`: StrictMode entry and global CSS import.
- `src/App.tsx`: navigation, reusable Tabs/SectionTitle, hero, services, projects, InternshipContribution (`#cashier-workflow`), experience, approach, about, skills, education/research, and contact.
- `src/portfolioData.ts`: experience, services, skills, project metadata, monitoring, client steps, research, and inquiry topics.
- `src/ProjectPreview.tsx`: clickable live previews, accessible expanded dialogs, and full-website links; offscreen previews unload.
- `src/ProjectWalkthrough.tsx`: shared Suweco/Solar scroll stories; content in `portfolioData.ts`, sticky desktop diagram, inline mobile diagrams, and anchor shortcuts. Keep project cards concise and intended benefits distinct from measured results.
- `src/AnimatedWorkflow.tsx`: scroll-driven five-stage IE methodology illustration.
- `src/InternshipFlowchart.tsx`: four-page native dialog gallery, wrapping Previous/Next buttons, arrow-key navigation, dismissal, and PDF link.
- `src/index.css`: theme tokens, semantic classes, responsive layouts, motion, and gallery styles.
- `public/projects/`: legacy screenshots. `public/internship/`: four `cashier-workflow-page-N.png` images and `cashier-management-workflow.pdf`, opened in a new tab.
- `index.html`: metadata/root. `package.json`: scripts/dependencies. `vite.config.ts` / `tsconfig.json`: tooling; `@` resolves to repository root.

## Design guidelines

Reuse ivory `#fbf9f5`, navy `#1c2841`, champagne `#d5b780`, and existing CSS variables. DM Sans serves body text; Playfair Display serves headings. Preserve the 1180px container, editorial spacing, grid/flex layouts, and 1050/800/540px breakpoints (gallery: 600px). Retain visible focus, reduced-motion support, and mobile navigation.

Prioritize useful interactivity: tabs, expandable contributions, flowchart galleries, and project walkthroughs where appropriate. Interactions should help visitors understand the work, support keyboard and touch, and stay lightweight.

## Coding standards

Use function components, typed props/events, hooks with cleanup, and existing local formatting. Keep repeatable content in `portfolioData.ts`. Extend semantic CSS classes despite Tailwind availability. Preserve anchor IDs, keyboard tabs, native details/dialogs, labels, and focus behavior. Keep personal-project claims accurate; resume remains available upon request.

## Token optimization

Start from this map; use targeted `rg` searches and relevant file ranges. Exclude `node_modules`, `.git`, `dist`, generated files, and lockfile contents unless necessary. Avoid repeated reads, broad scans, and unrelated refactors. Make minimal, targeted changes. Prefer current source when README descriptions conflict.

## Testing

`npm run lint` runs TypeScript checking, not ESLint. Use it for TS/TSX changes; run `npm run build` for integration changes. No test script exists. `npm run dev` serves port 3000. For UI changes, check affected interactions, mobile layout, and keyboard access; walkthrough changes need scroll in both directions and anchor checks; gallery changes need pagination, dismissal, and PDF-link checks. Documentation-only edits need content/diff review.

## Git safety

Inspect status first. Preserve uncommitted/untracked work. Never reset, delete, or overwrite unrelated work; never commit, push, or deploy without permission.

## Privacy

Never publish internal company documents or confidential information without explicit approval. Existing files in `public/` do not establish approval. Keep secrets and private data out of source, assets, and logs.
