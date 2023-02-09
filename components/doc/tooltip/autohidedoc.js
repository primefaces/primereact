import { useState } from 'react';
import { Button } from '../../lib/button/Button';
import { Tooltip } from '../../lib/tooltip/Tooltip';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AutoHideDoc(props) {
    const [count, setCount] = useState(0);

    const code = {
        basic: `
<Button type="button" label="Save" icon="pi pi-check" tooltip="Save (autoHide: true)" />

<Tooltip target=".tooltip-button" autoHide={false}>
    <div className="flex align-items-center">
        <span style={{ minWidth: '5rem' }}>Count: {count}</span>
        <Button type="button" icon="pi pi-plus" onClick={() => setCount(count + 1)} className="p-button-rounded p-button-success ml-2"></Button>
        <Button type="button" icon="pi pi-minus" onClick={() => setCount(count - 1)} className="p-button-rounded p-button-danger ml-2"></Button>
    </div>
</Tooltip>
<Button className="tooltip-button" type="button" label="Number" icon="pi pi-plus" />
        `,
        javascript: `
import React, { useState } from 'react';
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function AutoHideDemo() {
    const [count, setCount] = useState(0);

    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-2">
            <Button type="button" label="Save" icon="pi pi-check" tooltip="Save (autoHide: true)" />

            <Tooltip target=".tooltip-button" autoHide={false}>
                <div className="flex align-items-center">
                    <span style={{ minWidth: '5rem' }}>Count: {count}</span>
                    <Button type="button" icon="pi pi-plus" onClick={() => setCount(count + 1)} className="p-button-rounded p-button-success ml-2"></Button>
                    <Button type="button" icon="pi pi-minus" onClick={() => setCount(count - 1)} className="p-button-rounded p-button-danger ml-2"></Button>
                </div>
            </Tooltip>
            <Button className="tooltip-button" type="button" label="Number" icon="pi pi-plus" />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function AutoHideDemo() {
    const [count, setCount] = useState<number>(0);

    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-2">
            <Button type="button" label="Save" icon="pi pi-check" tooltip="Save (autoHide: true)" />

            <Tooltip target=".tooltip-button" autoHide={false}>
                <div className="flex align-items-center">
                    <span style={{ minWidth: '5rem' }}>Count: {count}</span>
                    <Button type="button" icon="pi pi-plus" onClick={() => setCount(count + 1)} className="p-button-rounded p-button-success ml-2"></Button>
                    <Button type="button" icon="pi pi-minus" onClick={() => setCount(count - 1)} className="p-button-rounded p-button-danger ml-2"></Button>
                </div>
            </Tooltip>
            <Button className="tooltip-button" type="button" label="Number" icon="pi pi-plus" />
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
                <Button type="button" label="Save" icon="pi pi-check" tooltip="Save (autoHide: true)" />

                <Tooltip target=".tooltip-button" autoHide={false}>
                    <div className="flex align-items-center">
                        <span style={{ minWidth: '5rem' }}>Count: {count}</span>
                        <Button type="button" icon="pi pi-plus" onClick={() => setCount(count + 1)} className="p-button-rounded p-button-success ml-2"></Button>
                        <Button type="button" icon="pi pi-minus" onClick={() => setCount(count - 1)} className="p-button-rounded p-button-danger ml-2"></Button>
                    </div>
                </Tooltip>
                <Button className="tooltip-button" type="button" label="Number" icon="pi pi-plus" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
