import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { MeterGroup } from '@/components/lib/metergroup/MeterGroup';

export function MultipleDoc(props) {
    const code = {
        basic: `
<MeterGroup values={values} />
        `,
        javascript: `
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function MultipleDemo() {
    const values = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} />
        </div>
    )
}
        `,
        typescript: `
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function MultipleDemo() {
    const values = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} />
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
                <p>Adding more items to the array displays the meters in a group.</p>
            </DocSectionText>
            <div className="card">
                <MeterGroup values={values} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
