import { Button } from '../../lib/button/Button';
import { Tooltip } from '../../lib/tooltip/Tooltip';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function MouseTrackDoc(props) {
    const code = {
        basic: `
<Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} /

<Tooltip target=".logo" mouseTrack mouseTrackLeft={10} />
<img className="logo ml-2" alt="logo" src="images/logo.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} data-pr-tooltip="PrimeReact-Logo" height="80px" />
        `,
        javascript: `
import React from 'react'; 
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function MouseTrackDoc() {

    return (
        <div>
            <Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />

            <Tooltip target=".logo" mouseTrack mouseTrackLeft={10} />
            <img className="logo ml-2" alt="logo" src="images/logo.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} data-pr-tooltip="PrimeReact-Logo" height="80px" />
        </div>
    );
}
        `,
        typescript: `
import React from 'react'; 
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function MouseTrackDoc() {

    return (
        <div>
            <Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />

            <Tooltip target=".logo" mouseTrack mouseTrackLeft={10} />
            <img className="logo ml-2" alt="logo" src="images/logo.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} data-pr-tooltip="PrimeReact-Logo" height="80px" />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>MouseTrack</p>
            </DocSectionText>
            <div className="card flex align-items-center justify-content-center">
                <Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />

                <Tooltip target=".logo" mouseTrack mouseTrackLeft={10} />
                <img className="logo ml-2" alt="logo" src="images/logo.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} data-pr-tooltip="PrimeReact-Logo" height="80px" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
