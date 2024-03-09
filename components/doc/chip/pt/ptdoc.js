import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Chip } from '@/components/lib/chip/Chip';

export function PTDoc(props) {
    const code = {
        basic: `
<Chip
    label="Amy Elsner"
    image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
    pt={{
        root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } },
        label: { className: 'text-white' }
    }}
/>
        `,
        javascript: `
import React from 'react'; 
import { Chip } from 'primereact/chip';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <Chip
                label="Amy Elsner"
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                pt={{
                    root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } },
                    label: { className: 'text-white' }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Chip } from 'primereact/chip';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <Chip
                label="Amy Elsner"
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                pt={{
                    root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } },
                    label: { className: 'text-white' }
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
                <Chip
                    label="Amy Elsner"
                    image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                    pt={{
                        root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } },
                        label: { className: 'text-white' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
