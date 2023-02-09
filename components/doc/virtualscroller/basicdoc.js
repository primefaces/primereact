import React, { useState } from 'react';
import { VirtualScroller } from '../../lib/virtualscroller/VirtualScroller';
import { classNames } from '../../lib/utils/Utils';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [basicItems] = useState(Array.from({ length: 100000 }).map((_, i) => `Item #${i}`));
    const [multiItems] = useState(Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => `Item #${i}_${j}`)));

    const basicItemTemplate = (item, options) => {
        const className = classNames('scroll-item flex align-items-center p-2', {
            odd: options.odd
        });
        const style = options.props.orientation === 'horizontal' ? { width: '50px' } : { height: '50px' };

        return (
            <div className={className} style={style}>
                {item}
            </div>
        );
    };

    const multiItemTemplate = (items, options) => {
        const className = classNames('flex align-items-center p-2', {
            odd: options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                {items.map((item, i) => {
                    return (
                        <div key={i} style={{ width: '100px' }}>
                            {item}
                        </div>
                    );
                })}
            </div>
        );
    };

    const code = {
        basic: `
<VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} />
<VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} orientation="horizontal" />
<VirtualScroller items={multiItems} itemSize={[50, 100]} itemTemplate={multiItemTemplate} orientation="both" />
        `,
        javascript: `
import React, { useState } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';
import './VirtualScrollerDemo.css';

export default function BasicDoc() {
    const [basicItems] = useState(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));
    const [multiItems] = useState(Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`)));

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

    const multiItemTemplate = (items, options) => {
        const className = classNames('flex align-items-center p-2', {
            odd: options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                {items.map((item, i) => {
                    return (
                        <div key={i} style={{ width: '100px' }}>
                            {item}
                        </div>
                    );
                })}
            </div>
        );
    };

    return ( 
        <div className="card virtualscroller-demo">
            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} />
            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} orientation="horizontal" />
            <VirtualScroller items={multiItems} itemSize={[50, 100]} itemTemplate={multiItemTemplate} orientation="both" />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';
import './VirtualScrollerDemo.css';

export default function BasicDoc() {
    const [basicItems] = useState(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));
    const [multiItems] = useState(Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`)));

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

    const multiItemTemplate = (items, options) => {
        const className = classNames('flex align-items-center p-2', {
            odd: options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                {items.map((item, i) => {
                    return (
                        <div key={i} style={{ width: '100px' }}>
                            {item}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="card virtualscroller-demo">
            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} />
            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} orientation="horizontal" />
            <VirtualScroller items={multiItems} itemSize={[50, 100]} itemTemplate={multiItemTemplate} orientation="both" />
        </div>
    )
}
        `,
        extFiles: {
            'VirtualScrollerDemo.css': `
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

.virtualscroller-demo .p-horizontal-scroll .scroll-item {
    writing-mode: vertical-lr;
}
    `
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    VirtualScroller is a performant approach to handle huge data efficiently. VirtualScroller is used to display huge data. It periodically adds special elements defined according to the scroll's position to the DOM. The{' '}
                    <i>itemSize</i> and <i>itemTemplate</i> properties are required on component. In addition, an initial array is required based on the total number of items to display. VirtualScroller automatically calculates how many items will be
                    displayed in the view according to <i>itemSize</i> using a specified scroll height. Its scroll height can be adjusted with <i>scrollHeight</i> property or height property of CSS.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center align-items-center flex-wrap">
                <div className="flex flex-column mr-3 mt-3">
                    <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} />
                </div>
                <div className="flex flex-column mr-3 mt-3">
                    <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} orientation="horizontal" />
                </div>

                <div className="flex flex-column mr-3 mt-3">
                    <VirtualScroller items={multiItems} itemSize={[50, 100]} itemTemplate={multiItemTemplate} orientation="both" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
