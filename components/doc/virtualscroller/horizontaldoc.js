import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { classNames } from '@/components/lib/utils/Utils';
import { VirtualScroller } from '@/components/lib/virtualscroller/VirtualScroller';
import { useState } from 'react';

export function HorizontalDoc(props) {
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => `Item #${i}`));

    const itemTemplate = (item, options) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ width: options.props.itemSize + 'px', writingMode: 'vertical-lr' }}>
                {item}
            </div>
        );
    };

    const code = {
        basic: `
<VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} orientation="horizontal"
    className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        `,
        javascript: `
import React, { useState } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function HorizontalDemo() {
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));

    const itemTemplate = (item, options) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ width: options.props.itemSize + 'px', writingMode: 'vertical-lr' }}>
                {item}
            </div>
        );
    };

    return ( 
        <div className="card flex justify-content-center">
            <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} orientation="horizontal" className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from 'react';
import { VirtualScroller, VirtualScrollerTemplateOptions } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function HorizontalDemo() {
    const [items] = useState<string[]>(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));

    const itemTemplate = (item: string, options: VirtualScrollerTemplateOptions) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ width: options.props.itemSize + 'px', writingMode: 'vertical-lr' }}>
                {item}
            </div>
        );
    };

    return ( 
        <div className="card flex justify-content-center">
            <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} orientation="horizontal" className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Setting <i>orientation</i> to <i>horizontal</i> enables scrolling horizontally. In this case, the <i>itemSize</i> should refer to the width of an item.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} orientation="horizontal" className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
