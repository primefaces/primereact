import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { SelectButton } from '@/components/lib/selectbutton/SelectButton';
import { useState } from 'react';

export function InvalidDoc(props) {
    const options = ['Off', 'On'];
    const [value, setValue] = useState(options[0]);

    const code = {
        basic: `
<SelectButton invalid value={value} onChange={(e) => setValue(e.value)} options={options} />
        `,
        javascript: `
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function InvalidDemo() {
    const options = ['Off', 'On'];
    const [value, setValue] = useState(options[0]);

    return (
        <div className="card flex justify-content-center">
            <SelectButton invalid value={value} onChange={(e) => setValue(e.value)} options={options} />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';

export default function InvalidDemo() {
    const options: string[] = ['Off', 'On'];
    const [value, setValue] = useState<string>(options[0]);

    return (
        <div className="card flex justify-content-center">
            <SelectButton invalid value={value} onChange={(e: SelectButtonChangeEvent) => setValue(e.value)} options={options} />
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
                <SelectButton invalid value={value} onChange={(e) => setValue(e.value)} options={options} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
