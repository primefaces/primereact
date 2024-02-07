import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { MeterGroup } from '@/components/lib/metergroup/MeterGroup';

export function VerticalDoc(props) {
    const code = {
        basic: `
<MeterGroup values={values} />
        `,
        javascript: `
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function VerticalDemo() {
    const values = [{ label: 'Space used', value: 15 }];

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

export default function VerticalDemo() {
    const values = [{ label: 'Space used', value: 15 }];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} />
        </div>
    )
}
        `
    };

    const values = [
        { label: 'Apps', color: '#34d399', value: 24 },
        { label: 'Messages', color: '#fbbf24', value: 16 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 12 }
    ];

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    MeterGroup requires a <i>value</i> as the data to display where each item in the collection should be a type of <i>MeterItem</i>.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center" style={{ height: '360px' }}>
                <MeterGroup values={values} orientation="vertical" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
