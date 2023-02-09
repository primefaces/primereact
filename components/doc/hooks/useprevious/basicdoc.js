import React, { useState } from 'react';
import { usePrevious } from '../../../lib/hooks/Hooks';
import { InputText } from '../../../lib/inputtext/InputText';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function BasicDoc(props) {
    const [value, setValue] = useState('');
    const prevValue = usePrevious(value);

    const code = {
        basic: `
const [value, setValue] = useState('');
const prevValue = usePrevious(value);
        `,
        javascript: `
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { usePrevious } from 'primereact/hooks';

export default function BasicDemo() {
    const [value, setValue] = useState('');
    const prevValue = usePrevious(value);

    return (
        <div className="card flex flex-column align-items-center">
            <InputText value={value} className="mb-4" 
                onChange={(e) => setValue(e.target.value)} />
            <div className="flex flex-column align-items-start flex-wrap gap-3 text-xl">
                <span>
                    Current: <strong>{value}</strong>
                </span>
                <span>
                    Previous: <strong>{prevValue}</strong>
                </span>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { usePrevious } from 'primereact/hooks';

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');
    const prevValue = usePrevious(value);

    return (
        <div className="card flex flex-column align-items-center">
            <InputText value={value} className="mb-4" 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
            <div className="flex flex-column align-items-start flex-wrap gap-3 text-xl">
                <span>
                    Current: <strong>{value}</strong>
                </span>
                <span>
                    Previous: <strong>{prevValue}</strong>
                </span>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Previous value remains one step behind the current value while input is being typed.</p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center">
                <InputText
                    value={value}
                    className="mb-4"
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
                <div className="flex flex-column align-items-start flex-wrap gap-3 text-xl">
                    <span>
                        Current: <strong>{value}</strong>
                    </span>
                    <span>
                        Previous: <strong>{prevValue}</strong>
                    </span>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
