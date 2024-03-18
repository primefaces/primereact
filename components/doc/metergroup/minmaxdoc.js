import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { MeterGroup } from '@/components/lib/metergroup/MeterGroup';

export function MinMaxDoc(props) {
    const code = {
        basic: `
<MeterGroup values={values} max="200" />
        `,
        javascript: `
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function MinMaxDemo() {
    const values = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} max="200" />
        </div>
    )
}
        `,
        typescript: `
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function MinMaxDemo() {
    const values = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }    
    ];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} max="200" />
        </div>
    )
}
        `
    };

    const values = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Boundaries are configured with the <i>min</i> and <i>max</i> values whose defaults are 0 and 100 respectively.
                </p>
            </DocSectionText>
            <div className="card">
                <MeterGroup values={values} max="200" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
