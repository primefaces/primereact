import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Steps } from '@/components/lib/steps/Steps';

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
        <div className="card flex justify-content-center">
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
        <div className="card flex justify-content-center">
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
            <div className="card flex justify-content-center">
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
