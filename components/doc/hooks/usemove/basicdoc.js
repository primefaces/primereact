import React from 'react';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { useMove } from '../../../../components/lib/hooks/Hooks';
import { classNames } from '../../../lib/utils/Utils';

export function BasicDoc(props) {
    const { ref, x, y, active } = useMove({ initialValue: { x: 0.2, y: 0.6 } });

    const code = {
        basic: `
const { ref, x, y, active } = useMove({ initialValue: { x: 0.2, y: 0.6 } });
        `,
        javascript: `
import React from 'react'; 
import {useMove } from 'primereact/hooks';
import { classNames } from 'primereact/utils';

export default function BasicDemo() {
    const { ref, x, y, active } = useMove({ initialValue: { x: 0.2, y: 0.6 } });

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <div ref={ref} className="relative w-14rem h-8rem surface-ground border-round">
                <div className="field ">
                    <span className="absolute text-lg text-color p-1">{\`x: \${Math.round(x * 100)}, y: \${Math.round(y * 100)}\`}</span>
                </div>
                <div
                    className={classNames('absolute border-circle p-3 w-1rem h-1rem flex align-items-center justify-content-center text-white', { 'bg-green-500': active, 'bg-primary-500': !active })}
                    style={{
                        left: \`calc(\${x * 100}% - 13px)\`,
                        top: \`calc(\${y * 100}% - 13px)\`,
                        cursor: "grab"
                    }}
                >
                    <i className="pi pi-arrows-alt"></i>
                </div>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import {useMove } from 'primereact/hooks';
import { classNames } from 'primereact/utils';

export default function BasicDemo() {
    const { ref, x, y, active } = useMove({ initialValue: { x: 0.2, y: 0.6 } });

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <div ref={ref} className="relative w-14rem h-8rem surface-ground border-round">
                <div className="field ">
                    <span className="absolute text-lg text-color p-1">{\`x: \${Math.round(x * 100)}, y: \${Math.round(y * 100)}\`}</span>
                </div>
                <div
                    className={classNames('absolute border-circle p-3 w-1rem h-1rem flex align-items-center justify-content-center text-white', { 'bg-green-500': active, 'bg-primary-500': !active })}
                    style={{
                        left: \`calc(\${x * 100}% - 13px)\`,
                        top: \`calc(\${y * 100}% - 13px)\`,
                        cursor: "grab"
                    }}
                >
                    <i className="pi pi-arrows-alt"></i>
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
                <div ref={ref} className="relative w-14rem h-8rem surface-ground border-round">
                    <div className="field ">
                        <span className="absolute text-lg text-color p-1">{`x: ${Math.round(x * 100)}, y: ${Math.round(y * 100)}`}</span>
                    </div>
                    <div
                        className={classNames('absolute border-circle p-3 w-1rem h-1rem flex align-items-center justify-content-center text-white', { 'bg-green-500': active, 'bg-primary-500': !active })}
                        style={{
                            left: `calc(${x * 100}% - 13px)`,
                            top: `calc(${y * 100}% - 13px)`,
                            cursor: 'grab'
                        }}
                    >
                        <i className="pi pi-arrows-alt"></i>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
