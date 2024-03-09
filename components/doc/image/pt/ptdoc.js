import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Image } from '@/components/lib/image/Image';

export function PTDoc(props) {
    const code = {
        basic: `
<Image
    src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg"
    alt="Image"
    width="250"
    preview
    pt={{
        image: { className: 'w-15rem' }
    }}
/>
        `,
        javascript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <Image
                src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg"
                alt="Image"
                width="250"
                preview
                pt={{
                    image: { className: 'w-15rem' }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <Image
                src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg"
                alt="Image"
                width="250"
                preview
                pt={{
                    image: { className: 'w-15rem' }
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <Image
                    src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg"
                    alt="Image"
                    width="250"
                    preview
                    pt={{
                        image: { className: 'w-15rem' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
