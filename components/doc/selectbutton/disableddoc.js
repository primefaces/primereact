import { useState } from 'react';
import { SelectButton } from '../../lib/selectbutton/SelectButton';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const [value, setValue] = useState(null);
    const paymentOptions = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2, disabled: true }
    ];

    const toggleOptions = ['Off', 'On'];

    const code = {
        basic: `
<SelectButton value={value} options={paymentOptions} onChange={(e) => setValue(e.value)} optionLabel="name" multiple />
        `,
        javascript: `
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function DisabledDoc() {
    const [value, setValue] = useState(null);
    const paymentOptions = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2, disabled: true }
    ];

    const toggleOptions = ['Off', 'On'];
    
    return (
        <div className="card flex justify-content-center flex-wrap gap-2">
            <div className="flex flex-column align-items-center mr-3">
                <span className="font-semibold mb-2">Disable a particular option.</span>
                <SelectButton value={value} options={paymentOptions} onChange={(e) => setValue(e.value)} optionLabel="name" />
            </div>
            <div className="flex flex-column align-items-center">
                <span className="font-semibold mb-2">Disabled.</span>
                <SelectButton disabled options={toggleOptions} />
            </div>
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { SelectButton, SelectButtonChangeParams } from 'primereact/selectbutton';

export default function DisabledDoc() {
    const [value, setValue] = useState<string | null>(null);
    const paymentOptions = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2, disabled: true }
    ];

    const toggleOptions = ['Off', 'On'];

    return (
        <div className="card flex justify-content-center flex-wrap gap-2">
            <div className="flex flex-column align-items-center mr-3">
                <span className="font-semibold mb-2">Disable a particular option.</span>
                <SelectButton value={value} options={paymentOptions} onChange={(e) => setValue(e.value)} optionLabel="name" />
            </div>
            <div className="flex flex-column align-items-center">
                <span className="font-semibold mb-2">Disabled.</span>
                <SelectButton disabled options={toggleOptions} />
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <i>disabled</i> prop prevents an input from being editable.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center flex-wrap gap-2">
                <div className="flex flex-column align-items-center mr-3">
                    <span className="font-semibold mb-2">Disable a particular option.</span>
                    <SelectButton value={value} options={paymentOptions} onChange={(e) => setValue(e.value)} optionLabel="name" />
                </div>
                <div className="flex flex-column align-items-center">
                    <span className="font-semibold mb-2">Disabled.</span>
                    <SelectButton disabled options={toggleOptions} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
