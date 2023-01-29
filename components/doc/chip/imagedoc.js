import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Chip } from '../../../components/lib/chip/Chip';

export function ImageDoc(props) {
    const code = {
        basic: `
<Chip label="Amy Elsner" image="/images/avatar/amyelsner.png" />
<Chip label="Asiya Javayant" image="/images/avatar/asiyajavayant.png" />
<Chip label="Onyama Limba" image="/images/avatar/onyamalimba.png" />
<Chip label="Xuxue Feng" image="/images/avatar/xuxuefeng.png" removable />
        `,
        javascript: `
import React from 'react';
import { Chip } from 'primereact/chip';

export default function ImageDemo() {
    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Amy Elsner" image="https://primereact.org/images/avatar/amyelsner.png" />
            <Chip label="Asiya Javayant" image="https://primereact.org/images/avatar/asiyajavayant.png" />
            <Chip label="Onyama Limba" image="https://primereact.org/images/avatar/onyamalimba.png" />
            <Chip label="Xuxue Feng" image="https://primereact.org/images/avatar/xuxuefeng.png" removable />
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Chip } from 'primereact/chip';

export default function ImageDemo() {
    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Amy Elsner" image="https://primereact.org/images/avatar/amyelsner.png" />
            <Chip label="Asiya Javayant" image="https://primereact.org/images/avatar/asiyajavayant.png" />
            <Chip label="Onyama Limba" image="https://primereact.org/images/avatar/onyamalimba.png" />
            <Chip label="Xuxue Feng" image="https://primereact.org/images/avatar/xuxuefeng.png" removable />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The <i>image</i> property is used to display an image like an avatar.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap gap-2">
                <Chip label="Amy Elsner" image={`/images/avatar/amyelsner.png`} />
                <Chip label="Asiya Javayant" image={`/images/avatar/asiyajavayant.png`} />
                <Chip label="Onyama Limba" image={`/images/avatar/onyamalimba.png`} />
                <Chip label="Xuxue Feng" image={`/images/avatar/xuxuefeng.png`} removable />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
