'use client';
import { cn } from '@primeuix/utils';
import * as React from 'react';
import { useMemo } from 'react';
import { Store } from '../../__store__/index.mjs';

type DocComponentViewerProps = {
    name: string;
    filePath: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DocComponentViewer: React.FC<React.HTMLAttributes<HTMLDivElement> & DocComponentViewerProps> = ({ name, filePath, children, ...props }) => {
    const [isCodeExpanded, setIsCodeExpanded] = React.useState(false);
    const Codes = React.Children.toArray(children) as React.ReactElement[];
    const Component = useMemo(() => {
        return (Store as Record<string, { component: React.LazyExoticComponent<() => React.JSX.Element> }>)[name]?.component ?? null;
    }, [name]);
    const toggleExpanded = () => {
        setIsCodeExpanded(!isCodeExpanded);
    };
    return (
        <div {...props} className="w-full">
            {Component && <Component />}

            <div className="flex flex-col space-y-4">
                <div
                    className={cn(
                        'relative w-full overflow-hidden rounded-lg border border-surface-800 [&_pre]:border-none [&_pre]:rounded-none [&_pre]:rounded-b-none [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto [&_pre]:pb-4 [&_pre]:transition-all',
                        !isCodeExpanded && '[&_pre]:!max-h-[120px]'
                    )}
                >
                    {Codes[0]}
                    <div className="relative w-full h-9 border-t border-surface-800">
                        <div className={cn('absolute inset-x-0 h-16 -top-16 -translate-y-px bg-gradient-to-b from-surface-950/5 to-surface-950 pointer-events-none', isCodeExpanded && 'opacity-0')}></div>
                        <button onClick={toggleExpanded} className="w-full h-full bg-surface-900 hover:bg-surface-800 transition-colors flex items-center justify-center text-surface-200 font-medium cursor-pointer">
                            {isCodeExpanded ? 'Collapse' : 'Expand'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DocComponentViewer;
