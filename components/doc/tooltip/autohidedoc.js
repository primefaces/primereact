import { useState } from 'react';
import { Tooltip } from '../../lib/tooltip/Tooltip';
import { Button } from '../../lib/button/Button';
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
<Button className="tooltip-button ml-2" type="button" label="Save" icon="pi pi-check" />
        `,
        javascript: `
import React, { useState } from 'react';
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function AutoHideDoc() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Button type="button" label="Save" icon="pi pi-check" tooltip="Save (autoHide: true)" />

            <Tooltip target=".tooltip-button" autoHide={false}>
                <div className="flex align-items-center">
                    <span style={{ minWidth: '5rem' }}>Count: {count}</span>
                    <Button type="button" icon="pi pi-plus" onClick={() => setCount(count + 1)} className="p-button-rounded p-button-success ml-2"></Button>
                    <Button type="button" icon="pi pi-minus" onClick={() => setCount(count - 1)} className="p-button-rounded p-button-danger ml-2"></Button>
                </div>
            </Tooltip>
            <Button className="tooltip-button ml-2" type="button" label="Save" icon="pi pi-check" />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function AutoHideDoc() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Button type="button" label="Save" icon="pi pi-check" tooltip="Save (autoHide: true)" />

            <Tooltip target=".tooltip-button" autoHide={false}>
                <div className="flex align-items-center">
                    <span style={{ minWidth: '5rem' }}>Count: {count}</span>
                    <Button type="button" icon="pi pi-plus" onClick={() => setCount(count + 1)} className="p-button-rounded p-button-success ml-2"></Button>
                    <Button type="button" icon="pi pi-minus" onClick={() => setCount(count - 1)} className="p-button-rounded p-button-danger ml-2"></Button>
                </div>
            </Tooltip>
            <Button className="tooltip-button ml-2" type="button" label="Save" icon="pi pi-check" />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>AutoHide</p>
            </DocSectionText>
            <div className="card flex align-items-center justify-content-center">
                <Button type="button" label="Save" icon="pi pi-check" tooltip="Save (autoHide: true)" />

                <Tooltip target=".tooltip-button" autoHide={false}>
                    <div className="flex align-items-center">
                        <span style={{ minWidth: '5rem' }}>Count: {count}</span>
                        <Button type="button" icon="pi pi-plus" onClick={() => setCount(count + 1)} className="p-button-rounded p-button-success ml-2"></Button>
                        <Button type="button" icon="pi pi-minus" onClick={() => setCount(count - 1)} className="p-button-rounded p-button-danger ml-2"></Button>
                    </div>
                </Tooltip>
                <Button className="tooltip-button ml-2" type="button" label="Save" icon="pi pi-check" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
