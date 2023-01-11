import getConfig from 'next/config';
import { Image } from '../../lib/image/Image';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ThumbnailDoc(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const code = {
        basic: `
<Image src="https://www.primefaces.org/cdn/images/placeholder.png" zoomSrc="https://cdn.primefaces.org/images/placeholder-2x.png" alt="Image" width="80" height="60" preview />
        `,
        javascript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function ThumbnailDemo() {
    return (
        <div className="card flex justify-content-center">
            <Image src="https://www.primefaces.org/cdn/images/placeholder.png" zoomSrc="https://cdn.primefaces.org/images/placeholder-2x.png" alt="Image" width="80" height="60" preview />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function ThumbnailDemo() {
    return (
        <div className="card flex justify-content-center">
            <Image src="https://www.primefaces.org/cdn/images/placeholder.png" zoomSrc="https://cdn.primefaces.org/images/placeholder-2x.png" alt="Image" width="80" height="60" preview />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Use the <i>zoomSrc</i> to select a higher resolution image to display in preview mode.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Image src={`${contextPath}/images/galleria/galleria14s.jpg`} zoomSrc={`${contextPath}/images/galleria/galleria14.jpg`} alt="Image" width="80" height="60" preview />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
