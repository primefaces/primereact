import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputNumber } from '@/components/lib/inputnumber/InputNumber';
import { useState } from 'react';

export function PTDoc(props) {
    const [value, setValue] = useState(20);

    const code = {
        basic: `
<InputNumber
    inputId="horizontal-buttons"
    value={value}
    onValueChange={(e) => setValue(e.value)}
    showButtons
    buttonLayout="horizontal"
    step={0.25}
    decrementButtonClassName="p-button-danger"
    incrementButtonClassName="p-button-success"
    incrementButtonIcon="pi pi-plus"
    decrementButtonIcon="pi pi-minus"
    mode="currency"
    currency="EUR"
    pt={{
        incrementButton: { className: 'bg-teal-500 border-teal-500' },
        decrementButton: { className: 'bg-orange-500 border-orange-500' }
    }}
/>
`,
        javascript: `
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function PTDemo() {
    const [value, setValue] = useState(20);

    return (
        <div className="card flex justify-content-center">
            <InputNumber
                inputId="horizontal-buttons"
                value={value}
                onValueChange={(e) => setValue(e.value)}
                showButtons
                buttonLayout="horizontal"
                step={0.25}
                decrementButtonClassName="p-button-danger"
                incrementButtonClassName="p-button-success"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                mode="currency"
                currency="EUR"
                pt={{
                    incrementButton: { className: 'bg-teal-500 border-teal-500' },
                    decrementButton: { className: 'bg-orange-500 border-orange-500' }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function PTDemo() {
    const [value, setValue] = useState<number>(20);

    return (
        <div className="card flex justify-content-center">
            <InputNumber
                inputId="horizontal-buttons"
                value={value}
                onValueChange={(e) => setValue(e.value)}
                showButtons
                buttonLayout="horizontal"
                step={0.25}
                decrementButtonClassName="p-button-danger"
                incrementButtonClassName="p-button-success"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                mode="currency"
                currency="EUR"
                pt={{
                    incrementButton: { className: 'bg-teal-500 border-teal-500' },
                    decrementButton: { className: 'bg-orange-500 border-orange-500' }
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <InputNumber
                    inputId="horizontal-buttons"
                    value={value}
                    onValueChange={(e) => setValue(e.value)}
                    showButtons
                    buttonLayout="horizontal"
                    step={0.25}
                    decrementButtonClassName="p-button-danger"
                    incrementButtonClassName="p-button-success"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    mode="currency"
                    currency="EUR"
                    pt={{
                        incrementButton: { className: 'bg-teal-500 border-teal-500' },
                        decrementButton: { className: 'bg-orange-500 border-orange-500' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
