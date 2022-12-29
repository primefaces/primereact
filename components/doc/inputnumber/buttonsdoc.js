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
<InputNumber inputId="stacked" value={value1} onValueChange={(e) => setValue1(e.value)} showButtons mode="currency" currency="USD" />
<InputNumber inputId="horizontal" value={value2} onValueChange={(e) => setValue2(e.value)} showButtons buttonLayout="horizontal" step={0.25} decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR"/>
<InputNumber inputId="minmax-buttons" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" showButtons min={0} max={100} />
`,
        javascript: `
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function ButtonsDoc() {
    const [value1, setValue1] = useState(20);
    const [value2, setValue2] = useState(10.50);
    const [value3, setValue3] = useState(25);

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
            <div className="field col-12 md:col-3">
                <label htmlFor="stacked">Stacked</label>
                <InputNumber inputId="stacked" value={value1} onValueChange={(e) => setValue1(e.value)} showButtons mode="currency" currency="USD" />
            </div>
            <div className="field col-12 md:col-3">
                <label htmlFor="horizontal">Horizontal with Step</label>
                <InputNumber inputId="horizontal" value={value2} onValueChange={(e) => setValue2(e.value)} showButtons buttonLayout="horizontal" step={0.25} decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR"/>
            </div>
            <div className="field col-12 md:col-3">
                <label htmlFor="minmax-buttons">Min-Max Boundaries</label>
                <InputNumber inputId="minmax-buttons" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" showButtons min={0} max={100} />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeParams } from 'primereact/inputnumber';

export default function ButtonsDoc() {
    const [value1, setValue1] = useState<number>(20);
    const [value2, setValue2] = useState<number>(10.50);
    const [value3, setValue3] = useState<number>(25);

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
            <div className="field col-12 md:col-3">
                <label htmlFor="stacked">Stacked</label>
                <InputNumber inputId="stacked" value={value1} onValueChange={(e : InputNumberValueChangeParams) => setValue1(e.value)} showButtons mode="currency" currency="USD" />
            </div>
            <div className="field col-12 md:col-3">
                <label htmlFor="horizontal">Horizontal with Step</label>
                <InputNumber inputId="horizontal" value={value2} onValueChange={(e : InputNumberValueChangeParams) => setValue2(e.value)} showButtons buttonLayout="horizontal" step={0.25} decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR"/>
            </div>
            <div className="field col-12 md:col-3">
                <label htmlFor="minmax-buttons">Min-Max Boundaries</label>
                <InputNumber inputId="minmax-buttons" value={value3} onValueChange={(e : InputNumberValueChangeParams) => setValue3(e.value)} mode="decimal" showButtons min={0} max={100} />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Spinner buttons is enabled using the <i>showButtons</i> options and layout is defined with the <i>buttonLayout</i>. Default value is "stacked" whereas "horizontal" and "stacked" are alternatives. Note that even there are no
                    buttons, up and down arrow keys can be used to spin the values with keyboard.
                </p>
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <div className="field">
                    <label htmlFor="stacked">Stacked</label>
                    <InputNumber inputId="stacked" value={value1} onValueChange={(e) => setValue1(e.value)} showButtons mode="currency" currency="USD" />
                </div>
                <div className="field ">
                    <label htmlFor="horizontal">Horizontal with Step</label>
                    <InputNumber
                        inputId="horizontal"
                        value={value2}
                        onValueChange={(e) => setValue2(e.value)}
                        showButtons
                        buttonLayout="horizontal"
                        step={0.25}
                        decrementButtonClassName="p-button-danger"
                        incrementButtonClassName="p-button-success"
                        incrementButtonIcon="pi pi-plus"
                        decrementButtonIcon="pi pi-minus"
                        mode="currency"
                        currency="EUR"
                    />
                </div>
                <div className="field ">
                    <label htmlFor="minmax-buttons">Min-Max Boundaries</label>
                    <InputNumber inputId="minmax-buttons" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" showButtons min={0} max={100} />
                </div>
            </div>

            <DocSectionCode code={code} />
        </>
    );
}
