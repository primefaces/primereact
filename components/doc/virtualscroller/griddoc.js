import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { classNames } from '@/components/lib/utils/Utils';
import { VirtualScroller } from '@/components/lib/virtualscroller/VirtualScroller';
import { useState } from 'react';

export function GridDoc(props) {
    const [items] = useState(Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => `Item #${i}_${j}`)));

    const itemTemplate = (items, options) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize[0] + 'px' }}>
                {items.map((item, i) => {
                    return (
                        <div key={i} style={{ width: options.props.itemSize[1] + 'px' }}>
                            {item}
                        </div>
                    );
                })}
            </div>
        );
    };

    const code = {
        basic: `
<VirtualScroller items={items} itemSize={[50, 100]} itemTemplate={itemTemplate} orientation="both" 
    className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        `,
        javascript: `
import React, { useState } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function GridDemo() {
    const [items] = useState(Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`)));

    const itemTemplate = (items, options) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize[0] + 'px' }}>
                {items.map((item, i) => {
                    return (
                        <div key={i} style={{ width: options.props.itemSize[1] + 'px' }}>
                            {item}
                        </div>
                    );
                })}
            </div>
        );
    };

    return ( 
        <div className="card flex justify-content-center">
            <VirtualScroller items={items} itemSize={[50, 100]} itemTemplate={itemTemplate} orientation="both" className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from 'react';
import { VirtualScroller, VirtualScrollerTemplateOptions } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function GridDemo() {
    const [items] = useState<string[]>(Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`)));

    const itemTemplate = (items: string, options: VirtualScrollerTemplateOptions) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize[0] + 'px' }}>
                {items.map((item, i) => {
                    return (
                        <div key={i} style={{ width: options.props.itemSize[1] + 'px' }}>
                            {item}
                        </div>
                    );
                })}
            </div>
        );
    };

    return ( 
        <div className="card flex justify-content-center">
            <VirtualScroller items={items} itemSize={[50, 100]} itemTemplate={itemTemplate} orientation="both" className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Scrolling can be enabled vertically and horizontally when <i>orientation</i> is set as <i>both</i>. In this mode, <i>itemSize</i> should be an array where first value is the height of an item and second is the width.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <VirtualScroller items={items} itemSize={[50, 100]} itemTemplate={itemTemplate} orientation="both" className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
