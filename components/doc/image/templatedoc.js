import { Image } from '../../lib/image/Image';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const icon = <i className="pi pi-check"></i>;

    const code = {
        basic: `
<Image src="/images/galleria/galleria12.jpg" indicatorIcon={icon} alt="Image" preview width="250" />
        `,
        javascript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function TemplateDemo() {
    const icon = (<i className="pi pi-check"></i>)

    return (
        <div className="card flex justify-content-center">
            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg" indicatorIcon={icon} alt="Image" preview width="250" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function TemplateDemo() {
    const icon = (<i className="pi pi-check"></i>)

    return (
        <div className="card flex justify-content-center">
            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg" indicatorIcon={icon} alt="Image" preview width="250" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    An eye icon is displayed by default when the image is hovered in preview mode. Use the <i>indicatorIcon</i> prop for custom content.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg" indicatorIcon={icon} alt="Image" preview width="250" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
