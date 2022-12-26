import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { ScrollTop } from '../../lib/scrolltop/ScrollTop';

export function WindowDoc(props) {
    const code = {
        basic: `
<ScrollTop />
        `,
        javascript: `
import React from 'react'; 
import { ScrollTop } from 'primereact/scrolltop';

export const WindowDoc = () => {

    return (
        <div className="card">
            <ScrollTop />
        </div>
    );
}
        `,
        typescript: `
import React from 'react'; 
import { ScrollTop } from 'primereact/scrolltop';

export const WindowDoc = () => {

    return (
        <div className="card">
            <ScrollTop />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Without any configuration, ScrollTop listens window scroll.</p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center">
                <p>Scroll down the page to display the ScrollTo component.</p>
                <i className="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite" style={{ fontSize: '2rem' }}></i>
                <ScrollTop />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
