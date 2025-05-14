'use client';
import { cn } from '@primeuix/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
    { key: 'features', label: 'FEATURES', href: (componentName: string) => `/docs/components/${componentName}` },
    { key: 'api', label: 'API', href: (componentName: string) => `/docs/components/${componentName}/api` },
    { key: 'theming', label: 'THEMING', href: (componentName: string) => `/docs/components/${componentName}/theming` },
    { key: 'pt', label: 'PASS THROUGH', href: (componentName: string) => `/docs/components/${componentName}/pt` }
];

const DocTabs = ({ componentName }: { componentName: string }) => {
    const pathname = usePathname();
    const tab = pathname.split('/')?.[4] ?? 'features';

    return (
        <ul className="doc-tabmenu">
            {tabs.map((doc, index) => (
                <li key={index} className={cn({ 'doc-tabmenu-active': tab === doc.key })}>
                    <Link href={doc.href(componentName)}>
                        <button type="button">{doc.label}</button>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default DocTabs;
