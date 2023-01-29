import { useRef } from 'react';
import { Button } from '../../lib/button/Button';
import { OverlayPanel } from '../../lib/overlaypanel/OverlayPanel';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const op = useRef(null);

    const code = {
        basic: `
<Button type="button" icon="pi pi-image" label="Image" onClick={(e) => op.current.toggle(e)} />
<OverlayPanel ref={op}>
    <img src="/images/product/bamboo-watch.jpg" alt="Bamboo Watch"></img>
</OverlayPanel>
        `,
        javascript: `
import React, { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const op = useRef(null);

    return (
        <div className="card flex justify-content-center">
            <Button type="button" icon="pi pi-image" label="Image" onClick={(e) => op.current.toggle(e)} />
            <OverlayPanel ref={op}>
                <img src={'https://primereact.org/images/product/bamboo-watch.jpg'} alt="Bamboo Watch"></img>
            </OverlayPanel>
        </div>
    );
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const op = useRef(null);

    return (
        <div className="card flex justify-content-center">
            <Button type="button" icon="pi pi-image" label="Image" onClick={(e) => op.current.toggle(e)} />
            <OverlayPanel ref={op}>
                <img src={'https://primereact.org/images/product/bamboo-watch.jpg'} alt="Bamboo Watch"></img>
            </OverlayPanel>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    OverlayPanel is accessed via its reference and visibility is controlled using <i>toggle</i>, <i>show</i> and <i>hide</i> methods with an event of the target.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Button type="button" icon="pi pi-image" label="Image" onClick={(e) => op.current.toggle(e)} />
                <OverlayPanel ref={op}>
                    <img src={'/images/product/bamboo-watch.jpg'} alt="Bamboo Watch"></img>
                </OverlayPanel>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
