import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { DeferredContent } from '@/components/lib/deferredcontent/DeferredContent';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef } from 'react';

export function BasicDoc(props) {
    const toast = useRef(null);

    const onImageLoad = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Image loaded' });
    };

    const code = {
        basic: `
<DeferredContent onLoad={onImageLoad}>
    <img className="w-full md:w-30rem md:block md:mx-auto" src="/images/galleria/galleria3.jpg" alt="Prime" />
</DeferredContent>
        `,
        javascript: `
import React, { useState, useRef } from 'react';
import { DeferredContent } from 'primereact/deferredcontent';
import { Toast } from 'primereact/toast';

export default function BasicDemo() {
    const toast = useRef(null);

    const onImageLoad = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Image loaded' });
    };

    return (
        <div className="card">
            <p style={{marginBottom: '70rem', textAlign: 'center'}}>Scroll down to lazy load an image.</p>
            <Toast ref={toast} />
            <DeferredContent onLoad={onImageLoad}>
                <img className="w-full md:w-30rem md:block md:mx-auto" src="https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg" alt="Prime" />
            </DeferredContent>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useRef } from 'react';
import { DeferredContent } from 'primereact/deferredcontent';
import { Toast } from 'primereact/toast';

export default function BasicDemo() {
    const toast = useRef<Toast | null>(null);

    const onImageLoad = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Image loaded' });
    };

    return (
        <div className="card">
            <p style={{marginBottom: '70rem', textAlign: 'center'}}>Scroll down to lazy load an image.</p>
            <Toast ref={toast} />
            <DeferredContent onLoad={onImageLoad}>
                <img className="w-full md:w-30rem md:block md:mx-auto" src="https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg" alt="Prime" />
            </DeferredContent>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>DeferredContent is used by wrapping the target.</p>
            </DocSectionText>
            <div className="card">
                <p style={{ marginBottom: '70rem', textAlign: 'center' }}>Scroll down to lazy load an image.</p>
                <Toast ref={toast} />
                <DeferredContent onLoad={onImageLoad}>
                    <img className="w-full md:w-30rem md:block md:mx-auto" src="https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg" alt="Prime" />
                </DeferredContent>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
