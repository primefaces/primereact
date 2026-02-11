import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

const SOURCE_DIR = path.resolve(ROOT, '../../packages/tailwind/src');

const OUTPUT_DIR = path.resolve(ROOT, 'public/r');

function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

function getFiles() {
    return fs
        .readdirSync(SOURCE_DIR, { withFileTypes: true })
        .filter((e) => e.isFile())
        .map((d) => d.name);
}

ensureDir(OUTPUT_DIR);

const REGISTRY_BASE = (name) => `https://v11.primereact.org/public/r/${name}.json`;

const items = [
    {
        name: 'index',
        type: 'registry:style',
        dependencies: ['primereact@11.0.0-alpha.10', '@primeuix/utils', '@primereact/types'],
        registryDependencies: [REGISTRY_BASE('utils')],
        files: [],
        css: {
            ':root': {
                '--p-primary-50': 'oklch(98.5% 0 0)',
                '--p-primary-100': 'oklch(97% 0 0)',
                '--p-primary-200': 'oklch(92.2% 0 0)',
                '--p-primary-300': 'oklch(87% 0 0)',
                '--p-primary-400': 'oklch(70.8% 0 0)',
                '--p-primary-500': 'oklch(55.6% 0 0)',
                '--p-primary-600': 'oklch(43.9% 0 0)',
                '--p-primary-700': 'oklch(37.1% 0 0)',
                '--p-primary-800': 'oklch(26.9% 0 0)',
                '--p-primary-900': 'oklch(20.5% 0 0)',
                '--p-primary-950': 'oklch(14.5% 0 0)',
                '--p-surface-0': 'oklch(100% 0 0)',
                '--p-surface-50': 'oklch(98.5% 0 0)',
                '--p-surface-100': 'oklch(97% 0 0)',
                '--p-surface-200': 'oklch(92.2% 0 0)',
                '--p-surface-300': 'oklch(87% 0 0)',
                '--p-surface-400': 'oklch(70.8% 0 0)',
                '--p-surface-500': 'oklch(55.6% 0 0)',
                '--p-surface-600': 'oklch(43.9% 0 0)',
                '--p-surface-700': 'oklch(37.1% 0 0)',
                '--p-surface-800': 'oklch(26.9% 0 0)',
                '--p-surface-900': 'oklch(20.5% 0 0)',
                '--p-surface-950': 'oklch(14.5% 0 0)',
                '--p-content-border-radius': '6px',
                '--p-primary-color': 'var(--p-primary-500)',
                '--p-primary-contrast-color': 'var(--p-surface-0)',
                '--p-primary-hover-color': 'var(--p-primary-600)',
                '--p-primary-active-color': 'var(--p-primary-700)',
                '--p-content-border-color': 'var(--p-surface-200)',
                '--p-content-hover-background': 'var(--p-surface-100)',
                '--p-content-hover-color': 'var(--p-surface-800)',
                '--p-highlight-background': 'var(--p-primary-50)',
                '--p-highlight-color': 'var(--p-primary-700)',
                '--p-highlight-focus-background': 'var(--p-primary-100)',
                '--p-highlight-focus-color': 'var(--p-primary-800)',
                '--p-text-color': 'var(--p-surface-700)',
                '--p-text-hover-color': 'var(--p-surface-800)',
                '--p-text-muted-color': 'var(--p-surface-500)',
                '--p-text-hover-muted-color': 'var(--p-surface-600)'
            },
            '@media (prefers-color-scheme: dark)': {
                ':root': {
                    '--p-primary-color': 'var(--p-primary-400)',
                    '--p-primary-contrast-color': 'var(--p-surface-900)',
                    '--p-primary-hover-color': 'var(--p-primary-300)',
                    '--p-primary-active-color': 'var(--p-primary-200)',
                    '--p-content-border-color': 'var(--p-surface-700)',
                    '--p-content-hover-background': 'var(--p-surface-800)',
                    '--p-content-hover-color': 'var(--p-surface-0)',
                    '--p-highlight-background': 'color-mix(in srgb, var(--p-primary-400), transparent 84%)',
                    '--p-highlight-color': 'rgba(255, 255, 255, 0.87)',
                    '--p-highlight-focus-background': 'color-mix(in srgb, var(--p-primary-400), transparent 76%)',
                    '--p-highlight-focus-color': 'rgba(255, 255, 255, 0.87)',
                    '--p-text-color': 'var(--p-surface-0)',
                    '--p-text-hover-color': 'var(--p-surface-0)',
                    '--p-text-muted-color': 'var(--p-surface-400)',
                    '--p-text-hover-muted-color': 'var(--p-surface-300)'
                }
            }
        }
    },
    ...getFiles().map((file) => {
        const filePath = path.join(SOURCE_DIR, file);

        const ext = path.extname(file);
        const name = file.slice(0, -ext.length);

        const type = name === 'utils' ? 'registry:lib' : 'registry:ui';

        const content = fs.readFileSync(filePath, 'utf-8').replace('@/components/ui/utils', '@/lib/utils');

        const { dependencies, registryDependencies } = resolveDependencies([filePath], name);

        return {
            $schema: 'https://ui.shadcn.com/schema/registry-item.json',
            name,
            type,
            dependencies,
            registryDependencies: registryDependencies.map(REGISTRY_BASE),
            files: [
                {
                    path: type === 'registry:lib' ? `lib/${file}` : `components/ui/${file}`,
                    type,
                    content
                }
            ]
        };
    })
];

items.forEach((item) => {
    const outFile = path.join(OUTPUT_DIR, `${item.name}.json`);

    fs.writeFileSync(outFile, JSON.stringify(item, null, 2));
});

fs.writeFileSync(
    path.join(ROOT, 'registry.json'),
    JSON.stringify(
        {
            $schema: 'https://ui.shadcn.com/schema/registry.json',
            name: 'primereact',
            homepage: 'https://v11.primereact.org',
            items
        },
        null,
        2
    ) + '\n'
);

// UTILS

function extractImports(code) {
    const imports = [];
    const regex = /from\s+['"]([^'"]+)['"]/g;
    let match;

    while ((match = regex.exec(code))) {
        imports.push(match[1]);
    }

    return imports;
}

function isGlobalDependency(source) {
    return source === 'primereact' || source.startsWith('primereact/') || source.startsWith('@primereact/') || source.startsWith('@primeuix/');
}

function classifyImport(source) {
    if (source === 'react' || source.startsWith('./') || source.startsWith('../')) {
        return null;
    }

    if (isGlobalDependency(source)) {
        return null;
    }

    if (source.startsWith('@/components/ui/')) {
        return {
            type: 'registry',
            value: source.replace('@/components/ui/', '')
        };
    }

    if (source.startsWith('@/components/')) {
        return {
            type: 'registry',
            value: source.replace('@/components/', '')
        };
    }

    // internal registry (button, input)
    if (!source.startsWith('@') && !source.includes('/')) {
        return {
            type: 'npm',
            value: source
        };
    }

    return {
        type: 'npm',
        value: source
    };
}

function resolveDependencies(files, componentName) {
    const npmDeps = new Set();
    const registryDeps = new Set();

    for (const filePath of files) {
        const code = fs.readFileSync(filePath, 'utf-8');
        const imports = extractImports(code);

        for (const imp of imports) {
            const result = classifyImport(imp, componentName);

            if (!result) continue;

            if (result.type === 'registry') {
                registryDeps.add(result.value);
            }

            if (result.type === 'npm') {
                if (result.value !== componentName) {
                    npmDeps.add(result.value);
                }
            }
        }
    }

    return {
        dependencies: [...npmDeps],
        registryDependencies: [...registryDeps]
    };
}
