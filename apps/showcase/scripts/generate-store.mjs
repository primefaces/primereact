import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const demoDir = path.join(projectRoot, 'demo');
const storeDir = path.join(projectRoot, '__store__');

let storeContent = `/****************************************************************************
****************** PrimeReact Store (Auto-Generated) ******************
*****************************************************************************/

import * as React from 'react';

export const Store = {
`;

function createNestedObject(obj, path, value) {
    const parts = path.split('/');
    let current = obj;

    for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!current[part]) {
            current[part] = {};
        }
        current = current[part];
    }

    const lastPart = parts[parts.length - 1];
    current[lastPart] = value;
}

function findDemoFiles(dir, baseDir = demoDir) {
    const files = fs.readdirSync(dir);
    const demoFiles = [];

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            demoFiles.push(...findDemoFiles(filePath, baseDir));
        } else if (file.endsWith('.tsx')) {
            const relativePath = path.relative(baseDir, filePath);
            const importPath = relativePath.replace(/\\/g, '/').replace('.tsx', '');
            const key = path.basename(file, '.tsx');

            const aliasPath = `demo/${importPath}`;
            const aliasFilePath = `${aliasPath}.tsx`;

            demoFiles.push({
                key,
                filePath: aliasFilePath,
                relativePath: importPath
            });
        }
    }

    return demoFiles;
}

const demoFiles = findDemoFiles(demoDir);
const storeObject = {};

for (const { filePath, relativePath } of demoFiles) {
    const value = {
        component: `React.lazy(() => import('${filePath}'))`,
        filePath: `'${filePath}'`
    };

    createNestedObject(storeObject, relativePath, value);
}

// Convert the object to a string representation
function objectToString(obj, indent = 4) {
    const entries = Object.entries(obj);
    let result = '';

    for (const [key, value] of entries) {
        if (typeof value === 'object' && value !== null) {
            result += `${' '.repeat(indent)}'${key}': {\n`;
            result += objectToString(value, indent + 4);
            result += `${' '.repeat(indent)}},\n`;
        } else {
            result += `${' '.repeat(indent)}'${key}': ${value},\n`;
        }
    }

    return result;
}

storeContent += objectToString(storeObject);
storeContent += `};
`;

if (!fs.existsSync(storeDir)) {
    fs.mkdirSync(storeDir, { recursive: true });
}

fs.writeFileSync(path.join(storeDir, 'index.mjs'), storeContent);

console.log(`Store oluşturuldu: ${path.join(storeDir, 'index.mjs')}`);
console.log(`Toplam ${demoFiles.length} demo dosyası işlendi.`);
