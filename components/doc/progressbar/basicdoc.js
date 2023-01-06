import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { ProgressBar } from '../../lib/progressbar/ProgressBar';

export function BasicDoc(props) {
    const code = {
        basic: `
<ProgressBar value={50}></ProgressBar>
        `,
        javascript: `
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

export default function BasicDemo() {
    return (
        <div className="card">
            <ProgressBar value={50}></ProgressBar>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

export default function BasicDemo() {
    return (
        <div className="card">
            <ProgressBar value={50}></ProgressBar>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    ProgressBar is used with the <i>value</i> property.
                </p>
            </DocSectionText>
            <div className="card">
                <ProgressBar value={50}></ProgressBar>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
