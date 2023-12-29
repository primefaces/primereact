import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Image } from '@/components/lib/image/Image';

export function TemplateDoc(props) {
    const icon = <i className="pi pi-search"></i>;

    const code = {
        basic: `
<Image src="/images/galleria/galleria12.jpg" indicatorIcon={icon} alt="Image" preview width="250" />
        `,
        javascript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function TemplateDemo() {
    const icon = (<i className="pi pi-search"></i>)

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
    const icon = (<i className="pi pi-search"></i>)

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
