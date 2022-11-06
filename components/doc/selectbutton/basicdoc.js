import { useState } from 'react';
import { SelectButton } from '../../lib/selectbutton/SelectButton';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BasicDoc(props) {
    const [value, setValue] = useState('Off');
    const options = ['Off', 'On'];

    const code = {
        basic: `
<SelectButton value={value} options={options} onChange={(e) => setValue(e.value)} />

        `,
        javascript: `
import { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function BasicDoc() {
    const [value, setValue] = useState('Off');
    const options = ['Off', 'On'];

    return (
        <SelectButton value={value} options={options} onChange={(e) => setValue(e.value)} />
    );
}
        `,
        typescript: `
import { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function BasicDoc() {
    const [value, setValue] = useState('Off');
    const options = ['Off', 'On'];

    return (
        <SelectButton value={value} options={options} onChange={(e : SelectButtonChangeParams) => setValue(e.value)} />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Dropdown is used as a controlled component with <i>value</i> and <i>onChange</i> properties along with the options collection. There are two alternatives of how to define the options property; One way is providing a collection of{' '}
                <i>SelectItem</i> instances having label-value pairs whereas other way is providing an array of arbitrary objects along with the <i>optionLabel</i> and <i>optionValue</i> properties to specify the label/value field pair. In addition,
                options can be simple primitive values such as a string array, in this case no <i>optionLabel</i> and <i>optionValue</i> is necessary.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <SelectButton value={value} options={options} onChange={(e) => setValue(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
