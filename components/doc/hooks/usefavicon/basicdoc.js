import React from 'react';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { useFavicon } from '../../../lib/hooks/Hooks';

export function BasicDoc(props) {
    const [favicon, setFavicon] = React.useState();
    const setFaviconToTwitter = () => setFavicon('https://twitter.com/favicon.ico');
    /**
     * @todo Set the favicon to the PrimeReact favicon
     */
    const setFaviconToPrimeReact = () => setFavicon('/favicon.ico');

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
    const [favicon, setFavicon] = useState();
    const setFaviconToTwitter = () => setFavicon('https://twitter.com/favicon.ico');
    const setFaviconToPrimeReact = () => setFavicon('https://primereact.org/favicon.ico');

    useFavicon(favicon);

    return (
        <div className="card flex justify-content-center align-items-center gap-2">
            <Button onClick={setFaviconToTwitter}>Twitter Favicon</Button>
            <Button onClick={setFaviconToPrimeReact}>PrimeReact Favicon</Button>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react'; 
import { Button } from 'primereact/button';
import { useFavicon } from 'primereact/hooks';

export default function BasicDemo() {
    const [favicon, setFavicon] = useState();
    const setFaviconToTwitter = () => setFavicon('https://twitter.com/favicon.ico');
    const setFaviconToPrimeReact = () => setFavicon('https://primereact.org/favicon.ico');

    useFavicon(favicon);

    return (
        <div className="card flex justify-content-center align-items-center gap-2">
            <Button onClick={setFaviconToTwitter}>Twitter Favicon</Button>
            <Button onClick={setFaviconToPrimeReact}>PrimeReact Favicon</Button>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/**
                 * @todo Add a description
                 */}
            </DocSectionText>
            <div className="card flex justify-content-center align-items-center gap-2">
                <Button onClick={setFaviconToTwitter}>Twitter Favicon</Button>
                <Button onClick={setFaviconToPrimeReact}>PrimeReact Favicon</Button>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
