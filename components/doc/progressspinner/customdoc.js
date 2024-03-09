import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ProgressSpinner } from '@/components/lib/progressspinner/ProgressSpinner';

export function CustomDoc(props) {
    const code = {
        basic: `
<ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
        `,
        javascript: `
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function CustomDemo() {
    return (
        <div className="card">
            <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function CustomDemo() {
    return (
        <div className="card">
            <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    ProgressSpinner can be customized with styling property like <i>style</i>, <i>strokeWidth</i> and <i>fill</i>.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
