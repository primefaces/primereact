'use client';
import { getPTOptions } from '@/lib/utils/getComponentOptions';
import { addClass, find, removeClass } from '@primeuix/utils/dom';
import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { Store } from '../../__store__/index.mjs';

type PTNameType = {
    name: string;
    item: string;
};

type DocPTViewerProps = {
    name: string;
    components?: string[];
};

interface PTOption {
    data: Array<{ label: string }>;
}

const DocPTViewer: React.FC<React.HTMLAttributes<HTMLDivElement> & DocPTViewerProps> = ({ name, components, ...props }) => {
    const container = React.useRef<HTMLDivElement | null>(null);
    const [PTNames, setPTNames] = useState<Array<PTNameType>>([]);
    const [hoveredElements, setHoveredElements] = useState<HTMLElement[]>([]);
    const Component = useMemo(() => {
        const componentName = name.split('-')[0];

        return (Store as Record<string, Record<string, { component: React.LazyExoticComponent<() => React.JSX.Element> }>>)[componentName]?.[name]?.component ?? null;
    }, [name]);

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
        let elements: HTMLElement[] = [];
        let selector = `[data-pc-name="${name.toLowerCase()}${item.toLowerCase()}"]`;

        if (item === 'root') {
            selector = `[data-pc-name="${name.toLowerCase()}"]`;
        }

        if (container.current) {
            elements = find(container.current, selector) as HTMLElement[];

            if (!elements || elements.length === 0) {
                selector = `[data-pc-section="${item.toLowerCase()}"]`;
                elements = find(container.current, selector) as HTMLElement[];
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

    return (
        <div ref={container} className="doc-ptviewerwrapper card" {...props}>
            <div id="doc-ptviewer" className="doc-ptviewer">
                {Component && <Component />}
            </div>
            {PTNames.length > 0 && (
                <div className="doc-ptoptions">
                    {PTNames.map((item) => (
                        <>
                            {item.item === 'root' && (
                                <div className="doc-ptheader" key={item.name}>
                                    {item.name}
                                </div>
                            )}
                            <div className="doc-ptoption" key={`${item.name}_${item.item}`} onMouseEnter={() => enterSection(item)} onMouseLeave={leaveSection}>
                                <span className="doc-ptoption-text">{item.item}</span>
                            </div>
                        </>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DocPTViewer;
