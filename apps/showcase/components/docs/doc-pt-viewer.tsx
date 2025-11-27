'use client';
import { Store } from '@/__store__';
import { getPTOptions } from '@/utils/getComponentOptions';
import { cn } from '@primeuix/utils';
import { addClass, find, removeClass } from '@primeuix/utils/dom';
import * as React from 'react';
import { useEffect, useState } from 'react';

type PTNameType = {
    name: string;
    item: string;
};

interface PTOption {
    data: Array<{ label: string }>;
}

export default function DocPtViewer({ components, className, name, ...props }: React.ComponentProps<'div'> & { components?: string[]; name: string }) {
    const container = React.useRef<HTMLDivElement | null>(null);
    const [PTNames, setPTNames] = useState<Array<PTNameType>>([]);
    const [hoveredElements, setHoveredElements] = useState<HTMLElement[]>([]);

    const Demo = Store[name.split('-')[0]]?.[name]?.component;

    useEffect(() => {
        const newPTNames: Array<PTNameType> = [];

        components?.forEach((cmp) => {
            const options = getPTOptions(cmp) as PTOption;

            options.data.forEach((option) => {
                newPTNames.push({
                    name: cmp,
                    item: option.label ?? ''
                });
            });
        });

        setPTNames(newPTNames);
    }, [components]);

    const enterSection = (enteredItem: PTNameType) => {
        const { name, item } = enteredItem;
        const nameToLower = name.toLowerCase();
        const itemToLower = item.toLowerCase();
        let elements: HTMLElement[] = [];

        const selectors = [item === 'root' ? `[data-pc-name="${nameToLower}"]` : `[data-pc-name="${nameToLower}${itemToLower}"]`, `[data-pc-section="${itemToLower}"]`, `[data-pc-name="${itemToLower}"]`];

        const searchContexts = [container.current, document.querySelector('body')].filter(Boolean) as HTMLElement[];

        for (const selector of selectors) {
            for (const context of searchContexts) {
                elements = find(context, selector) as HTMLElement[];

                if (elements && elements.length > 0) {
                    break;
                }
            }

            if (elements && elements.length > 0) {
                break;
            }
        }

        elements?.forEach((el) => {
            addClass(el, '!ring-3 !ring-blue-500 !z-10');
        });

        setHoveredElements(elements);
    };

    const leaveSection = () => {
        hoveredElements.forEach((el) => {
            removeClass(el, '!ring-3 !ring-blue-500 !z-10');
        });

        setHoveredElements([]);
    };

    if (!Demo) {
        return (
            <div className="card">
                <p className="text-center">
                    The component&apos;s PT demo referenced as <code className="bg-surface-100 dark:bg-surface-800 p-1 rounded-md ">{name}</code> is unavailable or does not exist.
                </p>
            </div>
        );
    }

    return (
        <div ref={container} className={cn('doc-ptviewerwrapper card', className)} {...props}>
            <React.Suspense fallback={<div className="py-24 w-full h-full flex items-center justify-center text-surface-500">Loading...</div>}>
                <div id="doc-ptviewer" className="doc-ptviewer">
                    <Demo />
                </div>
                {PTNames.length > 0 && (
                    <div className="doc-ptoptions">
                        {PTNames.map((item) => (
                            <React.Fragment key={`${item.name}_${item.item}`}>
                                {item.item === 'root' && <div className="doc-ptheader">{item.name}</div>}
                                <div className="doc-ptoption" onMouseEnter={() => enterSection(item)} onMouseLeave={leaveSection}>
                                    <span className="doc-ptoption-text">{item.item}</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </React.Suspense>
        </div>
    );
}
