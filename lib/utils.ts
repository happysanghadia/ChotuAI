import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Helper function to get asset path with basePath for GitHub Pages
export function getAssetPath(path: string): string {
    // #region agent log
    const basePath = process.env.NODE_ENV === 'production' ? '/ChotuAI' : '';
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const finalPath = `${basePath}${cleanPath}`;
    if (typeof window === 'undefined') {
        // Server-side: log to file
        const fs = require('fs');
        const logPath = require('path').join(process.cwd(), '.cursor', 'debug.log');
        try {
            fs.appendFileSync(logPath, JSON.stringify({
                sessionId: 'debug-session',
                runId: 'getAssetPath-call',
                hypothesisId: 'A',
                location: 'lib/utils.ts:getAssetPath',
                message: 'getAssetPath called',
                data: { inputPath: path, basePath, cleanPath, finalPath, NODE_ENV: process.env.NODE_ENV },
                timestamp: Date.now(),
            }) + '\n');
        } catch (e) {}
    } else {
        // Client-side: log via fetch
        fetch('http://127.0.0.1:7242/ingest/f6931dd9-a530-4e4a-90b1-7afa6d443063', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sessionId: 'debug-session',
                runId: 'getAssetPath-call',
                hypothesisId: 'A',
                location: 'lib/utils.ts:getAssetPath',
                message: 'getAssetPath called',
                data: { inputPath: path, basePath, cleanPath, finalPath, NODE_ENV: process.env.NODE_ENV },
                timestamp: Date.now(),
            }),
        }).catch(() => {});
    }
    // #endregion agent log
    
    // For static exports with basePath, we MUST manually prepend basePath
    // Next.js Image component does NOT automatically handle basePath for static exports
    const basePathValue = process.env.NODE_ENV === 'production' ? '/ChotuAI' : '';
    const cleanPathValue = path.startsWith('/') ? path : `/${path}`;
    return `${basePathValue}${cleanPathValue}`;
}
