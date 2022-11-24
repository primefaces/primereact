import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { ProgressBar } from '../../lib/progressbar/ProgressBar';
import { Toast } from '../../lib/toast/Toast';

export function IndeterminateDemo(props) {
    const code = {
        basic: `
<ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
        `,
        javascript: `
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

export const IndeterminateDemo = () => {

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

export const IndeterminateDemo = () => {

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
