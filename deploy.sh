#!/bin/bash

# Build script for GitHub Pages deployment
echo "Building Next.js application..."
npm run build

echo "Copying built files to root directory..."
cp -r out/* .
cp -r out/_next .

echo "Deployment files ready!"
echo "You can now commit and push to GitHub Pages"

