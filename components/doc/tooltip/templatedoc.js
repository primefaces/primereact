import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Tooltip } from '@/components/lib/tooltip/Tooltip';

export function TemplateDoc(props) {
    const code = {
        basic: `
<Tooltip target=".custom-tooltip-btn">
    <img alt="logo" src="/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
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
                <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
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
                <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
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
                    <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
                </Tooltip>

                <Button className="custom-tooltip-btn" type="button" label="Save" icon="pi pi-check" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
