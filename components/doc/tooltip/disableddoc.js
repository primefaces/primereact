import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Tooltip } from '@/components/lib/tooltip/Tooltip';

export function DisabledDoc(props) {
    const code = {
        basic: `
<Tooltip target=".disabled-button" />
<span className="disabled-button" data-pr-tooltip="Disabled">
    <Button type="button" label="Save" icon="pi pi-check" disabled />
</span>

<Button type="button" label="Save" icon="pi pi-check" disabled tooltip="Disabled" tooltipOptions={{ showOnDisabled: true }} />
        `,
        javascript: `
import React from 'react'; 
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function DisabledDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Tooltip target=".disabled-button" />
            <span className="disabled-button" data-pr-tooltip="Disabled">
                <Button type="button" label="Save" icon="pi pi-check" disabled />
            </span>

            <Button type="button" label="Save" icon="pi pi-check" disabled tooltip="Disabled" tooltipOptions={{ showOnDisabled: true }} />
        </div>
    );
}
        `,
        typescript: `
import React from 'react'; 
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function DisabledDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Tooltip target=".disabled-button" />
            <span className="disabled-button" data-pr-tooltip="Disabled">
                <Button type="button" label="Save" icon="pi pi-check" disabled />
            </span>

            <Button type="button" label="Save" icon="pi pi-check" disabled tooltip="Disabled" tooltipOptions={{ showOnDisabled: true }} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Disabled elements do not trigger user interactions due to standard behavior. A common workaround for such cases is wrapping the disabled element with another element that has a tooltip attached. If the tooltip is built-in to the
                    component then enable <i>showOnDisabled</i> option instead.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-2">
                <Tooltip target=".disabled-button" />
                <span className="disabled-button" data-pr-tooltip="Disabled">
                    <Button type="button" label="Save" icon="pi pi-check" disabled />
                </span>

                <Button type="button" label="Save" icon="pi pi-check" disabled tooltip="Disabled" tooltipOptions={{ showOnDisabled: true }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
