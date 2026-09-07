# Hisham Toryalay Engineering ePortfolio

A professional software engineering ePortfolio built with React, TypeScript and Vite for GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The site builds to `dist/`.

## GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. After pushing to GitHub:

1. Open the repository on GitHub.
2. Go to **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main`.

The workflow will build the Vite site and publish it to GitHub Pages.
