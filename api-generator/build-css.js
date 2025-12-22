const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const uglifycss = require('gulp-uglifycss');
const rename = require('gulp-rename');

// directories
const rootDir = path.resolve(__dirname, '../');
const distDir = path.resolve(rootDir, 'dist/resources');
const libDir = path.resolve(rootDir, 'components/lib');

function findFilesWithExtension(directory, extension) {
    if (!fs.existsSync(directory)) {
        // eslint-disable-next-line no-console
        console.error(`Directory "${directory}" does not exist.`);

        return;
    }

    const filesAndSubdirs = fs.readdirSync(directory);

    filesAndSubdirs.forEach((item) => {
        const itemPath = path.join(directory, item);

        if (fs.statSync(itemPath).isFile()) {
            if (item.endsWith(extension)) {
                // Process the file and extract styles
                processFile(itemPath);
            }
        } else if (fs.statSync(itemPath).isDirectory()) {
            findFilesWithExtension(itemPath, extension);
        }
    });
}

function removeLayerAndLastBrace(inputString) {
    // Remove the text "@layer primereact {" from the string
    const withoutLayer = inputString.replace(/@layer primereact {/, '');

    // Find the last occurrence of '}' and remove it
    const lastIndex = withoutLayer.lastIndexOf('}');

    if (lastIndex !== -1) {
        return withoutLayer.substring(0, lastIndex) + withoutLayer.substring(lastIndex + 1);
    }

    return withoutLayer;
}

function processFile(filePath) {
    try {
        const regexes = [
            /const styles = `([\s\S]*?)`/s,
            /const baseStyle = `([\s\S]*?)`/s,
            /const buttonStyles = `([\s\S]*?)`/s,
            /const checkboxStyles = `([\s\S]*?)`/s,
            /const inputTextStyles = `([\s\S]*?)`/s,
            /const radioButtonStyles = `([\s\S]*?)`/s,
            /const iconStyles = `([\s\S]*?)`/s,
            /const commonStyles = `([\s\S]*?)`/s
        ];
        const fileContent = fs.readFileSync(filePath, 'utf8');

        for (let index = 0; index < regexes.length; index++) {
            const regex = regexes[index];
            const matches = regex.exec(fileContent);

            if (matches && matches[1]) {
                let styles = matches[1];
                const hasLayer = styles.includes('@layer primereact');

                if (hasLayer) {
                    styles = removeLayerAndLastBrace(styles);
                    // Append the styles to the primereact.css file
                    fs.appendFileSync(path.resolve(distDir, 'primereact.css'), styles);

                    // eslint-disable-next-line no-console
                    console.log(`Styles from ${filePath} added to primereact.css`);
                }
            }
        }
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`Error processing file ${filePath}: ${err.message}`);
    }
}

const fileExtensionToFind = 'Base.js';

// Clear the existing primereact.css file
!fs.existsSync(distDir) && fs.mkdirSync(distDir);

// start the layer
fs.writeFileSync(path.resolve(distDir, 'primereact.css'), `@layer primereact {\n`);

findFilesWithExtension(libDir, fileExtensionToFind);

// close the layer
fs.appendFileSync(path.resolve(distDir, 'primereact.css'), `}\n`);

// Create a Gulp task to minimize the generated CSS
gulp.task('minify-css', function () {
    return gulp
        .src(path.resolve(distDir, 'primereact.css'))
        .pipe(uglifycss())
        .pipe(rename('primereact.min.css')) // Renaming the file
        .pipe(gulp.dest('./dist/resources/'))
        .on('end', function () {
            // eslint-disable-next-line no-console
            console.log('CSS file minimized and saved as primereact.css');
        });
});

// Run the Gulp 'minify-css' task
gulp.series('minify-css')();
