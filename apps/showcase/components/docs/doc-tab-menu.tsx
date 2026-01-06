'use client';
import { cn } from '@primeuix/utils';
import { allDocs } from 'contentlayer/generated';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function DocTabMenu({ componentName }: React.ComponentProps<'ul'> & { componentName: string }) {
    const pathname = usePathname();
    const tab = pathname.split('/')[5] ?? 'features';
    const folder = pathname.split('/')[2] ?? 'styled';

    const TAB_REGEX = new RegExp(`^${folder}/components/${componentName}(/(features|api|theming|pt))?$`);
    const TAB_ORDER = ['features', 'api', 'theming', 'pt'];
    const tabs = allDocs
        .filter((doc) => TAB_REGEX.test(doc.componentSlug))
        .map((doc) => {
            let key = doc.componentSlug.split('/').pop()!;

            if (key === componentName) {
                key = 'features';
            }

            return {
                key,
                label: (key === 'pt' ? 'pass through' : key).toUpperCase(),
                href: (folder: string, componentName: string) => `/docs/${folder}/components/${componentName}/${key === 'features' ? '' : key}`
            };
        })
        .sort((a, b) => TAB_ORDER.indexOf(a.key) - TAB_ORDER.indexOf(b.key));

    return (
        <ul className="doc-tabmenu">
            {tabs.map((doc, index) => (
                <li key={index} className={cn({ 'doc-tabmenu-active': tab === doc.key })}>
                    <Link href={doc.href(folder, componentName)}>
                        <button type="button">{doc.label}</button>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
