import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Ripple } from '../../lib/ripple/Ripple';

export function DefaultDoc(props) {
    const code = {
        basic: `
<div className="card primary-box p-ripple">
    Default
    <Ripple />
</div>
        `,
        javascript: `
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export const DefaultDoc = () => {

    return (
        <div className="card">
            <div className="card primary-box p-ripple">
                Default
                <Ripple />
            </div>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export const DefaultDoc = () => {

    return (
        <div className="card">
            <div className="card primary-box p-ripple">
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
            <div className="card flex justify-content-center align-items-center">
                <div className="card-container">
                    <div className="card primary-box p-ripple">
                        Default
                        <Ripple />
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
