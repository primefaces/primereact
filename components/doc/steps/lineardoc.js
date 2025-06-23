import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Steps } from '@/components/lib/steps/Steps';

export function LinearDoc(props) {
    const items = [
        {
            label: 'Personal Info'
        },
        {
            label: 'Reservation'
        },
        {
            label: 'Review'
        }
    ];

    const code = {
        basic: `
<Steps readOnly model={items} />
`,
        javascript: `
import React from 'react'; 
import { Steps } from 'primereact/steps';

export default function LinearDemo() {
    const items = [
        {
            label: 'Personal Info'
        },
        {
            label: 'Reservation'
        },
        {
            label: 'Review'
        }
    ];

    return (
        <div className="card">
            <Steps readOnly model={items} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Steps } from 'primereact/steps';
import { MenuItem } from 'primereact/menuitem';

export default function LinearDemo() {
    const items: MenuItem[] = [
        {
            label: 'Personal Info'
        },
        {
            label: 'Reservation'
        },
        {
            label: 'Review'
        }
    ];

    return (
        <div className="card">
            <Steps readOnly model={items} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Steps is linear by default to enforce completion of a previus step to proceed, set <i>readOnly</i> as false for non-linear mode.
                </p>
            </DocSectionText>
            <div className="card">
                <Steps readOnly model={items} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
