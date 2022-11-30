import React, { useState } from 'react';
import { VirtualScroller } from '../../lib/virtualscroller/VirtualScroller';
import { classNames } from '../../lib/utils/Utils';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ScrollDelayDoc(props) {
    const [basicItems] = useState(Array.from({ length: 100000 }).map((_, i) => `Item #${i}`));

    const basicItemTemplate = (item, options) => {
        const className = classNames('scroll-item p-2', {
            odd: options.odd
        });
        const style = options.props.orientation === 'horizontal' ? { width: '50px' } : { height: '50px' };

        return (
            <div className={className} style={style}>
                {item}
            </div>
        );
    };

    const code = {
        basic: `
<VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} />
<VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} delay={150} />
<VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} delay={250} />
        `,
        javascript: `
import { useState } 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function ScrollDelayDoc() {
    const [basicItems] = useState(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));

    const basicItemTemplate = (item, options) => {
        const className = classNames('scroll-item p-2', {
            'odd': options.odd
        });
        const style = options.props.orientation === 'horizontal' ? { width: '50px' } : { height: '50px' };

        return <div className={className} style={style}>{item}</div>;
    }

    return ( 
        <div>
            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} />
            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} delay={150} />
            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} delay={250} />
        </div>
    );
}
        `,
        typescript: `
import { useState } 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function ScrollDelayDoc() {
    const [basicItems] = useState(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));

    const basicItemTemplate = (item, options) => {
        const className = classNames('scroll-item p-2', {
            'odd': options.odd
        });
        const style = options.props.orientation === 'horizontal' ? { width: '50px' } : { height: '50px' };

        return <div className={className} style={style}>{item}</div>;
    }

    return (
        <div>
            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} />
            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} delay={150} />
            <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} delay={250} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Scroll Delay</p>
            </DocSectionText>
            <div className="card flex justify-content-center align-items-center flex-wrap">
                <div className="flex flex-column mr-3 mt-3">
                    <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} />
                </div>
                <div className="flex flex-column mr-3 mt-3">
                    <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} delay={150} />
                </div>

                <div className="flex flex-column mr-3 mt-3">
                    <VirtualScroller items={basicItems} itemSize={50} itemTemplate={basicItemTemplate} delay={250} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
