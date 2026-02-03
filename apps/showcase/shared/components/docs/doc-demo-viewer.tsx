import { Store } from '@/__store__';
import { highlightCode } from '@/shared/utils/highlight-code';
import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import DocDemoWrapper from './doc-demo-wrapper';

export interface DocDemoViewerProps extends React.ComponentProps<'div'> {
    name: string;
    mode?: 'full' | 'compact' | 'hidden' | 'collapsible';
    __pathname__: string;
}

export default async function DocDemoViewer({ name, mode = 'compact', __pathname__, ...props }: DocDemoViewerProps) {
    const match = __pathname__?.match(/\/docs\/([^/]+)\//);
    const type = match?.[1];

    if (!type) return null;

    const [component, demo] = name.split(':');

    const Demo = Store?.[type]?.[component]?.[demo].component;

    if (!Demo) {
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

    if (mode !== 'hidden') {
        try {
            const filePath = `demo/${type ? type + '/' : ''}${component}/${demo}.tsx`;

            source = (await fs.readFile(path.join(process.cwd(), filePath), 'utf8')).replace('@/components/ui/utils', '@/lib/utils');

            highlightedCode = await highlightCode(source);
        } catch {
            highlightedCode = 'Error loading source code.';
        }
    }

    return <DocDemoWrapper name={name} component={<Demo />} source={source} highlightedCode={highlightedCode} mode={mode} {...props} />;
}
