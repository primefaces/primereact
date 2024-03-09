import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useMove } from '../../../../components/lib/hooks/Hooks';

export function HorizontalDoc(props) {
    const { ref, x } = useMove({ initialValue: { x: 0.2 } });

    const code = {
        basic: `
const { ref, x } = useMove({ initialValue: { x: 0.2 } });
        `,
        javascript: `
import React from 'react'; 
import {useMove } from 'primereact/hooks';

export default function HorizontalDemo() {
    const { ref, x } = useMove({ initialValue: { x: 0.2 } });

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <div ref={ref} className="flex align-items-center justify-content-center relative surface-ground w-14rem z-1" style={{ height: '8px' }}>
                <div className="absolute bg-teal-500 z-2"
                    style={{
                        left: 0,
                        width: \`\${x * 100}%\`,
                        height: '8px'
                    }}>
                </div>
                <div className="absolute block border-circle border-solid border-2 border-teal-500 -ml-2 surface-overlay z-3"
                    style={{
                        width: '18px',
                        height: '18px',
                        left: \`calc(\${x * 100}%)\`,
                        cursor: 'grab'
                    }}>
                </div>
            </div>
            <span className="text-xl">
                Value: <strong>{Math.round(x * 100)}</strong>
            </span>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import {useMove } from 'primereact/hooks';

export default function HorizontalDemo() {
    const { ref, x } = useMove({ initialValue: { x: 0.2 } });

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <div ref={ref} className="flex align-items-center justify-content-center relative surface-ground w-14rem z-1" style={{ height: '8px' }}>
                <div className="absolute bg-teal-500 z-2"
                    style={{
                        left: 0,
                        width: \`\${x * 100}%\`,
                        height: '8px'
                    }}>
                </div>
                <div className="absolute block border-circle border-solid border-2 border-teal-500 -ml-2 surface-overlay z-3"
                    style={{
                        width: '18px',
                        height: '18px',
                        left: \`calc(\${x * 100}%)\`,
                        cursor: 'grab'
                    }}>
                </div>
            </div>
            <span className="text-xl">
                Value: <strong>{Math.round(x * 100)}</strong>
            </span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>A horizontal slider implementation by utilizing the x-axis only.</p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center gap-3">
                <div ref={ref} className="flex align-items-center justify-content-center relative surface-ground w-14rem z-1" style={{ height: '8px' }}>
                    <div
                        className="absolute bg-teal-500 z-2"
                        style={{
                            left: 0,
                            width: `${x * 100}%`,
                            height: '8px'
                        }}
                    ></div>
                    <div
                        className="absolute block border-circle border-solid border-2 border-teal-500 -ml-2 surface-overlay z-3"
                        style={{
                            width: '18px',
                            height: '18px',
                            left: `calc(${x * 100}%)`,
                            cursor: 'grab'
                        }}
                    ></div>
                </div>
                <span className="text-xl">
                    Value: <strong>{Math.round(x * 100)}</strong>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
