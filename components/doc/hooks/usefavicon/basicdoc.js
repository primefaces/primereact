import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { useFavicon } from '@/components/lib/hooks/Hooks';
import { useState } from 'react';

export function BasicDoc(props) {
    const [favicon, setFavicon] = useState('');
    const setFaviconToTwitter = () => setFavicon('https://twitter.com/favicon.ico');
    const setFaviconToPrimeReact = () => setFavicon('https://primefaces.org/cdn/primereact/images/favicon.ico');

    useFavicon(favicon);

    const code = {
        basic: `
useFavicon(favicon);
        `,
        javascript: `
import React, { useState } from 'react'; 
import { Button } from 'primereact/button';
import { useFavicon } from 'primereact/hooks';

export default function BasicDemo() {
    const [favicon, setFavicon] = useState('');
    const setFaviconToTwitter = () => setFavicon('https://twitter.com/favicon.ico');
    const setFaviconToPrimeReact = () => setFavicon('https://primefaces.org/cdn/primereact/images/favicon.ico');

    useFavicon(favicon);

    return (
        <div className="card flex justify-content-center gap-2">
            <Button icon="pi pi-twitter" label="Twitter" onClick={setFaviconToTwitter} />
            <Button icon="pi pi-prime" label="PrimeReact" onClick={setFaviconToPrimeReact} className="p-button-secondary" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react'; 
import { Button } from 'primereact/button';
import { useFavicon } from 'primereact/hooks';

export default function BasicDemo() {
    const [favicon, setFavicon] = useState<string>('');
    const setFaviconToTwitter = () => setFavicon('https://twitter.com/favicon.ico');
    const setFaviconToPrimeReact = () => setFavicon('https://primefaces.org/cdn/primereact/images/favicon.ico');

    useFavicon(favicon);

    return (
        <div className="card flex justify-content-center gap-2">
            <Button icon="pi pi-twitter" label="Twitter" onClick={setFaviconToTwitter} />
            <Button icon="pi pi-prime" label="PrimeReact" onClick={setFaviconToPrimeReact} className="p-button-secondary" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Click the buttons to change the favicon of this page dynamically.</p>
            </DocSectionText>
            <div className="card flex justify-content-center gap-2">
                <Button icon="pi pi-twitter" label="Twitter" onClick={setFaviconToTwitter} />
                <Button icon="pi pi-prime" label="PrimeReact" onClick={setFaviconToPrimeReact} className="p-button-secondary" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
