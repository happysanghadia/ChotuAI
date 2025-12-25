const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, '..', '.cursor', 'debug.log');

function log(entry) {
  try {
    fs.appendFileSync(logPath, JSON.stringify(entry) + '\n');
  } catch (e) {
    console.error('Failed to write log:', e);
  }
}

// #region agent log
log({
  sessionId: 'debug-session',
  runId: 'build-start',
  hypothesisId: 'B',
  location: 'scripts/build-with-logs.js:15',
  message: 'Build script started',
  data: {
    NODE_ENV: process.env.NODE_ENV,
    cwd: process.cwd(),
  },
  timestamp: Date.now(),
});
// #endregion agent log

try {
  // #region agent log
  log({
    sessionId: 'debug-session',
    runId: 'pre-build-check',
    hypothesisId: 'A',
    location: 'scripts/build-with-logs.js:30',
    message: 'Checking out directory before build',
    data: {
      outExists: fs.existsSync(path.join(__dirname, '..', 'out')),
    },
    timestamp: Date.now(),
  });
  // #endregion agent log

  console.log('Starting Next.js build...');
  execSync('next build', { stdio: 'inherit', cwd: path.join(__dirname, '..') });

  // #region agent log
  const outDir = path.join(__dirname, '..', 'out');
  const cssDir = path.join(outDir, '_next', 'static', 'css');
  const htmlFile = path.join(outDir, 'index.html');
  
  let cssFiles = [];
  let htmlCssPath = '';
  
  if (fs.existsSync(cssDir)) {
    cssFiles = fs.readdirSync(cssDir);
  }
  
  if (fs.existsSync(htmlFile)) {
    const htmlContent = fs.readFileSync(htmlFile, 'utf8');
    const cssMatch = htmlContent.match(/href=['"]([^'"]*css[^'"]*)['"]/);
    if (cssMatch) {
      htmlCssPath = cssMatch[1];
    }
  }
  
  log({
    sessionId: 'debug-session',
    runId: 'build-end',
    hypothesisId: 'A',
    location: 'scripts/build-with-logs.js:60',
    message: 'Build completed - checking CSS files',
    data: {
      outExists: fs.existsSync(outDir),
      cssDirExists: fs.existsSync(cssDir),
      cssFiles,
      htmlCssPath,
      cssFileExists: htmlCssPath ? fs.existsSync(path.join(outDir, htmlCssPath.replace(/^\//, ''))) : false,
    },
    timestamp: Date.now(),
  });
  // #endregion agent log

  console.log('Build completed successfully!');
} catch (error) {
  // #region agent log
  log({
    sessionId: 'debug-session',
    runId: 'build-error',
    hypothesisId: 'B',
    location: 'scripts/build-with-logs.js:75',
    message: 'Build failed',
    data: {
      error: error.message,
      code: error.status || error.code,
    },
    timestamp: Date.now(),
  });
  // #endregion agent log
  
  console.error('Build failed:', error.message);
  process.exit(1);
}

