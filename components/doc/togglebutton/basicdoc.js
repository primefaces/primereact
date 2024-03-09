import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ToggleButton } from '@/components/lib/togglebutton/ToggleButton';
import { useState } from 'react';

export function BasicDoc(props) {
    const [checked, setChecked] = useState(false);

    const code = {
        basic: `
<ToggleButton checked={checked} onChange={(e) => setChecked(e.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

export default function BasicDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton checked={checked} onChange={(e) => setChecked(e.value)} className="w-8rem" />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { ToggleButton, ToggleButtonChangeEvent } from 'primereact/togglebutton';

export default function BasicDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton checked={checked} onChange={(e: ToggleButtonChangeEvent) => setChecked(e.value)} className="w-8rem" />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    ToggleButton is used a controlled input component with <i>value</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ToggleButton checked={checked} onChange={(e) => setChecked(e.value)} className="w-8rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
