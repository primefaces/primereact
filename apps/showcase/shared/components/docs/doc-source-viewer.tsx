import { highlightCode } from '@/shared/utils/highlight-code';
import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import DocDemoWrapper from './doc-demo-wrapper';
import { cn } from '@primeuix/utils';

const cwd = process.cwd();
const repoRoot = cwd.includes(`${path.sep}apps${path.sep}showcase`) ? path.resolve(cwd, '..', '..') : cwd;

export default async function DocSourceViewer({ name, __pathname__, className, ...props }: React.ComponentProps<'div'> & { name: string; __pathname__: string }) {
    let filePath = '';
    let source = '';

    let highlightedCode = '';

    try {
        if (name.startsWith('components/ui/')) {
            filePath = path.join(repoRoot, 'packages', name.replace('components/ui/', 'tailwind/src/')) + `.tsx`;
        } else {
            const [component, demo] = name.split(':');
            const match = __pathname__?.match(/\/docs\/([^/]+)\//);
            const type = match?.[1];

            filePath = path.join(repoRoot, 'apps', 'showcase', 'demo', component, type ? type : '', `${demo}.tsx`);
        }

        source = (await fs.readFile(filePath, 'utf8')).replace('@/components/ui/utils', '@/lib/utils');

        highlightedCode = await highlightCode(source);
    } catch {
        highlightedCode = 'Error loading source code.';
    }

    return <DocDemoWrapper name={name} component={null} source={source} highlightedCode={highlightedCode} className={cn('mb-4!', className)} {...props} />;
}
