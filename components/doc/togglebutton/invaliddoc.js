import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ToggleButton } from '@/components/lib/togglebutton/ToggleButton';
import { useState } from 'react';

export function InvalidDoc(props) {
    const [checked, setChecked] = useState(false);

    const code = {
        basic: `
<ToggleButton invalid onIcon="pi pi-check" offIcon="pi pi-times" checked={checked} onChange={(e) => setChecked(e.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

export default function InvalidDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton invalid onIcon="pi pi-check" offIcon="pi pi-times" checked={checked} onChange={(e) => setChecked(e.value)} className="w-8rem" />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { ToggleButton, ToggleButtonChangeEvent } from 'primereact/togglebutton';

export default function InvalidDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton invalid onIcon="pi pi-check" offIcon="pi pi-times" checked={checked} onChange={(e: ToggleButtonChangeEvent) => setChecked(e.value)} className="w-8rem" />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ToggleButton invalid onIcon="pi pi-check" offIcon="pi pi-times" checked={checked} onChange={(e) => setChecked(e.value)} className="w-8rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
