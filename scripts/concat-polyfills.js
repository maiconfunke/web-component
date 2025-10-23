const fs = require('fs');
const path = require('path');

async function concat(distDir = path.join('dist', 'web-component')) {
  const polyfillsPath = path.join(distDir, 'polyfills.js');
  const mainPath = path.join(distDir, 'main.js');

  if (!fs.existsSync(polyfillsPath)) {
    console.log('No polyfills.js found, nothing to concatenate.');
    return;
  }
  if (!fs.existsSync(mainPath)) {
    throw new Error('main.js not found in ' + distDir);
  }

  const poly = fs.readFileSync(polyfillsPath, 'utf8');
  const main = fs.readFileSync(mainPath, 'utf8');

  // Write combined into a temporary file first
  const tmpPath = path.join(distDir, 'main.combined.tmp.js');
  fs.writeFileSync(tmpPath, poly + '\n' + main, 'utf8');

  // Replace main.js with combined file
  fs.renameSync(tmpPath, mainPath);

  // Remove polyfills.js
  try {
    fs.unlinkSync(polyfillsPath);
  } catch (e) {
    console.warn('Could not remove polyfills.js:', e.message);
  }

  console.log('Concatenation complete. main.js now includes polyfills.');
}

const outDirArg = process.argv[2];
concat(outDirArg).catch((err) => {
  console.error('Error during concatenation:', err);
  process.exitCode = 1;
});
