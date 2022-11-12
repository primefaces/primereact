import { useState } from 'react';
import { MultiStateCheckbox } from '../../lib/multistatecheckbox/MultiStateCheckbox';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const [value, setValue] = useState('public');
    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    const code = {
        basic: `
<MultiStateCheckbox disabled value={value} options={options} optionValue="value" onChange={(e) => setValue(e.value)} />
        `,
        javascript: `
import { useState } from "react";
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';

export default function DisabledDoc() {
    const [value, setValue] = useState('public');
    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    return (
        <MultiStateCheckbox disabled value={value} options={options} optionValue="value" onChange={(e) => setValue(e.value)} />
    );
}
        `,
        typescript: `
import { useState } from "react";
import { MultiStateCheckbox, MultiStateCheckboxChangeParams } from 'primereact/multistatecheckbox';

export default function DisabledDoc() {
    const [value, setValue] = useState<string>('public');
    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    return (
        <MultiStateCheckbox disabled value={value} options={options} optionValue="value" onChange={(e : MultiStateCheckboxChangeParams) => setValue(e.value)} />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                With <i>disabled</i> it specifies that the element value cannot be altered.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div style={{ marginRight: '0.5rem', lineHeight: '1' }}>
                    <MultiStateCheckbox disabled value={value} options={options} optionValue="value" onChange={(e) => setValue(e.value)} />
                </div>
                <label>{value}</label>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
