import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Steps } from '@/components/lib/steps/Steps';

export function BasicDoc(props) {
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
<Steps model={items} />
`,
        javascript: `
import React from 'react'; 
import { Steps } from 'primereact/steps';

export default function BasicDemo() {
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
            <Steps model={items} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Steps } from 'primereact/steps';
import { MenuItem } from 'primereact/menuitem';

export default function BasicDemo() {
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
            <Steps model={items} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Steps requires a collection of menuitems as its <i>model</i>.
                </p>
            </DocSectionText>
            <div className="card">
                <Steps model={items} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
