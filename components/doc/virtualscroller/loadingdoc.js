import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Skeleton } from '@/components/lib/skeleton/Skeleton';
import { classNames } from '@/components/lib/utils/Utils';
import { VirtualScroller } from '@/components/lib/virtualscroller/VirtualScroller';
import Link from 'next/link';
import { useState } from 'react';

export function LoadingDoc(props) {
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => `Item #${i}`));

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
<VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
<VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} loadingTemplate={loadingTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        `,
        javascript: `
import React, { useState } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { Skeleton } from 'primereact/skeleton';
import { classNames } from 'primereact/utils';

export default function LoadingDemo() {
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));

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
        <div className="card flex flex-wrap justify-content-center gap-5">
            <div>
                <span className="font-bold block mb-2">Modal</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
            </div>
            <div>
                <span className="font-bold block mb-2">Skeleton</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} loadingTemplate={loadingTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
            </div>
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from 'react';
import { VirtualScroller, VirtualScrollerTemplateOptions } from 'primereact/virtualscroller';
import { Skeleton } from 'primereact/skeleton';
import { classNames } from 'primereact/utils';

export default function LoadingDemo() {
    const [items] = useState<string[]>(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));

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
        <div className="card flex flex-wrap justify-content-center gap-5">
            <div>
                <span className="font-bold block mb-2">Modal</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
            </div>
            <div>
                <span className="font-bold block mb-2">Skeleton</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} loadingTemplate={loadingTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Busy state is enabled by adding <i>showLoader</i> property which blocks the UI with a modal by default. Alternatively, <i>loadingTemplate</i> can be used to customize items e.g. with <Link href="/skeleton">Skeleton</Link>.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-5">
                <div>
                    <span className="font-bold block mb-2">Modal</span>
                    <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
                </div>
                <div>
                    <span className="font-bold block mb-2">Skeleton</span>
                    <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} loadingTemplate={loadingTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
