import { Steps } from '../../lib/steps/Steps';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const items = [
        {
            label: 'Personal'
        },
        {
            label: 'Seat'
        },
        {
            label: 'Payment'
        },
        {
            label: 'Confirmation'
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
            label: 'Personal'
        },
        {
            label: 'Seat'
        },
        {
            label: 'Payment'
        },
        {
            label: 'Confirmation'
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
            label: 'Personal'
        },
        {
            label: 'Seat'
        },
        {
            label: 'Payment'
        },
        {
            label: 'Confirmation'
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
