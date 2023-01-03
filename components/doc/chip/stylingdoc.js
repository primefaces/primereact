import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Chip } from '../../../components/lib/chip/Chip';
import getConfig from 'next/config';

export function StylingDoc(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const code = {
        basic: `
<Chip label="Action" className="bg-primary" />
<Chip label="Apple" icon="pi pi-apple" className="bg-primary" />
<Chip label="Onyama Limba" image="images/avatar/onyamalimba.png" className="bg-primary" />
<Chip label="Xuxue Feng" image="images/avatar/xuxuefeng.png" className="bg-primary" removable />
        `,
        javascript: `
import React from 'react';
import { Chip } from 'primereact/chip';

export default function StylingDemo() {
    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Action" className="bg-primary" />
            <Chip label="Apple" icon="pi pi-apple" className="bg-primary" />
            <Chip label="Onyama Limba" image="images/avatar/onyamalimba.png" className="bg-primary" />
            <Chip label="Xuxue Feng" image="images/avatar/xuxuefeng.png" className="bg-primary" removable />
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Chip } from 'primereact/chip';

export default function StylingDemo() {
    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Action" className="bg-primary" />
            <Chip label="Apple" icon="pi pi-apple" className="bg-primary" />
            <Chip label="Onyama Limba" image="images/avatar/onyamalimba.png" className="bg-primary" />
            <Chip label="Xuxue Feng" image="images/avatar/xuxuefeng.png" className="bg-primary" removable />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Chip colors can easily be customized with the <i>style</i> and <i>className</i> properties.</p>
            </DocSectionText>
            <div className="card flex flex-wrap gap-2">
                <Chip label="Action" className="bg-primary" />
                <Chip label="Apple" icon="pi pi-apple" className="bg-primary" />
                <Chip label="Onyama Limba" image={`${contextPath}/images/avatar/onyamalimba.png`} className="bg-primary" />
                <Chip label="Xuxue Feng" image={`${contextPath}/images/avatar/xuxuefeng.png`} className="bg-primary" removable />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
