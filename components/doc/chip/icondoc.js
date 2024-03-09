import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Chip } from '../../../components/lib/chip/Chip';

export function IconDoc(props) {
    const code = {
        basic: `
<Chip label="Apple" icon="pi pi-apple" />
<Chip label="Facebook" icon="pi pi-facebook" />
<Chip label="Google" icon="pi pi-google" />
<Chip label="Microsoft" icon="pi pi-microsoft" removable />
        `,
        javascript: `
import React from 'react';
import { Chip } from 'primereact/chip';

export default function IconDemo() {
    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Apple" icon="pi pi-apple" />
            <Chip label="Facebook" icon="pi pi-facebook" />
            <Chip label="Google" icon="pi pi-google" />
            <Chip label="Microsoft" icon="pi pi-microsoft" removable />
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Chip } from 'primereact/chip';

export default function IconDemo() {
    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Apple" icon="pi pi-apple" />
            <Chip label="Facebook" icon="pi pi-facebook" />
            <Chip label="Google" icon="pi pi-google" />
            <Chip label="Microsoft" icon="pi pi-microsoft" removable />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A font icon next to the label can be displayed with the <i>icon</i> property.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap gap-2">
                <Chip label="Apple" icon="pi pi-apple" />
                <Chip label="Facebook" icon="pi pi-facebook" />
                <Chip label="Google" icon="pi pi-google" />
                <Chip label="Microsoft" icon="pi pi-microsoft" removable />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
