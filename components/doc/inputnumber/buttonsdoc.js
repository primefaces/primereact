import { useState } from 'react';
import { InputNumber } from '../../lib/inputnumber/InputNumber';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ButtonsDoc(props) {
    const [value1, setValue1] = useState(20);
    const [value2, setValue2] = useState(10.5);
    const [value3, setValue3] = useState(25);

    const code = {
        basic: `
<InputNumber inputId="stacked" value={value1} onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value)} showButtons mode="currency" currency="USD" />
<InputNumber inputId="minmax-buttons" value={value3} onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value)} mode="decimal" showButtons min={0} max={100} />
<InputNumber inputId="horizontal" value={value2} onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value)} showButtons buttonLayout="horizontal" step={0.25}
            decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"
            mode="currency" currency="EUR" />
`,
        javascript: `
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function ButtonsDemo() {
    const [value1, setValue1] = useState(20);
    const [value2, setValue2] = useState(10.50);
    const [value3, setValue3] = useState(25);

    return (
        <div class="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="stacked" className="font-bold block mb-2">Stacked</label>
                <InputNumber inputId="stacked" value={value1} onValueChange={(e) => setValue1(e.value)} showButtons mode="currency" currency="USD" />
            </div>
            
            <div className="flex-auto">
                <label htmlFor="minmax-buttons" className="font-bold block mb-2">Min-Max Boundaries</label>
                <InputNumber inputId="minmax-buttons" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" showButtons min={0} max={100} />
            </div>
            <div className="flex-auto">
                <label htmlFor="horizontal" className="font-bold block mb-2">Horizontal with Step</label>
                <InputNumber inputId="horizontal" value={value2} onValueChange={(e) => setValue2(e.value)} showButtons buttonLayout="horizontal" step={0.25}
                    decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"
                    mode="currency" currency="EUR" />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function ButtonsDemo() {
    const [value1, setValue1] = useState<number>(20);
    const [value2, setValue2] = useState<number>(10.50);
    const [value3, setValue3] = useState<number>(25);

    return (
        <div class="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="stacked" className="font-bold block mb-2">Stacked</label>
                <InputNumber inputId="stacked" value={value1} onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value)} showButtons mode="currency" currency="USD" />
            </div>
            
            <div className="flex-auto">
                <label htmlFor="minmax-buttons" className="font-bold block mb-2">Min-Max Boundaries</label>
                <InputNumber inputId="minmax-buttons" value={value3} onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value)} mode="decimal" showButtons min={0} max={100} />
            </div>
            <div className="flex-auto">
                <label htmlFor="horizontal" className="font-bold block mb-2">Horizontal with Step</label>
                <InputNumber inputId="horizontal" value={value2} onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value)} showButtons buttonLayout="horizontal" step={0.25}
                    decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"
                    mode="currency" currency="EUR" />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Spinner buttons are enabled using the <i>showButtons</i> property and layout is defined with the <i>buttonLayout</i>.</p>
            </DocSectionText>
            <div class="card flex flex-wrap gap-3 p-fluid">
                <div className="flex-auto">
                    <label htmlFor="stacked" className="font-bold block mb-2">Stacked</label>
                    <InputNumber inputId="stacked" value={value1} onValueChange={(e) => setValue1(e.value)} showButtons mode="currency" currency="USD" />
                </div>
                
                <div className="flex-auto">
                    <label htmlFor="minmax-buttons" className="font-bold block mb-2">Min-Max Boundaries</label>
                    <InputNumber inputId="minmax-buttons" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" showButtons min={0} max={100} />
                </div>
                <div className="flex-auto">
                    <label htmlFor="horizontal" className="font-bold block mb-2">Horizontal with Step</label>
                    <InputNumber inputId="horizontal" value={value2} onValueChange={(e) => setValue2(e.value)} showButtons buttonLayout="horizontal" step={0.25}
                        decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"
                        mode="currency" currency="EUR" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
