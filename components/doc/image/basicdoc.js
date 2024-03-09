import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Image } from '@/components/lib/image/Image';

export function BasicDoc(props) {
    const code = {
        basic: `
<Image src="/images/galleria/galleria7.jpg" alt="Image" width="250" />
        `,
        javascript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="250" />
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
            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="250" />
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
                <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg" alt="Image" width="250" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
