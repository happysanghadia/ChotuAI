/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Only use basePath in production (for GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/ChotuAI' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

// #region agent log
const fs = require('fs');
const path = require('path');
const logPath = path.join(__dirname, '.cursor', 'debug.log');
const logEntry = {
  sessionId: 'debug-session',
  runId: 'build-config-check',
  hypothesisId: 'C',
  location: 'next.config.js:12',
  message: 'Next.js config loaded',
  data: {
    NODE_ENV: process.env.NODE_ENV,
    basePath: nextConfig.basePath,
    output: nextConfig.output,
  },
  timestamp: Date.now(),
};
try {
  fs.appendFileSync(logPath, JSON.stringify(logEntry) + '\n');
} catch (e) {}
// #endregion agent log

module.exports = nextConfig

