import getConfig from 'next/config';
import { Image } from '../../lib/image/Image';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ThumbnailDoc(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const code = {
        basic: `
<Image src="https://www.primefaces.org/wp-content/uploads/2020/05/small.png" zoomSrc="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="80" height="60" preview />
        `,
        javascript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function ThumbnailDoc() {

    return (
        <div className="card flex justify-content-center">
            <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/small.png" zoomSrc="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="80" height="60" preview />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function ThumbnailDoc() {

    return (
        <div className="card flex justify-content-center">
            <Image src="https://www.primefaces.org/wp-content/uploads/2020/05/small.png" zoomSrc="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt="Image" width="80" height="60" preview />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Allow different images or sizes for source and preview images using <i>zoomSrc</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Image src={`${contextPath}/images/galleria/galleria14s.jpg`} zoomSrc={`${contextPath}/images/galleria/galleria14.jpg`} alt="Image" width="80" height="60" preview />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
