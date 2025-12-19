/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ChotuAI',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

