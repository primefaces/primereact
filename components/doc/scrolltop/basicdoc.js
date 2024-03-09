import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ScrollTop } from '@/components/lib/scrolltop/ScrollTop';

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
                <i className="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite text-2xl" style={{ fontSize: '2rem', marginBottom: '30rem' }}></i>
                <ScrollTop />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
