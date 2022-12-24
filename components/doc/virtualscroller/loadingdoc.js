import React, { useState } from 'react';
import { VirtualScroller } from '../../lib/virtualscroller/VirtualScroller';
import { Skeleton } from '../../lib/skeleton/Skeleton';
import { classNames } from '../../lib/utils/Utils';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function LoadingDoc(props) {
    const [basicItems] = useState(Array.from({ length: 100000 }).map((_, i) => `Item #${i}`));

    const basicItemTemplate = (item, options) => {
        const className = classNames('flex align-items-center p-2', {
            odd: options.odd
        });
        const style = options.props.orientation === 'horizontal' ? { width: '50px' } : { height: '50px' };

        return (
            <div className={className} style={style}>
                {item}
            </div>
        );
    };

    const basicLoadingTemplate = (options) => {
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
<VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} showLoader delay={250}/>
<VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} showLoader delay={250} loadingTemplate={basicLoadingTemplate} />
        `,
        javascript: `
import { useState } 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { Skeleton } from 'primereact/skeleton';
import { classNames } from 'primereact/utils';
import './VirtualScrollerDemo.css';

export default function LoadingDoc() {
    const [basicItems] = useState(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));

    const basicItemTemplate = (item, options) => {
        const className = classNames('flex align-items-center p-2', {
            'odd': options.odd
        });
        const style = options.props.orientation === 'horizontal' ? { width: '50px' } : { height: '50px' };

        return <div className={className} style={style}>{item}</div>;
    }

    const basicLoadingTemplate = (options) => {
        const className = classNames('flex align-items-center p-2', {
            'odd': options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                <Skeleton width={options.even ? '60%' : '50%'} height="1.3rem" />
            </div>
        );
    }

    return ( 
        <div className="card virtualscroller-demo">
            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} showLoader delay={250}/>
            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} showLoader delay={250} loadingTemplate={basicLoadingTemplate} />
        </div>
    );
}
        `,
        typescript: `
import { useState } 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { Skeleton } from 'primereact/skeleton';
import { classNames } from 'primereact/utils';
import './VirtualScrollerDemo.css';

export default function LoadingDoc() {
    const [basicItems] = useState(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));

    const basicItemTemplate = (item, options) => {
        const className = classNames('flex align-items-center p-2', {
            'odd': options.odd
        });
        const style = options.props.orientation === 'horizontal' ? { width: '50px' } : { height: '50px' };

        return <div className={className} style={style}>{item}</div>;
    }

    const basicLoadingTemplate = (options) => {
        const className = classNames('flex align-items-center p-2', {
            'odd': options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                <Skeleton width={options.even ? '60%' : '50%'} height="1.3rem" />
            </div>
        );
    }

    return (
        <div className="card virtualscroller-demo">
            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} showLoader delay={250}/>
            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} showLoader delay={250} loadingTemplate={basicLoadingTemplate} />
        </div>
    )
}
        `,
        css: `
/* VirtualScrollerDemo.css */

.virtualscroller-demo .odd {
    background-color: var(--surface-b);
}

.virtualscroller-demo .p-virtualscroller {
    height: 200px;
    width: 200px;
    border: 1px solid var(--surface-d);
}

.virtualscroller-demo .p-horizontal-scroll .p-virtualscroller-content {
    display: flex;
    flex-direction: row;
}
    `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    VirtualScroller has a special loader. It can be activated with the <i>showLoader</i> property. In addition, <i>loadingTemplate</i> can be used to add custom loaders to item elements.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center align-items-center flex-wrap">
                <div className="flex flex-column mr-3 mt-3">
                    <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} showLoader delay={250} />
                </div>
                <div className="flex flex-column mr-3 mt-3">
                    <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} showLoader delay={250} loadingTemplate={basicLoadingTemplate} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
