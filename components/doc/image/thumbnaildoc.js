import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Image } from '@/components/lib/image/Image';

export function ThumbnailDoc(props) {
    const code = {
        basic: `
<Image src="/images/galleria/galleria14.jpg" zoomSrc="/images/galleria/galleria14.jpg" alt="Image" width="80" height="60" preview />
        `,
        javascript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function ThumbnailDemo() {
    return (
        <div className="card flex justify-content-center">
            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria14.jpg" zoomSrc="https://primefaces.org/cdn/primereact/images/galleria/galleria14.jpg" alt="Image" width="80" height="60" preview />
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
            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria14.jpg" zoomSrc="https://primefaces.org/cdn/primereact/images/galleria/galleria14.jpg" alt="Image" width="80" height="60" preview />
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
                <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria14s.jpg" zoomSrc="https://primefaces.org/cdn/primereact/images/galleria/galleria14.jpg" alt="Image" width="80" height="60" preview />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
