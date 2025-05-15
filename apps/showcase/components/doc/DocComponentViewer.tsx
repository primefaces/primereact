'use client';
import { Store } from '@/__store__/index.mjs';
import { cn } from '@primeuix/utils';
import * as React from 'react';
import { useMemo } from 'react';

type DocComponentViewerProps = {
    name: string;
};

const DocComponentViewerContext = React.createContext<{
    isExpanded: boolean;
    setIsExpanded: (isExpanded: boolean) => void;
}>({
    isExpanded: false,
    setIsExpanded: () => {}
});

export const useDocComponentViewer = () => {
    const context = React.useContext(DocComponentViewerContext);
    if (!context) {
        throw new Error('useDocComponentViewer must be used within a DocComponentViewer');
    }
    return context;
};

const DocComponentViewer: React.FC<React.HTMLAttributes<HTMLDivElement> & DocComponentViewerProps> = ({ name, children, className, ...props }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const Codes = React.Children.toArray(children) as React.ReactElement[];
    const Component = useMemo(() => {
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
        <DocComponentViewerContext.Provider value={{ isExpanded, setIsExpanded }}>
            <div className={cn('group/component-viewer', className)} data-component-viewer="true" {...props}>
                <React.Suspense fallback={<div className="card flex items-center justify-center text-surface-500">Loading...</div>}>{Component}</React.Suspense>

                <div className={cn('relative w-full overflow-hidden [&_pre]:max-h-[160px] [&_pre]:overflow-auto ', isExpanded && '[&_pre]:!max-h-[400px]')}>{Codes[0]}</div>
            </div>
        </DocComponentViewerContext.Provider>
    );
};
export default DocComponentViewer;
