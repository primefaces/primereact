import { Image } from '../../lib/image/Image';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function PreviewDoc(props) {
    const code = {
        basic: `
<Image src="https://www.primereact.org/images/galleria/galleria10.jpg" alt="Image" width="250" preview />
        `,
        javascript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function PreviewDemo() {
    return (
        <div className="card flex justify-content-center">
            <Image src="https://www.primereact.org/images/galleria/galleria10.jpg" alt="Image" width="250" preview />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function PreviewDemo() {
    return (
        <div className="card flex justify-content-center">
            <Image src="https://www.primereact.org/images/galleria/galleria10.jpg" alt="Image" width="250" preview />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Enabling <i>preview</i> mode displays a modal layer when the image is clicked to provide transformation options such as rotating and zooming.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Image src={`https://www.primereact.org/images/galleria/galleria10.jpg`} alt="Image" width="250" preview />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
