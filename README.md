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
└── lib/
    └── utils.ts        # Utility functions
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

To start the production server:

```bash
npm start
```

## License

© 2024 Chotu Commerce. All rights reserved.

