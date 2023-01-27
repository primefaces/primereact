import { Button } from '../../lib/button/Button';
import { Tooltip } from '../../lib/tooltip/Tooltip';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function MouseTrackDoc(props) {
    const code = {
        basic: `
<Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />

<Tooltip target=".logo" mouseTrack mouseTrackLeft={10} />
<img className="logo" alt="logo" src="https://www.primereact.org/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
        `,
        javascript: `
import React from 'react'; 
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function MouseTrackDemo() {
    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-5">
            <Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />

            <Tooltip target=".logo" mouseTrack mouseTrackLeft={10} />
            <img className="logo" alt="logo" src="https://www.primereact.org/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
        </div>
    );
}
        `,
        typescript: `
import React from 'react'; 
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function MouseTrackDemo() {
    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-5">
            <Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />

            <Tooltip target=".logo" mouseTrack mouseTrackLeft={10} />
            <img className="logo" alt="logo" src="https://www.primereact.org/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When <i>mouseTrack</i> option is enabled, position of the Tooltip is updated according to the pointer coordinates.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap align-items-center justify-content-center gap-5">
                <Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />

                <Tooltip target=".logo" mouseTrack mouseTrackLeft={10} />
                <img className="logo" alt="logo" src="https://www.primereact.org/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
