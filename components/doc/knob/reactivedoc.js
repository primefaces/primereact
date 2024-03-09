import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Knob } from '@/components/lib/knob/Knob';
import { useState } from 'react';

export function ReactiveDoc(props) {
    const [value, setValue] = useState(0);

    const code = {
        basic: `
<Knob value={value} size={150} />
<Button icon="pi pi-plus" onClick={() => setValue(value + 1)} disabled={value === 100} />
<Button icon="pi pi-minus" onClick={() => setValue(value - 1)} disabled={value === 0} />
        `,
        javascript: `
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

export default function ReactiveDemo() {
    const [value, setValue] = useState(0);

    return (
        <div className="card flex flex-column align-items-center gap-2">
            <Knob value={value} size={150} />
            <div className="flex gap-2">
                <Button icon="pi pi-plus" onClick={() => setValue(value + 1)} disabled={value === 100} />
                <Button icon="pi pi-minus" onClick={() => setValue(value - 1)} disabled={value === 0} />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

export default function ReactiveDemo() {
    const [value, setValue] = useState<number>(0);

    return (
        <div className="card flex flex-column align-items-center gap-2">
            <Knob value={value} size={150} />
            <div className="flex gap-2">
                <Button icon="pi pi-plus" onClick={() => setValue(value + 1)} disabled={value === 100} />
                <Button icon="pi pi-minus" onClick={() => setValue(value - 1)} disabled={value === 0} />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Knob can be controlled with custom controls as well.</p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center gap-2">
                <Knob value={value} size={150} />
                <div className="flex gap-2">
                    <Button icon="pi pi-plus" onClick={() => setValue(value + 1)} disabled={value === 100} />
                    <Button icon="pi pi-minus" onClick={() => setValue(value - 1)} disabled={value === 0} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
