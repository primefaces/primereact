import { Image } from '../../lib/image/Image';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';
import getConfig from 'next/config';

export function BasicDoc(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const code = {
        basic: `
<Image src="https://www.primefaces.org/cdn/images/placeholder.png" alt="Image" width="250" />
        `,
        javascript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Image src="https://www.primefaces.org/cdn/images/placeholder.png" alt="Image" width="250" />
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
            <Image src="https://www.primefaces.org/cdn/images/placeholder.png alt="Image" width="250" />
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
                <Image src={`${contextPath}/images/galleria/galleria7.jpg`} alt="Image" width="250" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
