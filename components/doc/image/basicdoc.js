import { Image } from '../../lib/image/Image';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const code = {
        basic: `
<Image src="https://www.primereact.org/images/galleria/galleria7.jpg" alt="Image" width="250" />
        `,
        javascript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Image src="https://www.primereact.org/images/galleria/galleria7.jpg" alt="Image" width="250" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Image src="https://www.primereact.org/images/galleria/galleria7.jpg" alt="Image" width="250" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Image is used similar to the standard <i>img</i> element.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Image src={`https://www.primereact.org/images/galleria/galleria7.jpg`} alt="Image" width="250" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
