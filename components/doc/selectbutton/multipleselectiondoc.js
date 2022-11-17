import { useState } from 'react';
import { SelectButton } from '../../lib/selectbutton/SelectButton';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function MultipleSelectionDoc(props) {
    const [value, setValue] = useState(null);
    const paymentOptions = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2 },
        { name: 'Option 3', value: 3 }
    ];

    const code = {
        basic: `
<SelectButton value={value} options={paymentOptions} onChange={(e) => setValue(e.value)} optionLabel="name" multiple />

        `,
        javascript: `
import { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function MultipleSelectionDoc() {
    const [value, setValue] = useState(null);
    const paymentOptions = [
        {name: 'Option 1', value: 1},
        {name: 'Option 2', value: 2},
        {name: 'Option 3', value: 3}
    ];
    return (
        <SelectButton value={value} options={paymentOptions} onChange={(e) => setValue(e.value)} optionLabel="name" multiple />
    );
}
        `,
        typescript: `
import { useState } from "react";
import { SelectButton, SelectButtonChangeParams } from 'primereact/selectbutton';

export default function MultipleSelectionDoc() {
    const [value, setValue] = useState<string>(null);
    const paymentOptions = [
        {name: 'Option 1', value: 1},
        {name: 'Option 2', value: 2},
        {name: 'Option 3', value: 3}
    ];
    return (
        <SelectButton value={value} options={paymentOptions} onChange={(e : SelectButtonChangeParams) => setValue(e.value)} optionLabel="name" multiple />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    SelectButton allows selecting only one item by default and setting <i>multiple</i> option enables choosing more than one item. In multiple case, model property should be an array.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <SelectButton value={value} options={paymentOptions} onChange={(e) => setValue(e.value)} optionLabel="name" multiple />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
