import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { ProgressBar } from '../../lib/progressbar/ProgressBar';

export function CustomDisplayValueDoc(props) {
    const displayValueTemplate = (value) => {
        return (
            <React.Fragment>
                {value}/<b>100</b>
            </React.Fragment>
        );
    };

    const code = {
        basic: `
<ProgressBar value={40} displayValueTemplate={displayValueTemplate}></ProgressBar>
        `,
        javascript: `
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

export default function CustomDisplayValueDoc() {

    const displayValueTemplate = (value) => {
        return (
            <React.Fragment>
                {value}/<b>100</b>
            </React.Fragment>
        );
    };

    return (
        <div className="card">
            <ProgressBar value={40} displayValueTemplate={displayValueTemplate}></ProgressBar>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { ProgressBar } from 'primereact/progressbar';

export default function CustomDisplayValueDoc() {

    const displayValueTemplate = (value) => {
        return (
            <React.Fragment>
                {value}/<b>100</b>
            </React.Fragment>
        );
    };

    return (
        <div className="card">
            <ProgressBar value={40} displayValueTemplate={displayValueTemplate}></ProgressBar>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Custom Display Value Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <ProgressBar value={40} displayValueTemplate={displayValueTemplate}></ProgressBar>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
