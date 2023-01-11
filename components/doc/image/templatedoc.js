import { Image } from '../../lib/image/Image';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';
import getConfig from 'next/config';

export function TemplateDoc(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const icon = <i className="pi pi-check"></i>;
    
    const code = {
        basic: `
<Image src="https://cdn.primefaces.org/images/placeholder.png" template={icon} alt="Image" preview />
        `,
        javascript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function TemplateDemo() {
    const icon = (<i className="pi pi-check"></i>)

    return (
        <div className="card flex justify-content-center">
            <Image src="https://cdn.primefaces.org/images/placeholder.png" template={icon} alt="Image" preview />
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
            <Image src="https://cdn.primefaces.org/images/placeholder.png" template={icon} alt="Image" preview />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>An eye icon is displayed by default when the image is hovered in preview mode. Use the <i>template</i> prop for custom content.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Image src={`${contextPath}/images/galleria/galleria12.jpg`} template={icon} alt="Image" preview width="250" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
