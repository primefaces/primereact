import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Steps } from '../../../lib/steps/Steps';

export function PTDoc(props) {
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
<Steps
    model={items}
    pt={{
    root: { className: 'w-30rem' }
    }}
/>
        `,
        javascript: `
import React from 'react'; 
import { Steps } from 'primereact/steps';

export default function PTDemo() {
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
        <div class="card flex justify-content-center">
            <Steps
                model={items}
                pt={{
                    root: { className: 'w-30rem' }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Steps } from 'primereact/steps';
import { MenuItem } from 'primereact/menuitem';

export default function PTDemo() {
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
        <div class="card flex justify-content-center">
            <Steps
                model={items}
                pt={{
                    root: { className: 'w-30rem' }
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div class="card flex justify-content-center">
                <Steps
                    model={items}
                    pt={{
                        root: { className: 'w-30rem' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
