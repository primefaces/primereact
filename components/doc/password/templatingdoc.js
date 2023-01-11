import React, { useState } from 'react';
import { Divider } from '../../lib/divider/Divider';
import { Password } from '../../lib/password/Password';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function Templating(props) {
    const [value, setValue] = useState('');
    const header = <h6>Pick a password</h6>;
    const footer = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    const code = {
        basic: `
<Password value={value} onChange={(e) => setValue(e.target.value)} inputClassName="w-15rem" header={header} footer={footer} />
        `,
        javascript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';

export default function Templating() {
    const [value, setValue] = useState('');
    const header = <h6>Pick a password</h6>;
    const footer = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)} header={header} footer={footer} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';

export default function Templating() {
    const [value, setValue] = useState<string>('');
    const header = <h6>Pick a password</h6>;
    const footer = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e : ChangeEventHandler) => setValue(e.target.value)} header={header} footer={footer} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Format definition of the keys to block.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Password value={value} onChange={(e) => setValue(e.target.value)} inputClassName="w-15rem" header={header} footer={footer} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
