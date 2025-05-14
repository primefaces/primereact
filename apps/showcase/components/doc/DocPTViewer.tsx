'use client';
import * as React from 'react';
import { useMemo } from 'react';
import { Store } from '../../__store__/index.mjs';

type DocPTViewerProps = {
    name: string;
};

const DocPTViewer: React.FC<React.HTMLAttributes<HTMLDivElement> & DocPTViewerProps> = ({ name, ...props }) => {
    const Component = useMemo(() => {
        return (Store as Record<string, { component: React.LazyExoticComponent<() => React.JSX.Element> }>)[name]?.component ?? null;
    }, [name]);

    return (
        <div className="w-full h-72 bg-surface-0 dark:bg-surface-950 rounded-lg border border-surface-200 dark:border-surface-800 flex items-center justify-center font-semibold" {...props}>
            {Component && <Component />}
        </div>
    );
};

export default DocPTViewer;
