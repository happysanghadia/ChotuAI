import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Helper function to get asset path with basePath for GitHub Pages
export function getAssetPath(path: string): string {
    // Next.js Image component automatically handles basePath for public folder assets
    // But for static exports, we need to ensure the path works correctly
    // The basePath is configured in next.config.js
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    return cleanPath
}
