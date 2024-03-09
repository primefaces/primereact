import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Avatar } from '@/components/lib/avatar/Avatar';

export function PTDoc(props) {
    const code = {
        basic: `
<Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
    pt={{ image: { className: 'w-4rem h-4rem' } }} />
        `,
        javascript: `
import React from 'react';
import { Avatar } from 'primereact/avatar';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                pt={{ image: { className: 'w-4rem h-4rem' } }} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { Avatar } from 'primereact/avatar';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                pt={{ image: { className: 'w-4rem h-4rem' } }} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" pt={{ image: { className: 'w-4rem h-4rem' } }} />
            </div>

            <DocSectionCode code={code} />
        </>
    );
}
