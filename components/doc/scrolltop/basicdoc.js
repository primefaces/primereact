import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { ScrollTop } from '../../lib/scrolltop/ScrollTop';

export function BasicDoc(props) {
    const code = {
        basic: `
<ScrollTop />
        `,
        javascript: `
import React from 'react'; 
import { ScrollTop } from 'primereact/scrolltop';

export default function BasicDemo() {
    return (
        <div className="card flex flex-column align-items-center" style={{ height: '2000px' }}>
            <p>Scroll down the page to display the ScrollTo component.</p>
            <i className="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite" style={{ fontSize: '2rem' }}></i>
            <ScrollTop />
        </div>
    );
}
        `,
        typescript: `
import React from 'react'; 
import { ScrollTop } from 'primereact/scrolltop';

export default function BasicDemo() {
    return (
        <div className="card flex flex-column align-items-center" style={{ height: '2000px' }}>
            <p>Scroll down the page to display the ScrollTo component.</p>
            <i className="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite" style={{ fontSize: '2rem' }}></i>
            <ScrollTop />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>ScrollTop listens window scroll by default.</p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center">
                <p>Scroll down the page to display the ScrollTo component.</p>
                <i className="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite text-2xl"></i>
                <ScrollTop />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
