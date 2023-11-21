import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ProgressBar } from '@/components/lib/progressbar/ProgressBar';

export function IndeterminateDoc(props) {
    const code = {
        basic: `
<ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
        `,
        javascript: `
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

export default function IndeterminateDemo() {
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

export default function IndeterminateDemo() {
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
                <p>
                    For progresses with no value to track, set the <i>mode</i> property to <i>indeterminate</i>.
                </p>
            </DocSectionText>
            <div className="card">
                <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
