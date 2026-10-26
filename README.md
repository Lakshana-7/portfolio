# Lakshana A – Recruiter-Facing Portfolio Website

A dark, animated, high-performance React portfolio for **Lakshana A**, B.Tech student in Artificial Intelligence and Data Science at Rajalakshmi Institute of Technology.

Built with **React 18**, **Vite**, **Tailwind CSS**, and **Framer Motion**, adhering strictly to the design specification.

---

## 🌟 Architecture & Features

- **Theme & Design Tokens**: Near-black navy (`#090A12`), surface (`#101220`), surface-raised (`#171A2B`), and violet-to-blue gradient accent (`#7C5CFF` to `#3B82F6`).
- **Typography**: 
  - Headlines: *Barlow Condensed* (bold uppercase)
  - Accent Words: *Instrument Serif* (italic gradient word, exactly one per headline)
  - Body: *Inter*
  - Monospace Metadata: *JetBrains Mono*
- **7 Numbered Sections**:
  1. `01 About`: 6-photo polaroid auto-rotating card stack (every 3.5s), large serif intro with amber highlight, and 3 animated counters.
  2. `02 Experience`: 4 internships only (NIC, NIWE, CodeAlpha, RD Infro). Large framed slide with 4-second cycling photos, thumbnail strip, amber role badge, key highlights, and lightbox certificate trigger.
  3. `03 Projects`: 4 featured project cards with cover image (16:10), hover zoom, accent glow, and deep case study navigation.
  4. `04 Certificates`: Filterable credential grid (All, Internship, Course, Hackathon, Events) with instant modal lightbox enlargement and verification links.
  5. `05 Skills`: Categorized skill chips (All, Languages, Frontend, Backend, AI & Data, Tools) with animated filter transitions.
  6. `06 Gallery`: Dual-row marquee scrolling in opposite directions at 50s loops with edge gradient fade, pause-on-hover, and full-screen lightbox.
  7. `07 Contact`: "Open to opportunities" card with "Start a conversation" mailto CTA, plus 2x2 grid (Email with copy toast, LinkedIn, GitHub, and Phone).
- **Project Case Study Pages (`/projects/:slug`)**:
  - Independent route for each project (`hypefiltr-ai`, `constellia`, `water-borne-disease-platform`, `plant-disease-prediction`).
  - Overview, Problem, Key Features cards, Architecture Flow, Tech Stack, Screenshot Gallery, and Outcomes.
  - Previous and Next project navigation.
  - Back link returning smoothly to Home.
- **Strict Brand Rules Enforced**:
  - GitHub icon appears **only** in the Contact section and Footer, never in the Navbar or Hero.
  - LinkedIn icon is present in Navbar pill, Hero, Contact, and Footer.
  - Resume button downloads `/resume/Lakshana_A_Resume.pdf`.
- **Cosmic & Interactive Enhancements**:
  - StarField canvas background (interactive constellation links, brighter in hero).
  - Constellation "LA" intro on first visit (sessionStorage, skippable).
  - Cursor glow tracking pointer on desktop.
  - Scroll progress bar at top (2px gradient).
  - Floating back-to-top button.
  - Themed 404 "Lost in space" page.
  - Full `prefers-reduced-motion` compliance.

---

## 📁 Content Data & Media Folders

All text is decoupled from JSX and stored in `src/data/`:
- `src/data/profile.js` – Bio, contact info, phone, CGPA, counters, roles.
- `src/data/experience.js` – Internship roles, organizations, dates, descriptions, photos.
- `src/data/projects.js` – Project slugs, live links, repo links, problem statements, features.
- `src/data/certificates.js` – Credentials, dates, categories, verify links.
- `src/data/skills.js` – Categorized technical proficiencies.
- `src/data/gallery.js` – Campus, speaking, and hackathon moments.

### Where to drop images:
Drop your image files into `public/images/`:
- `public/images/hero/profile.jpg`
- `public/images/about/about-1.jpg` to `about-6.jpg`
- `public/images/experience/nic/photo-1.jpg`, `certificate.jpg`
- `public/images/experience/niwe/photo-1.jpg`, `certificate.jpg`
- `public/images/experience/codealpha/photo-1.jpg`, `certificate.jpg`
- `public/images/experience/rdinfro/photo-1.jpg`, `certificate.jpg`
- `public/images/projects/<slug>/cover.jpg`, `screenshot-1.jpg` ...
- `public/images/certificates/cert-01.jpg` to `cert-06.jpg`
- `public/images/gallery/gallery-01.jpg` to `gallery-12.jpg`
- `public/images/og-image.jpg`
- `public/resume/Lakshana_A_Resume.pdf`

*Note: Until real images are added, the site automatically renders dark placeholder cards showing the exact expected file path.*

---

## 🚀 Development & Deployment

### Local Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Deployment to Netlify or Vercel
The repository includes:
- `public/_redirects` for Netlify (`/*  /index.html  200`)
- `vercel.json` for Vercel SPA rewrites
This ensures direct URLs (e.g. `/projects/hypefiltr-ai`) work seamlessly on page refresh!
