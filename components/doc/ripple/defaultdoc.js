import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Ripple } from '../../lib/ripple/Ripple';

export function DefaultDoc(props) {
    const code = {
        basic: `
<div className="card text-primary bg-primary flex select-none justify-content-center align-items-center p-ripple shadow-2">
    Default
    <Ripple />
</div>
        `,
        javascript: `
import React from 'react';
import PrimeReact from 'primereact/api';
import { Ripple } from 'primereact/ripple';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function DefaultDoc() {

    PrimeReact.ripple = true;

    return (
        <div className="card card-container flex justify-content-center align-items-center">
            <div className="card text-primary bg-primary flex select-none justify-content-center align-items-center p-ripple shadow-2">
                Default
                <Ripple />
            </div>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import PrimeReact from 'primereact/api';
import { Ripple } from 'primereact/ripple';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function DefaultDoc() {

    PrimeReact.ripple = true;

    return (
        <div className="card card-container flex justify-content-center align-items-center">
            <div className="card text-primary bg-primary flex select-none justify-content-center align-items-center p-ripple shadow-2">
                Default
                <Ripple />
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Default Demo Content.</p>
            </DocSectionText>
            <div className="card card-container flex justify-content-center align-items-center">
                <div className="card text-primary bg-primary flex select-none justify-content-center align-items-center p-ripple shadow-2">
                    Default
                    <Ripple />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
