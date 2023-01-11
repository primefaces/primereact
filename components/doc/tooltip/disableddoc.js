import { Tooltip } from '../../lib/tooltip/Tooltip';
import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const code = {
        basic: `
<Tooltip target=".disabled-button" />
<span className="disabled-button mr-2" data-pr-tooltip="A Disabled Button">
    <Button type="button" label="Save" icon="pi pi-check" disabled />
</span
<Button type="button" label="Save" icon="pi pi-check" disabled tooltip="A Disabled Button" tooltipOptions={{ showOnDisabled: true }} />
        `,
        javascript: `
import React from 'react'; 
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function DisabledDoc() {

    return (
        <div>
            <Tooltip target=".disabled-button" />
            <span className="disabled-button mr-2" data-pr-tooltip="A Disabled Button">
                <Button type="button" label="Save" icon="pi pi-check" disabled />
            </span>

            <Button type="button" label="Save" icon="pi pi-check" disabled tooltip="A Disabled Button" tooltipOptions={{ showOnDisabled: true }} />
        </div>
    );
}
        `,
        typescript: `
import React from 'react'; 
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function DisabledDoc() {
    
    return (
        <div>
            <Tooltip target=".disabled-button" />
            <span className="disabled-button mr-2" data-pr-tooltip="A Disabled Button">
                <Button type="button" label="Save" icon="pi pi-check" disabled />
            </span>

            <Button type="button" label="Save" icon="pi pi-check" disabled tooltip="A Disabled Button" tooltipOptions={{ showOnDisabled: true }} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    By default disabled elements like <i>button</i> do not trigger user interactions. So for such issues, a disabled element is usually wrapped with an html element like span and the Tooltip wrapper is set to the element. If this
                    operation is requested by the Tooltip component, the <i>showOnDisabled</i> property can be used. This is an optional use.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Tooltip target=".disabled-button" />
                <span className="disabled-button mr-2" data-pr-tooltip="A Disabled Button">
                    <Button type="button" label="Save" icon="pi pi-check" disabled />
                </span>

                <Button type="button" label="Save" icon="pi pi-check" disabled tooltip="A Disabled Button" tooltipOptions={{ showOnDisabled: true }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
