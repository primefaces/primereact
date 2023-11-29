import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Skeleton } from '@/components/lib/skeleton/Skeleton';
import { classNames } from '@/components/lib/utils/Utils';
import { VirtualScroller } from '@/components/lib/virtualscroller/VirtualScroller';
import { useEffect, useRef, useState } from 'react';

export function LazyDoc(props) {
    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(true);
    const loadLazyTimeout = useRef(null);

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onLazyLoad = (event) => {
        setLazyLoading(true);

        if (loadLazyTimeout.current) {
            clearTimeout(loadLazyTimeout.current);
        }

        //imitate delay of a backend call
        loadLazyTimeout.current = setTimeout(
            () => {
                const { first, last } = event;
                const _lazyItems = [...lazyItems];

                for (let i = first; i < last; i++) {
                    _lazyItems[i] = `Item #${i}`;
                }

                setLazyItems(_lazyItems);
                setLazyLoading(false);
            },
            Math.random() * 1000 + 250
        );
    };

    const itemTemplate = (item, options) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize + 'px' }}>
                {item}
            </div>
        );
    };

    const loadingTemplate = (options) => {
        const className = classNames('flex align-items-center p-2', {
            odd: options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                <Skeleton width={options.even ? '60%' : '50%'} height="1.3rem" />
            </div>
        );
    };

    const code = {
        basic: `
<VirtualScroller items={lazyItems} itemSize={50} itemTemplate={itemTemplate} lazy onLazyLoad={onLazyLoad} 
    loadingTemplate={loadingTemplate} showLoader loading={lazyLoading} 
    className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { Skeleton } from 'primereact/skeleton';
import { classNames } from 'primereact/utils';

export default function LazyDemo() {
    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(true);
    const loadLazyTimeout = useRef(null);

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    }, []);

    const onLazyLoad = (event) => {
        setLazyLoading(true);

        if (loadLazyTimeout.current) {
            clearTimeout(loadLazyTimeout.current);
        }

        //imitate delay of a backend call
        loadLazyTimeout.current = setTimeout(() => {
            const { first, last } = event;
            const _lazyItems = [...lazyItems];

            for (let i = first; i < last; i++) {
                _lazyItems[i] = \`Item #\${i}\`;
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    };

    const itemTemplate = (item, options) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize + 'px' }}>
                {item}
            </div>
        );
    };

    const loadingTemplate = (options) => {
        const className = classNames('flex align-items-center p-2', {
            odd: options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                <Skeleton width={options.even ? '60%' : '50%'} height="1.3rem" />
            </div>
        );
    };

    return ( 
        <div className="card flex justify-content-center">
            <VirtualScroller items={lazyItems} itemSize={50} itemTemplate={itemTemplate} lazy onLazyLoad={onLazyLoad} loadingTemplate={loadingTemplate}
                showLoader loading={lazyLoading} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { VirtualScroller, VirtualScrollerTemplateOptions, VirtualScrollerLazyEvent } from 'primereact/virtualscroller';
import { Skeleton } from 'primereact/skeleton';
import { classNames } from 'primereact/utils';

export default function LazyDemo() {
    const [lazyItems, setLazyItems] = useState<string[]>([]);
    const [lazyLoading, setLazyLoading] = useState<boolean>(true);
    const loadLazyTimeout = useRef(null);

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    }, []);

    const onLazyLoad = (event: VirtualScrollerLazyEvent) => {
        setLazyLoading(true);

        if (loadLazyTimeout.current) {
            clearTimeout(loadLazyTimeout.current);
        }

        //imitate delay of a backend call
        loadLazyTimeout.current = setTimeout(() => {
            const { first, last } = event;
            const _lazyItems = [...lazyItems];

            for (let i = first; i < last; i++) {
                _lazyItems[i] = \`Item #\${i}\`;
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    };

    const itemTemplate = (item: string, options: VirtualScrollerTemplateOptions) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize + 'px' }}>
                {item}
            </div>
        );
    };

    const loadingTemplate = (options: VirtualScrollerTemplateOptions) => {
        const className = classNames('flex align-items-center p-2', {
            odd: options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                <Skeleton width={options.even ? '60%' : '50%'} height="1.3rem" />
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <VirtualScroller items={lazyItems} itemSize={50} itemTemplate={itemTemplate} lazy onLazyLoad={onLazyLoad} loadingTemplate={loadingTemplate}
                showLoader loading={lazyLoading} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded on demand. To implement lazy loading, enable the <i>lazy</i>
                    property and implement <i>onLazyLoad</i> callback to return data.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <VirtualScroller
                    items={lazyItems}
                    itemSize={50}
                    itemTemplate={itemTemplate}
                    lazy
                    onLazyLoad={onLazyLoad}
                    loadingTemplate={loadingTemplate}
                    showLoader
                    loading={lazyLoading}
                    className="border-1 surface-border border-round"
                    style={{ width: '200px', height: '200px' }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
