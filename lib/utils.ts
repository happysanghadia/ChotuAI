import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwindcss-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Helper function to get asset path with basePath for GitHub Pages
export function getAssetPath(path: string): string {
    const basePath = process.env.NODE_ENV === 'production' ? '/ChotuAI' : ''
    // Ensure path starts with /
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    return `${basePath}${cleanPath}`
}
