import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { ProgressBar } from '../../lib/progressbar/ProgressBar';

export function IndeterminateDoc(props) {
    const code = {
        basic: `
<ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
        `,
        javascript: `
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

export default function IndeterminateDoc() {

    return (
        <div className="card">
            <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

export default function IndeterminateDoc() {

    return (
        <div className="card">
            <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Indeterminate Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
