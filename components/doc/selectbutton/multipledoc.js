import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { SelectButton } from '@/components/lib/selectbutton/SelectButton';
import { useState } from 'react';

export function MultipleDoc(props) {
    const [value, setValue] = useState(null);
    const items = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2 },
        { name: 'Option 3', value: 3 }
    ];

    const code = {
        basic: `
<SelectButton value={value} onChange={(e) => setValue(e.value)} optionLabel="name" options={items} multiple />
        `,
        javascript: `
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function MultipleDemo() {
    const [value, setValue] = useState(null);
    const items = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2 },
        { name: 'Option 3', value: 3 }
    ];
    
    return (
        <div className="card flex justify-content-center">
            <SelectButton value={value} onChange={(e) => setValue(e.value)} optionLabel="name" options={items} multiple />
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
}

export default function MultipleDemo() {
    const [value, setValue] = useState<Item>(null);
    const items: Item[] = [
        {name: 'Option 1', value: 1},
        {name: 'Option 2', value: 2},
        {name: 'Option 3', value: 3}
    ];
    
    return (
        <div className="card flex justify-content-center">
            <SelectButton value={value} onChange={(e: SelectButtonChangeEvent) => setValue(e.value)} optionLabel="name" options={items} multiple />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    SelectButton allows selecting only one item by default and enabling <i>multiple</i> allows choosing more. In multiple case, model property should be an array instead of a single value.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <SelectButton value={value} onChange={(e) => setValue(e.value)} optionLabel="name" options={items} multiple />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
