import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useIntersectionObserver } from '@/components/lib/hooks/Hooks';
import { classNames } from '@/components/lib/utils/Utils';
import { useRef } from 'react';

export function ThresholdDoc(props) {
    const elementRef = useRef(null);
    const visible = useIntersectionObserver(elementRef, { threshold: 0.5 });

    const code = {
        basic: `
const elementRef = useRef(null);
const visible = useIntersectionObserver(elementRef, { threshold: 0.5 });
        `,
        javascript: `
import React, { useRef } from 'react';
import { useIntersectionObserver } from 'primereact/hooks';
import { classNames } from 'primereact/utils';

export default function ThresholdDemo() {
    const elementRef = useRef(null);
    const visible = useIntersectionObserver(elementRef, { threshold: 0.5 });

    return (
        <div className="card flex flex-column align-items-center">
            <div className="text-xl font-bold mb-3">{visible ? 'Visible' : 'Not Visible'}</div>
            <div className="border-dashed surface-border border-round w-20rem overflow-y-scroll p-3" style={{ height: '300px' }}>
                <div className="flex align-items-center" style={{ height: '900px' }}>
                    <div ref={elementRef} className={classNames('w-full h-8rem border-round p-3 font-bold border-1 border-primary flex align-items-center justify-content-center transition-all transition-duration-300', { 'bg-primary': visible })}>
                        <i className="pi pi-prime text-4xl"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { useIntersectionObserver } from 'primereact/hooks';
import { classNames } from 'primereact/utils';

export default function ThresholdDemo() {
    const elementRef = useRef(null);
    const visible = useIntersectionObserver(elementRef, { threshold: 0.5 });

    return (
        <div className="card flex flex-column align-items-center">
            <div className="text-xl font-bold mb-3">{visible ? 'Visible' : 'Not Visible'}</div>
            <div className="border-dashed surface-border border-round w-20rem overflow-y-scroll p-3" style={{ height: '300px' }}>
                <div className="flex align-items-center" style={{ height: '900px' }}>
                    <div ref={elementRef} className={classNames('w-full h-8rem border-round p-3 font-bold border-1 border-primary flex align-items-center justify-content-center transition-all transition-duration-300', { 'bg-primary': visible })}>
                        <i className="pi pi-prime text-4xl"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The <i>threshold</i> option defines the percentage of how much of the element should be visible, for example <i>0.5</i> means at least half of the element.
                </p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center">
                <div className="text-xl font-bold mb-3">{visible ? 'Visible' : 'Not Visible'}</div>
                <div className="border-dashed surface-border border-round w-20rem overflow-y-scroll p-3" style={{ height: '300px' }}>
                    <div className="flex align-items-center" style={{ height: '900px' }}>
                        <div ref={elementRef} className={classNames('w-full h-8rem border-round p-3 font-bold border-1 border-primary flex align-items-center justify-content-center transition-all transition-duration-300', { 'bg-primary': visible })}>
                            <i className="pi pi-prime text-4xl"></i>
                        </div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
