import { Store } from '@/__store__/index.mjs';
import { cn } from '@primeuix/utils';
import React from 'react';

type DocExampleViewerProps = {
    name: string;
};

const DocExampleViewer: React.FC<React.HTMLAttributes<HTMLDivElement> & DocExampleViewerProps> = ({ name, children, className, ...props }) => {
    const Component = React.useMemo(() => {
        const [component, demo] = name.split(':');

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const Preview = (Store.examples as any)?.[component]?.[demo]?.component;

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
        <div className={cn('group/component-viewer mb-8', className)} data-component-viewer="true" {...props}>
            <React.Suspense fallback={<div className="card flex items-center justify-center text-surface-500">Loading...</div>}>{Component}</React.Suspense>

            <div className={cn('relative w-full overflow-hidden ')}>{children}</div>
        </div>
    );
};

export default DocExampleViewer;
