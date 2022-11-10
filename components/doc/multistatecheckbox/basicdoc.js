import { useState } from 'react';
import { MultiStateCheckbox } from '../../lib/multistatecheckbox/MultiStateCheckbox';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BasicDoc(props) {
    const [value, setValue] = useState('public');
    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    const code = {
        basic: `
<MultiStateCheckbox value={value} options={options} optionValue="value" onChange={(e) => setValue(e.value)} />
        `,
        javascript: `
import { useState } from "react";
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';

export default function BasicDoc() {
    const [value, setValue] = useState('public');s
    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    return (
        <MultiStateCheckbox value={value} options={options} optionValue="value" onChange={(e) => setValue(e.value)} />
    );
}
        `,
        typescript: `
import { useState } from "react";
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';

export default function BasicDoc() {
    const [value, setValue] = useState<any>('public');
    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    return (
        <MultiStateCheckbox value={value} options={options} optionValue="value" onChange={(e : MultiStateCheckboxChangeParams) => setValue(e.value)} />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                MultiStateCheckbox is used as a controlled input with <i>value</i>, <i>options</i> and <i>onChange</i> properties. The <i>optionValue</i> field refers to the value of each option.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div style={{ marginRight: '0.5rem', lineHeight: '1' }}>
                    <MultiStateCheckbox value={value} options={options} optionValue="value" onChange={(e) => setValue(e.value)} />
                </div>
                <label>{value}</label>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
