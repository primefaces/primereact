import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';

export function AutoHideDoc(props) {
    const code = {
        basic: `
<InputText type="text" placeholder="autoHide: false" tooltip="Enter your username" tooltipOptions={{ autoHide: false }} />
<InputText type="text" placeholder="autoHide: true" tooltip="Enter your username" />
        `,
        javascript: `
import React from 'react';
import { InputText } from 'primereact/inputtext';

export default function AutoHideDemo() {

    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-2">
            <InputText type="text" placeholder="autoHide: false" tooltip="Enter your username" tooltipOptions={{ autoHide: false }} />
            <InputText type="text" placeholder="autoHide: true" tooltip="Enter your username" />
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { InputText } from 'primereact/inputtext';

export default function AutoHideDemo() {

    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-2">
            <InputText type="text" placeholder="autoHide: false" tooltip="Enter your username" tooltipOptions={{ autoHide: false }} />
            <InputText type="text" placeholder="autoHide: true" tooltip="Enter your username" />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Tooltip is hidden when mouse leaves the target element, in cases where tooltip needs to be interacted with, set <i>autoHide</i> to false to change the default behavior.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap align-items-center justify-content-center gap-2">
                <InputText type="text" placeholder="autoHide: false" tooltip="Enter your username" tooltipOptions={{ autoHide: false }} />
                <InputText type="text" placeholder="autoHide: true" tooltip="Enter your username" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
