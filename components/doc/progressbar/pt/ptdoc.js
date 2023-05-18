import React from 'react';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { ProgressBar } from '../../../lib/progressbar/ProgressBar';

export function PTDoc(props) {
    const code = {
        basic: `
<ProgressBar
    value={50}
    pt={{
        value: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)' } }
    }}
></ProgressBar>
        `,
        javascript: `
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

export default function PTDemo() {
    return (
        <div className="card">
            <ProgressBar
                value={50}
                pt={{
                    value: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)' } }
                }}
            ></ProgressBar>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

export default function PTDemo() {
    return (
        <div className="card">
            <ProgressBar
                value={50}
                pt={{
                    value: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)' } }
                }}
            ></ProgressBar>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <ProgressBar
                    value={50}
                    pt={{
                        value: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)' } }
                    }}
                ></ProgressBar>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
