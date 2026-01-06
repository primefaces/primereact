import { highlightCode } from '@/utils/highlight-code';
import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import DocDemoWrapper from './doc-demo-wrapper';

const cwd = process.cwd();
const repoRoot = cwd.includes(`${path.sep}apps${path.sep}showcase`) ? path.resolve(cwd, '..', '..') : cwd;

export default async function DocSourceViewer({ name, __pathname__, ...props }: React.ComponentProps<'div'> & { name: string; __pathname__: string }) {
    let filePath = '';
    let source = '';

    let highlightedCode = '';

    try {
        if (name.startsWith('ui/')) {
            filePath = path.join(repoRoot, 'packages', name.replace('ui/', 'tailwind/src/')) + '/index.tsx';
        } else {
            const [component, demo] = name.split(':');
            const match = __pathname__?.match(/\/docs\/([^/]+)\//);
            const type = match?.[1];

            filePath = path.join(repoRoot, 'apps', 'showcase', 'demo', component, type ? type : '', `${demo}.tsx`);
        }

        source = await fs.readFile(filePath, 'utf8');

        highlightedCode = await highlightCode(source);
    } catch {
        highlightedCode = 'Error loading source code.';
    }

    return <DocDemoWrapper name={name} component={null} source={source} highlightedCode={highlightedCode} {...props} />;
}
