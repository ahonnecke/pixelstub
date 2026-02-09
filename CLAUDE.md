# CLAUDE.md

## Project Overview

Pixelstub, LLC consulting website built with Astro + React islands + TypeScript. Static site deployed to Digital Ocean App Platform.

## Development Commands

```bash
# Install dependencies
cd site && npm ci

# Dev server (localhost:4321)
make dev

# Docker dev
make up

# Build
cd site && npm run build

# Lint
npx biome check --write

# Pre-commit
make ci.pre-commit
```

## Architecture

- **Astro** for static site generation (zero JS by default)
- **React islands** for interactive components (ContactForm)
- **MDX** for case study content
- **Biome** for linting/formatting (tabs, double quotes)

## Key Directories

- `site/src/pages/` - Astro pages (file-based routing)
- `site/src/layouts/` - Layout components
- `site/src/components/` - Reusable components
- `site/src/content/work/` - MDX case studies
- `site/src/styles/` - Global CSS
- `site/public/` - Static assets (images, CV)

## Deployment

Static site on DO App Platform. `deploy_on_push: true` handles deployment on push to main. GitHub Actions runs CI (lint + build check) only.
