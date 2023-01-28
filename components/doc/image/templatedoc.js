import { Image } from '../../lib/image/Image';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function TemplateDoc(props) {
    const icon = <i className="pi pi-check"></i>;

    const code = {
        basic: `
<Image src="https://www.primereact.org/images/galleria/galleria12.jpg" template={icon} alt="Image" preview width="250" />
        `,
        javascript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function TemplateDemo() {
    const icon = (<i className="pi pi-check"></i>)

    return (
        <div className="card flex justify-content-center">
            <Image src="https://www.primereact.org/images/galleria/galleria12.jpg" template={icon} alt="Image" preview width="250" />
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
            <Image src="https://www.primereact.org/images/galleria/galleria12.jpg" template={icon} alt="Image" preview width="250" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    An eye icon is displayed by default when the image is hovered in preview mode. Use the <i>template</i> prop for custom content.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Image src={`https://www.primereact.org/images/galleria/galleria12.jpg`} template={icon} alt="Image" preview width="250" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
