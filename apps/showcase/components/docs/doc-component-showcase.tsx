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

async function getComponents(names: string[]): Promise<Map<string, Component>> {
    const components: Map<string, Component> = new Map();

    await Promise.all(
        names.map(async (name) => {
            const [component, demo] = name.split(':');
            const filePath = `demo/${component}/${demo}.tsx`;

            try {
                const source = await fs.readFile(path.join(process.cwd(), filePath), 'utf8');

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

const getDemo = (name: string) => {
    const [component, demo] = name.split(':');
    const Demo = Store[component]?.[demo]?.component;

    if (!Demo) return;

    return <Demo />;
};

export default async function DocComponentShowcase({
    tailwind,
    styled,
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
}) {
    const showcase: Map<string, Showcase> = new Map();

    await Promise.all([
        getComponents(styled.names).then((components) => {
            showcase.set('styled', { demo: getDemo(styled.demo), components });
        }),
        getComponents(tailwind.names).then((components) => {
            showcase.set('tailwind', { demo: getDemo(tailwind.demo), components });
        })
    ]);

    return <DocShowcaseWrapper showcase={showcase} {...props} />;
}
