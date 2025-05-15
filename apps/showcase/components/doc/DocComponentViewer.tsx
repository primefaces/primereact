'use client';
import { Store } from '@/__store__/index.mjs';
import { cn } from '@primeuix/utils';
import * as React from 'react';

type DocComponentViewerProps = {
    name: string;
};

const DocComponentViewer: React.FC<React.HTMLAttributes<HTMLDivElement> & DocComponentViewerProps> = ({ name, children, className, ...props }) => {
    const Codes = React.Children.toArray(children) as React.ReactElement[];
    const Component = React.useMemo(() => {
        const [component, demo] = name.split(':');

        const Preview = (Store as Record<string, Record<string, { component: React.LazyExoticComponent<() => React.JSX.Element> }>>)[component]?.[demo]?.component;

        if (!Preview) {
            return (
                <div className="card flex items-center justify-center gap-2">
                    <p className="text-base text-surface-500">
                        <code className="px-1 py-0.5 rounded-md bg-surface-500/10 border border-surface-500/20">{demo}</code> not found.
                    </p>
                </div>
            );
        }

        return <Preview />;
    }, [name]);

    return (
        <div className={cn('group/component-viewer', className)} data-component-viewer="true" {...props}>
            <React.Suspense fallback={<div className="card flex items-center justify-center text-surface-500">Loading...</div>}>{Component}</React.Suspense>

            <div className={cn('relative w-full overflow-hidden ')}>{Codes[0]}</div>
        </div>
    );
};

export default DocComponentViewer;
