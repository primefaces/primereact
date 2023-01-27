import { Button } from '../../lib/button/Button';
import { Tooltip } from '../../lib/tooltip/Tooltip';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const code = {
        basic: `
<Tooltip target=".custom-tooltip-btn">
    <img alt="logo" src="https://www.primereact.org/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
</Tooltip>

<Button className="custom-tooltip-btn" type="button" label="Save" icon="pi pi-check" />
        `,
        javascript: `
import React from 'react'; 
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    return (
        <div className="card flex justify-content-center">
            <Tooltip target=".custom-tooltip-btn">
                <img alt="logo" src="https://www.primereact.org/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
            </Tooltip>

            <Button className="custom-tooltip-btn" type="button" label="Save" icon="pi pi-check" />
        </div>
    );
}
        `,
        typescript: `
import React from 'react'; 
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    return (
        <div className="card flex justify-content-center">
            <Tooltip target=".custom-tooltip-btn">
                <img alt="logo" src="https://www.primereact.org/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
            </Tooltip>

            <Button className="custom-tooltip-btn" type="button" label="Save" icon="pi pi-check" />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Custom content can be placed as the tooltip value either with <i>content</i> property or nesting the content as children.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Tooltip target=".custom-tooltip-btn">
                    <img alt="logo" src="https://www.primereact.org/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
                </Tooltip>

                <Button className="custom-tooltip-btn" type="button" label="Save" icon="pi pi-check" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
