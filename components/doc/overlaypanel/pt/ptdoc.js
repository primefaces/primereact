import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { OverlayPanel } from '@/components/lib/overlaypanel/OverlayPanel';
import { useRef } from 'react';

export function PTDoc(props) {
    const op = useRef(null);

    const code = {
        basic: `
<OverlayPanel ref={op}
    pt={{
        root: { className: 'surface-ground' }
    }}
>
    <img src="https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
</OverlayPanel>
        `,
        javascript: `
import React, { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';

export default function PTDemo() {
    const op = useRef(null);

    return (
        <div className="card flex justify-content-center">
            <Button type="button" icon="pi pi-image" label="Image" onClick={(e) => op.current.toggle(e)} />

            <OverlayPanel ref={op}
                pt={{
                    root: { className: 'surface-ground' }
                }}
            >
                <img src="https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
            </OverlayPanel>
        </div>
    );
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';

export default function PTDemo() {
    const op = useRef(null);

    return (
        <div className="card flex justify-content-center">
            <Button type="button" icon="pi pi-image" label="Image" onClick={(e) => op.current.toggle(e)} />

            <OverlayPanel ref={op}
                pt={{
                    root: { className: 'surface-ground' }
                }}
            >
                <img src="https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
            </OverlayPanel>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <Button type="button" icon="pi pi-image" label="Image" onClick={(e) => op.current.toggle(e)} />

                <OverlayPanel
                    ref={op}
                    pt={{
                        root: { className: 'surface-ground' }
                    }}
                >
                    <img src="https://primefaces.org/cdn/primereact/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
                </OverlayPanel>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
