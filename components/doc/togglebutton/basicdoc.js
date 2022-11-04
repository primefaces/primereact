import { useState } from 'react';
import { ToggleButton } from '../../lib/togglebutton/ToggleButton';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BasicDemo(props) {
    const [checked, setChecked] = useState(false);

    const code = {
        basic: `
<ToggleButton checked={checked} onChange={(e) => setChecked(e.value)} />

        `,
        javascript: `
import { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

export default function BasicDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <ToggleButton checked={checked} onChange={(e) => setChecked(e.value)} />

    );
}
        `,
        typescript: `
import { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

export default function BasicDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <ToggleButton checked={checked} onChange={(e : ToggleButtonChangeParams) => setChecked(e.value)} />


    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Rating is used a controlled input component with <i>value</i> and <i>onChange</i> properties.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ToggleButton checked={checked} onChange={(e) => setChecked(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
