import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { classNames } from '@/components/lib/utils/Utils';
import { VirtualScroller } from '@/components/lib/virtualscroller/VirtualScroller';
import { useState } from 'react';

export function DelayDoc(props) {
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

    const code = {
        basic: `
<VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
<VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} delay={150} />
<VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} delay={500} />
        `,
        javascript: `
import React, { useState } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function DelayDemo() {
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

    return ( 
        <div className="card flex flex-wrap justify-content-center gap-5">
            <div>
                <span className="font-bold block mb-2">No Delay</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
            </div>
            <div>
                <span className="font-bold block mb-2">150ms</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} delay={150} />
            </div>
            <div>
                <span className="font-bold block mb-2">500ms</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} delay={500} />
            </div>
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from 'react';
import { VirtualScroller, VirtualScrollerTemplateOptions } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function DelayDemo() {
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

    return ( 
        <div className="card flex flex-wrap justify-content-center gap-5">
            <div>
                <span className="font-bold block mb-2">No Delay</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
            </div>
            <div>
                <span className="font-bold block mb-2">150ms</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} delay={150} />
            </div>
            <div>
                <span className="font-bold block mb-2">500ms</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} delay={500} />
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
                    The <i>delay</i> property adds a threshold to wait in milliseconds during scrolling for render optimization.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-5">
                <div>
                    <span className="font-bold block mb-2">No Delay</span>
                    <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
                </div>
                <div>
                    <span className="font-bold block mb-2">150ms</span>
                    <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} delay={150} />
                </div>
                <div>
                    <span className="font-bold block mb-2">500ms</span>
                    <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} delay={500} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
