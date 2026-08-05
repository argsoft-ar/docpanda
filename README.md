# DocPanda

**Estudio de fotografía y video de producto. Contenido visual que vende.**

DocPanda is a modern landing page for a product photography and video production studio. Built with React, TypeScript, and Vite, it showcases our services, process, and portfolio to potential clients.

## 🎯 About the Project

DocPanda is a professional services website that highlights:

- **Product Photography Services** — High-quality studio photography for e-commerce
- **Product Video Services** — Professional video content for social media and marketing
- **Our Process** — Clear 4-step workflow from planning to delivery
- **Portfolio** — Showcase of brands we've worked with
- **FAQ & Contact** — Easy ways to get in touch and learn more

## 🛠️ Tech Stack

- **React 19** — UI framework
- **TypeScript** — Type-safe development
- **Vite 8** — Fast build tool and dev server with HMR
- **ESLint** — Code quality and style consistency
- **Lucide React** — Icon library

## 📁 Project Structure

```
docpanda/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── Form/
│   │   ├── Tabs/
│   │   ├── Faq/
│   │   └── Doodle/
│   ├── pages/               # Page layouts
│   │   └── Home/
│   │       └── Sections/    # Page sections (Hero, Process, etc.)
│   ├── data/                # Content and configuration data
│   │   ├── hero.ts
│   │   ├── process.ts
│   │   ├── photography.ts
│   │   ├── video.ts
│   │   ├── brands.ts
│   │   ├── contact.ts
│   │   ├── faq.ts
│   │   ├── team.ts
│   │   └── types.ts
│   ├── assets/              # Images, fonts, and static files
│   ├── App.tsx              # Root component
│   ├── index.css            # Global styles and design tokens
│   └── main.tsx             # Entry point
├── public/                  # Static assets served as-is
├── index.html               # HTML template
├── package.json
├── vite.config.ts
├── tsconfig.json
└── eslint.config.js
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ or **pnpm** 8+

### Installation

1. Clone the repository:

```bash
git clone https://github.com/argsoft/docpanda.git
cd docpanda
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

## 📋 Available Scripts

| Command           | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Start development server with HMR                    |
| `npm run build`   | Build for production (TypeScript check + Vite build) |
| `npm run preview` | Preview the production build locally                 |
| `npm run lint`    | Run ESLint to check code quality                     |

## 📝 Content Management

All site content (text, links, FAQs, process steps, etc.) is managed in the `src/data/` directory:

- **`site.ts`** — Global site configuration (logo, footer, socials)
- **`hero.ts`** — Hero section content
- **`process.ts`** — 4-step process flow
- **`photography.ts`** — Product photography section
- **`video.ts`** — Product video section
- **`brands.ts`** — Brand portfolio/clients
- **`contact.ts`** — Contact form data
- **`faq.ts`** — FAQ questions and answers
- **`team.ts`** — Team members information
- **`navigation.ts`** — Navigation links
- **`types.ts`** — TypeScript types for all content

To update any section, edit the corresponding file in `src/data/`. Changes will hot-reload in development.

## 🎨 Styling Architecture

- **Global styles** — `src/index.css` (design tokens, resets, global utilities)
- **Component styles** — Each component has its own `.css` file colocated in its directory
- **Page styles** — Each page has its own `.css` file in its directory

## 🔧 Customization

### Adding a New Component

1. Create a new folder in `src/components/`
2. Add `ComponentName.tsx` with the component code
3. Add `ComponentName.css` for styles
4. Export from `src/components/index.ts`

### Adding New Content

1. Create or edit the relevant data file in `src/data/`
2. Update types in `src/data/types.ts` if needed
3. Import and use in the corresponding page section

## 🚀 Deployment

Build the project:

```bash
npm run build
```

This creates an optimized production bundle in the `dist/` directory. The build includes:

- TypeScript type checking
- Minified and tree-shaken code
- Optimized asset loading

## 📱 Browser Support

Modern browsers with ES2020+ support. The project targets recent versions of Chrome, Firefox, Safari, and Edge.

## 👥 Contributing

1. Create a feature branch (`git checkout -b feature/feature-name`)
2. Make your changes and commit (`git commit -m 'Add feature'`)
3. Push to the branch (`git push origin feature/feature-name`)
4. Open a Pull Request

## 📄 License

Copyright © 2025 DocPanda. All rights reserved.
