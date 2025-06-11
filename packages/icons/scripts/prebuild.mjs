import fs from 'fs-extra';
import path from 'path';
import { removeBuild, resolvePath, updatePackageJson } from '../../../scripts/build-helper.mjs';

removeBuild(import.meta.url);

const { __dirname, INPUT_DIR } = resolvePath(import.meta.url);
const __root = path.resolve(__dirname, '../');
const pkg = path.resolve(__root, './package.json');

updatePackageJson(pkg);

// Generate index.js for ESM imports
const modules = {
    ignoredFolders: [],
    esm: [
        `/***************** PrimeReact Icons (Auto-Generated) *****************/

`
    ]
};

fs.readdirSync(path.resolve(__root, INPUT_DIR), { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .forEach(({ name: folderName }) => {
        if (!modules.ignoredFolders.includes(folderName)) {
            modules.esm.push(`export * from '@primereact/icons/${folderName}';\n`);
        }
    });

// ESM
fs.writeFileSync(INPUT_DIR + 'index.ts', modules.esm.join(''));
