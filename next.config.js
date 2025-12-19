/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Uncomment and set basePath if your site is served from a subdirectory
  // For example, if your GitHub Pages URL is: https://username.github.io/repo-name/
  // basePath: '/ChotuAI',
}

module.exports = nextConfig

