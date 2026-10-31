# Vishal Chandel — Computer Science Portfolio

A personal portfolio website built with React, TypeScript, Vite and Tailwind CSS.

---

## Getting Started

```bash
npm install
npm run dev
```

The site will run at `http://localhost:5173`.

To build for production:

```bash
npm run build
```

---

## Updating Your Information

All editable content lives in `src/data/`. You should never need to touch any component file just to update your information.

| File | What it controls |
|---|---|
| `src/data/profile.ts` | Your name, bio, GitHub, LinkedIn, email |
| `src/data/projects.ts` | Game-Boost and all GitHub project cards |
| `src/data/experience.ts` | Freelance experience cards |
| `src/data/skills.ts` | Technical skills and learning goals |
| `src/data/education.ts` | Education timeline |

### Replacing Placeholders

Search for `[` in any data file to find all placeholders. Replace them with your real information.

---

## Adding Screenshots

Project screenshots go into the `public/projects/` folder.

### Game-Boost screenshots

Place files here:

```
public/projects/game-boost/main.png        ← main preview (16:9)
public/projects/game-boost/mobile.png      ← mobile screenshot
public/projects/game-boost/dashboard.png   ← dashboard view
public/projects/game-boost/product.png     ← product page view
```

Then update `src/data/projects.ts` — find the `game-boost` entry and update the `images` array:

```ts
images: ["main.png", "mobile.png", "dashboard.png", "product.png"],
```

### GitHub project screenshots

Follow the same pattern:

```
public/projects/project-01/preview.png
```

Update the corresponding entry in `src/data/projects.ts`:

```ts
images: ["preview.png"],
```

---

## Adding or Removing Project Cards

In `src/data/projects.ts`, add a new object to the `projects` array following the existing structure. Set `featured: false` for grid cards.

To remove a card, delete its entry from the array.

---

## Replacing Placeholders in Contact Links

In `src/data/profile.ts`, replace:

```ts
github: "[GITHUB_PROFILE_URL]",
linkedin: "[LINKEDIN_URL]",
email: "[EMAIL_ADDRESS]",
```

With your actual values. Once replaced, the GitHub buttons in the navbar, hero, contact section, footer and GitHub note section will all automatically become live links.

---

## Project Structure

```
Portfolio/
├── public/
│   └── projects/
│       ├── game-boost/     ← Game-Boost screenshots
│       ├── project-01/     ← Project card screenshots
│       ├── project-02/
│       ├── project-03/
│       └── project-04/
├── src/
│   ├── components/         ← UI components (do not edit for content changes)
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── GameBoost.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── FreelanceExperience.tsx
│   │   ├── GithubNote.tsx
│   │   ├── Skills.tsx
│   │   ├── LearningGoals.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── AnimatedSection.tsx
│   │   └── ProjectImagePlaceholder.tsx
│   ├── data/               ← Edit these files to update content
│   │   ├── profile.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   └── education.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
└── vite.config.ts
```
