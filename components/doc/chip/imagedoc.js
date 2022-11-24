import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Chip } from '../../../components/lib/chip/Chip';
import getConfig from 'next/config';

export function ImageDoc(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const code = {
        basic: `
<Chip label="Amy Elsner" image="images/avatar/amyelsner.png" className="mr-2 mb-2" />
<Chip label="Asiya Javayant" image="images/avatar/asiyajavayant.png" className="mr-2 mb-2" />
<Chip label="Onyama Limba" image="images/avatar/onyamalimba.png" className="mr-2 mb-2" />
<Chip label="Xuxue Feng" image="images/avatar/xuxuefeng.png" className="mb-2" removable />
        `,
        javascript: `
import React from 'react';
import { Chip } from 'primereact/chip';

export const ImageDoc = () => {

    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Amy Elsner" image="images/avatar/amyelsner.png" className="mr-2 mb-2" />
            <Chip label="Asiya Javayant" image="images/avatar/asiyajavayant.png" className="mr-2 mb-2" />
            <Chip label="Onyama Limba" image="images/avatar/onyamalimba.png" className="mr-2 mb-2" />
            <Chip label="Xuxue Feng" image="images/avatar/xuxuefeng.png" className="mb-2" removable />
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Chip } from 'primereact/chip';

export const ImageDoc = () => {

    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Amy Elsner" image="images/avatar/amyelsner.png" className="mr-2 mb-2" />
            <Chip label="Asiya Javayant" image="images/avatar/asiyajavayant.png" className="mr-2 mb-2" />
            <Chip label="Onyama Limba" image="images/avatar/onyamalimba.png" className="mr-2 mb-2" />
            <Chip label="Xuxue Feng" image="images/avatar/xuxuefeng.png" className="mb-2" removable />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Image Demo Content.</p>
            </DocSectionText>
            <div className="card flex flex-wrap gap-2">
                <Chip label="Amy Elsner" image={`${contextPath}/images/avatar/amyelsner.png`} className="mr-2" />
                <Chip label="Asiya Javayant" image={`${contextPath}/images/avatar/asiyajavayant.png`} className="mr-2" />
                <Chip label="Onyama Limba" image={`${contextPath}/images/avatar/onyamalimba.png`} className="mr-2" />
                <Chip label="Xuxue Feng" image={`${contextPath}/images/avatar/xuxuefeng.png`} removable />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
