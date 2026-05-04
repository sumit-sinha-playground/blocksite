const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const { minify } = require('html-minifier-terser');

const buildDir = path.join(__dirname, '../build');
const srcDir = path.join(__dirname, '../src');
const htmlDir = path.join(__dirname, '../html');
const iconsDir = path.join(__dirname, '../icons');

// Helper to ensure directory exists
function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

async function build() {
    console.log('Cleaning build directory...');
    if (fs.existsSync(buildDir)) {
        fs.rmSync(buildDir, { recursive: true, force: true });
    }

    ensureDir(path.join(buildDir, 'html'));
    ensureDir(path.join(buildDir, 'src'));
    ensureDir(path.join(buildDir, 'icons'));

    console.log('Bundling and minifying JavaScript...');
    const jsFiles = ['background.js', 'options.js', 'popup.js'];
    for (const file of jsFiles) {
        await esbuild.build({
            entryPoints: [path.join(srcDir, file)],
            bundle: true,
            minify: true,
            outfile: path.join(buildDir, 'src', file),
            platform: 'browser',
        });
    }

    console.log('Processing HTML files...');
    const htmlFiles = ['options.html', 'warning.html', 'popup.html'];
    const minifyOptions = {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
    };

    for (const file of htmlFiles) {
        let content = fs.readFileSync(path.join(htmlDir, file), 'utf8');
        
        // Update popup.html script tag to point to ../src/popup.js
        if (file === 'popup.html') {
            content = content.replace('<script src="popup.js"></script>', '<script src="../src/popup.js"></script>');
        }

        const minified = await minify(content, minifyOptions);
        fs.writeFileSync(path.join(buildDir, 'html', file), minified);
    }

    console.log('Copying static assets...');
    // Copy icons
    const icons = fs.readdirSync(iconsDir);
    for (const icon of icons) {
        fs.copyFileSync(path.join(iconsDir, icon), path.join(buildDir, 'icons', icon));
    }

    console.log('Minifying CSS...');
    const cssFiles = ['popup.css'];
    for (const file of cssFiles) {
        const fullPath = path.join(htmlDir, file);
        if (fs.existsSync(fullPath)) {
            await esbuild.build({
                entryPoints: [fullPath],
                minify: true,
                outfile: path.join(buildDir, 'html', file),
            });
        }
    }

    // Copy manifest.json and rules.json
    fs.copyFileSync(path.join(__dirname, '../manifest.json'), path.join(buildDir, 'manifest.json'));
    if (fs.existsSync(path.join(__dirname, '../rules.json'))) {
        fs.copyFileSync(path.join(__dirname, '../rules.json'), path.join(buildDir, 'rules.json'));
    }

    console.log('Build completed successfully!');
}

build().catch(err => {
    console.error('Build failed:', err);
    process.exit(1);
});
