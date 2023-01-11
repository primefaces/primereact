import { useState } from 'react';
import { MultiStateCheckbox } from '../../lib/multistatecheckbox/MultiStateCheckbox';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InvalidDoc(props) {
    const [value, setValue] = useState('');
    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    const code = {
        basic: `
<MultiStateCheckbox className="p-invalid" value={value} options={options} optionValue="value" onChange={(e) => setValue(e.value)} />    
            `,
        javascript: `
import React, { useState } from "react";
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';

export default function InvalidDoc() {
    const [value, setValue] = useState('public');
    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    return (
        <div className="card flex justify-content-center">
            <div style={{ marginRight: '0.5rem', lineHeight: '1' }}>
                <MultiStateCheckbox className="p-invalid" value={value} options={options} optionValue="value" onChange={(e) => setValue(e.value)} />
            </div>
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { MultiStateCheckbox, MultiStateCheckboxChangeParams } from 'primereact/multistatecheckbox';

export default function InvalidDoc() {
    const [value, setValue] = useState<string>('public');
    const options = [
        { value: 'public', icon: 'pi pi-globe' },
        { value: 'protected', icon: 'pi pi-lock-open' },
        { value: 'private', icon: 'pi pi-lock' }
    ];

    return (
        <div className="card flex justify-content-center">
            <div style={{ marginRight: '0.5rem', lineHeight: '1' }}>
                <MultiStateCheckbox className="p-invalid" value={value} options={options} optionValue="value" onChange={(e) => setValue(e.value)} />
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
                    Applying <i>p-invalid</i> class to an input element indicates a failed validation.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div style={{ marginRight: '0.5rem', lineHeight: '1' }}>
                    <MultiStateCheckbox className="p-invalid" value={value} options={options} optionValue="value" onChange={(e) => setValue(e.value)} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
