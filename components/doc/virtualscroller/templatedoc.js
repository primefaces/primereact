import React, { useState } from 'react';
import { VirtualScroller } from '../../lib/virtualscroller/VirtualScroller';
import { Skeleton } from '../../lib/skeleton/Skeleton';
import { classNames } from '../../lib/utils/Utils';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const [templateItems] = useState(Array.from({ length: 10000 }).map((_, i) => `Item #${i}`));

    const itemTemplate = (item, options) => {
        const { index, count, first, last, even, odd } = options;
        const className = classNames('custom-scroll-item scroll-item', {
            odd: odd
        });

        return (
            <div className={className}>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{`Item: ${item}`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{`Index: ${index}`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{`Count: ${count}`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{`First: ${first}`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{`Last: ${last}`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{`Even: ${even}`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{`Odd: ${odd}`}</div>
            </div>
        );
    };

    const loadingTemplate = (options) => {
        const className = classNames('custom-scroll-item scroll-item', {
            odd: options.odd
        });

        return (
            <div className={className}>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="60%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="50%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="60%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="50%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="60%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="50%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="60%" height="1.2rem" />
                </div>
            </div>
        );
    };

    const code = {
        basic: `
<VirtualScroller items={templateItems} itemSize={25 * 7} itemTemplate={itemTemplate} showLoader delay={250} loadingTemplate={loadingTemplate} />
        `,
        javascript: `
import { useState } 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { Skeleton } from 'primereact/skeleton';
import { classNames } from 'primereact/utils';
import './VirtualScrollerDemo.css';

export default function TemplateDoc() {
    const [templateItems] = useState(Array.from({ length: 10000 }).map((_, i) => \`Item #\${i}\`));

    const itemTemplate = (item, options) => {
        const { index, count, first, last, even, odd } = options;
        const className = classNames('custom-scroll-item scroll-item', {
            odd: odd
        });

        return (
            <div className={className}>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Item: \${item}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Index: \${index}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Count: \${count}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`First: \${first}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Last: \${last}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Even: \${even}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Odd: \${odd}\`}</div>
            </div>
        );
    };

    const loadingTemplate = (options) => {
        const className = classNames('custom-scroll-item scroll-item', {
            odd: options.odd
        });

        return (
            <div className={className}>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="60%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="50%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="60%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="50%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="60%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="50%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="60%" height="1.2rem" />
                </div>
            </div>
        );
    };

    return ( 
        <div className="card virtualscroller-demo">
            <VirtualScroller items={templateItems} itemSize={25 * 7} itemTemplate={itemTemplate} showLoader delay={250} loadingTemplate={loadingTemplate} />
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

export default function TemplateDoc() {
    const [templateItems] = useState(Array.from({ length: 10000 }).map((_, i) => \`Item #\${i}\`));

    const itemTemplate = (item, options) => {
        const { index, count, first, last, even, odd } = options;
        const className = classNames('custom-scroll-item scroll-item', {
            odd: odd
        });

        return (
            <div className={className}>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Item: \${item}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Index: \${index}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Count: \${count}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`First: \${first}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Last: \${last}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Even: \${even}\`}</div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>{\`Odd: \${odd}\`}</div>
            </div>
        );
    };

    const loadingTemplate = (options) => {
        const className = classNames('custom-scroll-item scroll-item', {
            odd: options.odd
        });

        return (
            <div className={className}>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="60%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="50%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="60%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="50%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="60%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="50%" height="1.2rem" />
                </div>
                <div className="flex align-items-center px-2" style={{ height: '25px' }}>
                    <Skeleton width="60%" height="1.2rem" />
                </div>
            </div>
        );
    };

    return (
        <div className="card virtualscroller-demo">
            <VirtualScroller items={templateItems} itemSize={25 * 7} itemTemplate={itemTemplate} showLoader delay={250} loadingTemplate={loadingTemplate} />
        </div>
        )
}
        `,
        css: `
/* VirtualScrollerDemo.css */

.virtualscroller-demo .scroll-item {
    display: flex;
    align-items: center;
}

.virtualscroller-demo .custom-scroll-item {
    flex-direction: column;
    align-items: stretch;
}

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

.virtualscroller-demo .p-horizontal-scroll .scroll-item {
    writing-mode: vertical-lr;
}
    `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    VirtualScroller has a HTML div element to wrap the all items. But in some cases, it may be desirable to define a completely special wrapper element instead of the HTML div element. The <i>contentTemplate</i> property can be used
                    for this. This will be especially necessary to maintain the DOM layout and provide accessibility.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center align-items-center flex-wrap">
                <div className="flex flex-column mr-3 mt-3">
                    <VirtualScroller items={templateItems} itemSize={25 * 7} itemTemplate={itemTemplate} showLoader delay={250} loadingTemplate={loadingTemplate} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
