import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ProgressBar } from '@/components/lib/progressbar/ProgressBar';
import React from 'react';

export function TemplateDoc(props) {
    const valueTemplate = (value) => {
        return (
            <React.Fragment>
                {value}/<b>100</b>
            </React.Fragment>
        );
    };

    const code = {
        basic: `
<ProgressBar value={40} displayValueTemplate={valueTemplate}></ProgressBar>
        `,
        javascript: `
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

export default function TemplateDemo() {
    const valueTemplate = (value) => {
        return (
            <React.Fragment>
                {value}/<b>100</b>
            </React.Fragment>
        );
    };

    return (
        <div className="card">
            <ProgressBar value={40} displayValueTemplate={valueTemplate}></ProgressBar>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

export default function TemplateDemo() {
    const valueTemplate = (value) => {
        return (
            <React.Fragment>
                {value}/<b>100</b>
            </React.Fragment>
        );
    };

    return (
        <div className="card">
            <ProgressBar value={40} displayValueTemplate={valueTemplate}></ProgressBar>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Custom content inside the ProgressBar is defined with the <i>displayValueTemplate</i> property.
                </p>
            </DocSectionText>
            <div className="card">
                <ProgressBar value={40} displayValueTemplate={valueTemplate}></ProgressBar>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
