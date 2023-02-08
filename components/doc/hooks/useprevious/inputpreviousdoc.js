import React, { useState } from 'react';
import { usePrevious } from '../../../lib/hooks/Hooks';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { InputText } from '../../../lib/inputtext/InputText';

export function InputPreviousDoc(props) {
    const [email, setEmail] = useState('');
    const prevEmail = usePrevious(email);

    const code = {
        basic: `
<label htmlFor="email">Email:</label>
<InputText type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
{message && <p>{message}</p>}
        `,
        javascript: `
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { usePrevious } from 'primereact/hooks';

export default function InputDemo() {
    const [email, setEmail] = useState('');
    const prevEmail = usePrevious(email);

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <div className='flex flex-column gap-2 align-items-start'>
                <span className='field text-lg'>Current email state: {email}</span>
                <span className='field text-lg'>Previously email state: {prevEmail}</span>
                <InputText
                    placeholder="example@outlook.com"
                    id="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { usePrevious } from 'primereact/hooks';

export default function InputDemo() {
    const [email, setEmail] = useState('');
    const prevEmail = usePrevious(email);

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <div className='flex flex-column gap-2 align-items-start'>
                <span className='field text-lg'>Current email state: {email}</span>
                <span className='field text-lg'>Previously email state: {prevEmail}</span>
                <InputText
                    placeholder="example@outlook.com"
                    id="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/**
                 * @todo Add a description
                 */}
            </DocSectionText>
            <div className="card flex flex-column justify-content-center align-items-center">
                <div className="flex flex-column gap-2 align-items-start">
                    <span className="field text-lg">Current email state: {email}</span>
                    <span className="field text-lg">Previously email state: {prevEmail}</span>
                    <InputText
                        placeholder="example@outlook.com"
                        id="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
