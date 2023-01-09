import getConfig from 'next/config';
import { useRef } from 'react';
import { Button } from '../../lib/button/Button';
import { OverlayPanel } from '../../lib/overlaypanel/OverlayPanel';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const op = useRef(null);

    const code = {
        basic: `
<Button style={{ minWidth: '10rem' }} type="button" icon="pi pi-image" label="Image" onClick={(e) => op.current.toggle(e)} aria-haspopup aria-controls="overlay_panel" />
<OverlayPanel ref={op} showCloseIcon id="overlay_panel">
    <img src={'images/product/bamboo-watch.jpg'} alt={'Bamboo Watch'} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}></img>
</OverlayPanel>
        `,
        javascript: `
import React, { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';

export default function BasicDoc() {
    const op = useRef(null);

    return (
        <div className="card flex justify-content-center gap-2">
            <Button style={{ minWidth: '10rem' }} type="button" icon="pi pi-image" label="Image" onClick={(e) => op.current.toggle(e)} aria-haspopup aria-controls="overlay_panel" />
            <OverlayPanel ref={op} showCloseIcon id="overlay_panel">
                <img src={'images/product/bamboo-watch.jpg'} alt={'Bamboo Watch'} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}></img>
            </OverlayPanel>
        </div>
    );
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';

export default function BasicDoc() {
    const op = useRef(null);

    return (
        <div className="card flex justify-content-center gap-2">
            <Button style={{ minWidth: '10rem' }} type="button" icon="pi pi-image" label="Image" onClick={(e) => op.current.toggle(e)} aria-haspopup aria-controls="overlay_panel" />
            <OverlayPanel ref={op} showCloseIcon id="overlay_panel">
                <img src={'images/product/bamboo-watch.jpg'} alt={'Bamboo Watch'} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}></img>
            </OverlayPanel>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>OverlayPanel is accessed via its reference where visibility is controlled using toggle, show and hide methods.</p>
            </DocSectionText>
            <div className="card flex justify-content-center gap-2">
                <Button style={{ minWidth: '10rem' }} type="button" icon="pi pi-image" label="Image" onClick={(e) => op.current.toggle(e)} aria-haspopup aria-controls="overlay_panel" />
                <OverlayPanel ref={op} showCloseIcon id="overlay_panel">
                    <img src={contextPath + 'images/product/bamboo-watch.jpg'} alt={'Bamboo Watch'} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}></img>
                </OverlayPanel>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
