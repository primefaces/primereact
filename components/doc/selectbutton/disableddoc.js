import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { SelectButton } from '@/components/lib/selectbutton/SelectButton';
import { useState } from 'react';

export function DisabledDoc(props) {
    const [value, setValue] = useState(null);
    const options1 = ['Off', 'On'];
    const options2 = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2, constant: true }
    ];

    const code = {
        basic: `
<SelectButton disabled options={options1} />
<SelectButton value={value} onChange={(e) => setValue(e.value)} options={options2} optionLabel="name" optionDisabled="constant" />
        `,
        javascript: `
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function DisabledDemo() {
    const [value, setValue] = useState(null);
    const options1 = ['Off', 'On'];
    const options2 = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2, constant: true }
    ];
    
    return (
        <div className="card flex flex-wrap justify-content-center flex-wrap gap-3">
            <SelectButton disabled options={options1} />
            <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options2} optionLabel="name" optionDisabled="constant" />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';

interface Item {
    name: string;
    value: number;
    constant: boolean;
}

export default function DisabledDemo() {
    const [value, setValue] = useState(null);
    const options1: string[] = ['Off', 'On'];
    const options2: Item[] = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2, constant: true }
    ];
    
    return (
        <div className="card flex flex-wrap justify-content-center flex-wrap gap-3">
            <SelectButton disabled options={options1} />
            <SelectButton value={value} onChange={(e: SelectButtonChangeEvent) => setValue(e.value)} options={options2} optionLabel="name" optionDisabled="constant" />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When <i>disabled</i> is present, the element cannot be edited and focused entirely. Certain options can also be disabled using the <i>optionDisabled</i> property.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center flex-wrap gap-3">
                <SelectButton disabled options={options1} />
                <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options2} optionLabel="name" optionDisabled="constant" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
