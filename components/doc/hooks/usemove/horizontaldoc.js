import React from 'react';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
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
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <div ref={ref} className="flex align-items-center justify-content-center relative surface-ground w-14rem z-1" style={{ height: '8px' }}>
                <div
                    className="absolute bg-primary-500 z-2"
                    style={{
                        left: 0,
                        width: \`\${x * 100}%\`,
                        height: '8px'
                    }}
                ></div>
                <div
                    className='absolute block border-circle border-solid border-2 border-primary -ml-2 bg-white z-3'
                    style={{
                        width: '18px',
                        height: '18px',
                        left: \`calc(\${x * 100}%)\`,
                        cursor: 'grab'
                    }}
                ></div>
            </div>
            <span>Value {Math.round(x * 100)}</span>
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
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <div ref={ref} className="flex align-items-center justify-content-center relative surface-ground w-14rem z-1" style={{ height: '8px' }}>
                <div
                    className="absolute bg-primary-500 z-2"
                    style={{
                        left: 0,
                        width: \`\${x * 100}%\`,
                        height: '8px'
                    }}
                ></div>
                <div
                    className='absolute block border-circle border-solid border-2 border-primary -ml-2 bg-white z-3'
                    style={{
                        width: '18px',
                        height: '18px',
                        left: \`calc(\${x * 100}%)\`,
                        cursor: 'grab'
                    }}
                ></div>
            </div>
            <span>Value {Math.round(x * 100)}</span>
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
                <div ref={ref} className="flex align-items-center justify-content-center relative surface-ground w-14rem z-1" style={{ height: '8px' }}>
                    <div
                        className="absolute bg-primary-500 z-2"
                        style={{
                            left: 0,
                            width: `${x * 100}%`,
                            height: '8px'
                        }}
                    ></div>
                    <div
                        className="absolute block border-circle border-solid border-2 border-primary -ml-2 bg-white z-3"
                        style={{
                            width: '18px',
                            height: '18px',
                            left: `calc(${x * 100}%)`,
                            cursor: 'grab'
                        }}
                    ></div>
                </div>
                <span>Value {Math.round(x * 100)}</span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
