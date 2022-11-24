import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { ProgressBar } from '../../lib/progressbar/ProgressBar';
import { Toast } from '../../lib/toast/Toast';

export function StaticDemo(props) {
    const code = {
        basic: `
<ProgressBar value={50}></ProgressBar>
        `,
        javascript: `
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

export const StaticDemo = () => {

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

export const StaticDemo = () => {

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
                <p>Static Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <ProgressBar value={50}></ProgressBar>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
