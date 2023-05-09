import React, { useRef } from 'react';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { OverlayPanel } from '../../../lib/overlaypanel/OverlayPanel';
import { Button } from '../../../lib/button/Button';

export function PTDoc(props) {
    const op = useRef(null);

    const code = {
        basic: `
<Button type="button" icon="pi pi-image" label="Image" onClick={(e) => op.current.toggle(e)} />
<OverlayPanel ref={op}
    pt={{
        root: { className: 'surface-ground' }
    }}
>
    <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
</OverlayPanel>
        `,
        javascript: `
import React, { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';

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
                <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
            </OverlayPanel>
        </div>
    );
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';

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
                <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
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
                    <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
                </OverlayPanel>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
