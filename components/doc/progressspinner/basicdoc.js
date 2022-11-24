import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { ProgressSpinner } from '../../lib/progressspinner/ProgressSpinner';

export function BasicDemo(props) {
    const code = {
        basic: `
<ProgressSpinner />
        `,
        javascript: `
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export const BasicDemo = () => {

    return (
        <div className="card">
            <ProgressSpinner />
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export const BasicDemo = () => {

    return (
        <div className="card">
            <ProgressSpinner />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Basic Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <ProgressSpinner />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
