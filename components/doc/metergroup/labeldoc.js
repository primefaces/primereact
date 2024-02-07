import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { MeterGroup } from '@/components/lib/metergroup/MeterGroup';

export function LabelDoc(props) {
    const code = {
        basic: `
<MeterGroup values={values} />
        `,
        javascript: `
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function LabelDemo() {
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

export default function LabelDemo() {
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
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The position of the labels relative to the meters is defined using the <i>labelPosition</i> property. The default orientation of the labels is horizontal, and the vertical alternative is available through the{' '}
                    <i>labelOrientation</i> option.
                </p>
            </DocSectionText>
            <div className="card">
                <MeterGroup values={values} labelPosition="start" labelOrientation="vertical" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
