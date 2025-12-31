import { Store } from '@/__store__';
import { highlightCode } from '@/utils/highlight-code';
import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import DocShowcaseWrapper from './doc-showcase-wrapper';

export interface Showcase {
    demo: React.ReactNode;
    components: Map<string, Component>;
}

export interface Component {
    source: string;
    highlightedCode: string;
}

const cwd = process.cwd();
const repoRoot = cwd.includes(`${path.sep}apps${path.sep}showcase`) ? path.resolve(cwd, '..', '..') : cwd;

async function getComponents(names: string[], folder: 'styled' | 'tailwind', hideCode: boolean): Promise<Map<string, Component>> {
    const components: Map<string, Component> = new Map();

    if (hideCode) {
        return components;
    }

    await Promise.all(
        names.map(async (name) => {
            try {
                let filePath = '';
                let source = '';

                if (name.startsWith('ui/')) {
                    filePath = path.join(repoRoot, 'packages', name.replace('ui/', 'tailwind/src/')) + '/index.tsx';
                } else {
                    const [component, demo] = name.split(':');

                    filePath = path.join(repoRoot, 'apps', 'showcase', 'demo', component, folder, `${demo}.tsx`);
                }

                source = await fs.readFile(filePath, 'utf8');

                components.set(name, {
                    source,
                    highlightedCode: await highlightCode(source)
                });
            } catch {
                // Silently fail if demo file doesn't exist
            }
        })
    );

    return components;
}

const getDemo = (name: string, folder: 'styled' | 'tailwind') => {
    const [component, demo] = name.split(':');
    const Demo = Store[component]?.[folder]?.[demo]?.component;

    if (!Demo) return;

    return <Demo />;
};

export default async function DocComponentShowcase({
    tailwind,
    styled,
    hideCode = false,
    ...props
}: React.ComponentProps<'div'> & {
    tailwind: {
        demo: string;
        names: string[];
    };
    styled: {
        demo: string;
        names: string[];
    };
    hideCode?: boolean;
}) {
    const showcase: Map<string, Showcase> = new Map();

    await Promise.all([
        getComponents(styled.names, 'styled', hideCode).then((components) => {
            showcase.set('styled', { demo: getDemo(styled.demo, 'styled'), components });
        }),
        getComponents(tailwind.names, 'tailwind', hideCode).then((components) => {
            showcase.set('tailwind', { demo: getDemo(tailwind.demo, 'tailwind'), components });
        })
    ]);

    return <DocShowcaseWrapper showcase={showcase} hideCode={hideCode} {...props} />;
}
