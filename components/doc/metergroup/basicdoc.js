import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { MeterGroup } from '@/components/lib/metergroup/MeterGroup';

export function BasicDoc(props) {
    const code = {
        basic: `
<MeterGroup values={values} />
        `,
        javascript: `
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function BasicDemo() {
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

export default function BasicDemo() {
    const values = [{ label: 'Space used', value: 15 }];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} />
        </div>
    )
}
        `
    };

    const values = [{ label: 'Space used', value: 15 }];

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    MeterGroup requires a <i>value</i> as the data to display where each item in the collection should be a type of <i>MeterItem</i>.
                </p>
            </DocSectionText>
            <div className="card">
                <MeterGroup values={values} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
