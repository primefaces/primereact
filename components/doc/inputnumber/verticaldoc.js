import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputNumber } from '@/components/lib/inputnumber/InputNumber';
import { useState } from 'react';

export function VerticalDoc(props) {
    const [value, setValue] = useState(50);

    const code = {
        basic: `
<InputNumber value={value} onValueChange={(e) => setValue(e.value)} showButtons buttonLayout="vertical" style={{ width: '4rem' }} 
    decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
`,
        javascript: `
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function VerticalDemo() {
    const [value, setValue] = useState(50);

    return (
        <div className="card flex justify-content-center">
            <InputNumber value={value} onValueChange={(e) => setValue(e.value)} showButtons buttonLayout="vertical" style={{ width: '4rem' }} 
                    decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
        </div>
)
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function VerticalDemo() {
    const [value, setValue] = useState<number>(50);

    return (
        <div className="card flex justify-content-center">
            <InputNumber value={value} onValueChange={(e: InputNumberValueChangeEvent) => setValue(e.value)} showButtons buttonLayout="vertical" style={{ width: '4rem' }} 
                    decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Buttons can also placed vertically by setting <i>buttonLayout</i> as <i>vertical</i>.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputNumber
                    value={value}
                    onValueChange={(e) => setValue(e.value)}
                    showButtons
                    buttonLayout="vertical"
                    style={{ width: '4rem' }}
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
