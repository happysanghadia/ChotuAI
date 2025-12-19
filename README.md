# Chotu Marketplace Website

A modern, responsive website for Chotu Marketplace built with Next.js 14, Tailwind CSS, and ShadCN UI.

## Features

- 🎨 Modern UI with Tailwind CSS and ShadCN UI components
- 📱 Fully responsive mobile-first design
- ✨ Smooth animations with Framer Motion
- 🎯 Consumer-focused landing page
- 🏪 Dedicated pages for Retailers and Distributors
- 📖 About Us page
- 🌐 Structured for i18n support (English/Hindi)
- 🚀 Ready for GitHub Pages deployment

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN UI
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## GitHub Pages Deployment

### Option 1: Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically builds and deploys your site when you push to the `main` branch.

1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **GitHub Actions**
4. Push your changes to the `main` branch
5. The workflow will automatically build and deploy your site

Your site will be available at: `https://happysanghadia.github.io/ChotuAI/`

### Option 2: Manual Deployment

1. Build the static site:
```bash
npm run build
```

2. Copy files to root (or use the deploy script):
```bash
./deploy.sh
```

3. Commit and push:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push
```

4. In GitHub repository settings:
   - Go to **Pages**
   - Select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

### Important: Base Path Configuration

If your GitHub Pages URL includes the repository name (e.g., `https://username.github.io/repo-name/`), you need to set a basePath in `next.config.js`:

```javascript
basePath: '/ChotuAI',
```

Then rebuild and redeploy.

## Project Structure

```
├── app/
│   ├── about/          # About Us page
│   ├── distributors/   # For Distributors page
│   ├── retailers/      # For Retailers page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Landing page
├── components/
│   ├── ui/             # ShadCN UI components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   ├── HeroSection.tsx # Reusable hero section
│   ├── FeatureCard.tsx # Feature card component
│   ├── StepProcess.tsx # Step process component
│   └── TrustBadge.tsx  # Trust badge component
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment workflow
├── lib/
│   └── utils.ts        # Utility functions
└── index.html          # Root HTML file for GitHub Pages
```

## Design System

### Colors
- **Primary:** Deep Orange/Saffron (#FF6B35)
- **Secondary:** Trust Blue (#2563EB)
- **Background:** Clean White/Off-White

### Typography
- **Font:** Inter (Google Fonts)
- Large, legible fonts for accessibility

## Pages

- `/` - Landing page (Consumer focus)
- `/retailers` - For Retailers page
- `/distributors` - For Distributors page
- `/about` - About Us page

## Build

To create a production build:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## License

© 2024 Chotu Commerce. All rights reserved.
