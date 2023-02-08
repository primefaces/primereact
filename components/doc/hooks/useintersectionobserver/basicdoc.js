import React, { useRef } from 'react';
import { useIntersectionObserver } from '../../../lib/hooks/Hooks';
import { classNames } from '../../../lib/utils/Utils';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function BasicDoc(props) {
    const ref = useRef(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });

    const code = {
        basic: `
const ref = useRef(null);
const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });
        `,
        javascript: `
import React, { useRef } from 'react'; 
import { useIntersectionObserver } from 'primereact/hooks';
import { classNames } from 'primereact/utils';

export default function BasicDemo() {
    const ref = useRef(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <h2 className="text-color">{isVisible ? 'Visible' : 'Not Visible'}</h2>
            <div className="border-dashed surface-border w-20rem h-15rem align-items-center overflow-y-scroll gap-2">
                <div className="flex flex-column justify-content-center align-items-center" style={{ height: 450 }}>
                    <div ref={ref} className={classNames('flex mt-2 justify-content-center align-items-center w-full h-6rem border-round bg-blue-500 p-3 text-white font-bold text-lg', { 'bg-green-500': isVisible })} />
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

export default function BasicDemo() {
    const ref = useRef(null);
    const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <h2 className="text-color">{isVisible ? 'Visible' : 'Not Visible'}</h2>
            <div className="border-dashed surface-border w-20rem h-15rem align-items-center overflow-y-scroll gap-2">
                <div className="flex flex-column justify-content-center align-items-center" style={{ height: 450 }}>
                    <div ref={ref} className={classNames('flex mt-2 justify-content-center align-items-center w-full h-6rem border-round bg-blue-500 p-3 text-white font-bold text-lg', { 'bg-green-500': isVisible })} />
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
                {/**
                 * @todo Add a description
                 */}
            </DocSectionText>

            <div className="card flex flex-column justify-content-center align-items-center gap-2">
                <h2 className="text-color">{isVisible ? 'Visible' : 'Not Visible'}</h2>
                <div className="border-dashed surface-border w-20rem h-15rem align-items-center overflow-y-scroll gap-2">
                    <div className="flex flex-column justify-content-center align-items-center" style={{ height: 450 }}>
                        <div ref={ref} className={classNames('flex mt-2 justify-content-center align-items-center w-full h-6rem border-round bg-blue-500 p-3 text-white font-bold text-lg', { 'bg-green-500': isVisible })} />
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
