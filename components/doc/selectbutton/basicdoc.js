import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { SelectButton } from '@/components/lib/selectbutton/SelectButton';
import { useState } from 'react';

export function BasicDoc(props) {
    const options = ['Off', 'On'];
    const [value, setValue] = useState(options[0]);

    const code = {
        basic: `
<SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
        `,
        javascript: `
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function BasicDemo() {
    const options = ['Off', 'On'];
    const [value, setValue] = useState(options[0]);

    return (
        <div className="card flex justify-content-center">
            <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';

export default function BasicDemo() {
    const options: string[] = ['Off', 'On'];
    const [value, setValue] = useState<string>(options[0]);

    return (
        <div className="card flex justify-content-center">
            <SelectButton value={value} onChange={(e: SelectButtonChangeEvent) => setValue(e.value)} options={options} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    SelectButton is used as a controlled component with <i>value</i> and <i>onChange</i> properties along with an <i>options</i> collection. Label and value of an option are defined with the <i>optionLabel</i> and <i>optionValue</i>{' '}
                    properties respectively. Default property name for the <i>optionLabel</i> is <i>label</i> and <i>value</i> for the <i>optionValue</i>. If <i>optionValue</i> is omitted and the object has no <i>value</i> property, the object itself
                    becomes the value of an option. Note that, when options are simple primitive values such as a string array, no <i>optionLabel</i> and <i>optionValue</i> would be necessary.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
