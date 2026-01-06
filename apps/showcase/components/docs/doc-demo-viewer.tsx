import { highlightCode } from '@/utils/highlight-code';
import dynamic from 'next/dynamic';
import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import DocDemoWrapper from './doc-demo-wrapper';

export default async function DocDemoViewer({ name, hideCode, __type__, ...props }: React.ComponentProps<'div'> & { name: string; hideCode?: boolean; __type__?: string }) {
    const [component, demo] = name.split(':');

    const Component = dynamic(() => {
        return import(`@/demo/${__type__ ? __type__ + '/' : ''}${name.split(':').join('/')}.tsx`).then((mod) => mod.default);
    });

    if (!Component) {
        return (
            <div className="card">
                <p className="text-center">
                    The component referenced as <code className="bg-surface-100 dark:bg-surface-800 p-1 rounded-md text-sm">{name}</code> is unavailable or does not exist.
                </p>
            </div>
        );
    }

    let highlightedCode = undefined;
    let source = undefined;

    if (!hideCode) {
        try {
            const filePath = `demo/${__type__ ? __type__ + '/' : ''}${component}/${demo}.tsx`;

            source = await fs.readFile(path.join(process.cwd(), filePath), 'utf8');

            highlightedCode = await highlightCode(source);
        } catch {
            highlightedCode = 'Error loading source code.';
        }
    }

    return <DocDemoWrapper name={name} component={<Component />} source={source} highlightedCode={highlightedCode} {...props} />;
}
