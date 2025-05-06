import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const demoDir = path.join(projectRoot, 'demo');
const storeDir = path.join(projectRoot, '__store__');

let storeContent = `/****************************************************************************
****************** PrimeReact MDX Content (Auto-Generated) ******************
*****************************************************************************/

import * as React from 'react';

export const Store = {
`;

function findDemoFiles(dir, baseDir = demoDir) {
    const files = fs.readdirSync(dir);
    const demoFiles = [];

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            demoFiles.push(...findDemoFiles(filePath, baseDir));
        } else if (file.endsWith('-demo.tsx') || file.endsWith('-pt.tsx')) {
            const relativePath = path.relative(baseDir, filePath);
            const importPath = relativePath.replace(/\\/g, '/').replace('.tsx', '');
            const key = path.basename(file, '.tsx');

            const aliasPath = `@/demo/${importPath}`;
            const aliasFilePath = `${aliasPath}.tsx`;

            demoFiles.push({
                key,
                filePath: aliasFilePath
            });
        }
    }

    return demoFiles;
}

const demoFiles = findDemoFiles(demoDir);

for (const { key, filePath } of demoFiles) {
    storeContent += `    '${key}': {
        component: React.lazy(() => import('${filePath}')),
        filePath: '${filePath}'
    },\n`;
}

storeContent += `};
`;

if (!fs.existsSync(storeDir)) {
    fs.mkdirSync(storeDir, { recursive: true });
}

fs.writeFileSync(path.join(storeDir, 'index.mjs'), storeContent);

console.log(`Store oluşturuldu: ${path.join(storeDir, 'index.mjs')}`);
console.log(`Toplam ${demoFiles.length} demo dosyası işlendi.`);
