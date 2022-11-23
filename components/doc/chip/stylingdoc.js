import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Chip } from '../../../components/lib/chip/Chip';
import getConfig from 'next/config';

export function StylingDemo(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const code = {
        basic: `
<Chip label="Action" className="mr-2 mb-2 custom-chip" />
<Chip label="Apple" icon="pi pi-apple" className="mr-2 mb-2 custom-chip" />
<Chip label="Onyama Limba" image="images/avatar/onyamalimba.png" className="mr-2 mb-2 custom-chip" />
<Chip label="Xuxue Feng" image="images/avatar/xuxuefeng.png" className="custom-chip mb-2" removable />
        `,
        javascript: `
import React from 'react';
import { Chip } from 'primereact/chip';

export const StylingDemo = () => {

    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Action" className="mr-2 mb-2 custom-chip" />
            <Chip label="Apple" icon="pi pi-apple" className="mr-2 mb-2 custom-chip" />
            <Chip label="Onyama Limba" image="images/avatar/onyamalimba.png" className="mr-2 mb-2 custom-chip" />
            <Chip label="Xuxue Feng" image="images/avatar/xuxuefeng.png" className="custom-chip mb-2" removable />
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Chip } from 'primereact/chip';

export const StylingDemo = () => {

    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Action" className="mr-2 mb-2 custom-chip" />
            <Chip label="Apple" icon="pi pi-apple" className="mr-2 mb-2 custom-chip" />
            <Chip label="Onyama Limba" image="images/avatar/onyamalimba.png" className="mr-2 mb-2 custom-chip" />
            <Chip label="Xuxue Feng" image="images/avatar/xuxuefeng.png" className="custom-chip mb-2" removable />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Styling Demo Content.</p>
            </DocSectionText>
            <div className="card flex flex-wrap gap-2">
                <Chip label="Action" className="mr-2 mb-2 custom-chip" />
                <Chip label="Apple" icon="pi pi-apple" className="mr-2 mb-2 custom-chip" />
                <Chip label="Onyama Limba" image={`${contextPath}/images/avatar/onyamalimba.png`} className="mr-2 mb-2 custom-chip" />
                <Chip label="Xuxue Feng" image={`${contextPath}/images/avatar/xuxuefeng.png`} className="custom-chip mb-2" removable />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
