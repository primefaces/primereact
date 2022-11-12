import { useState } from 'react';
import { InputNumber } from '../../lib/inputnumber/InputNumber';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function VerticalDoc(props) {
    const [value, setValue] = useState(50);

    const code = {
        basic: `
<InputNumber inputId="vertical" value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" showButtons buttonLayout="vertical" style={{width: '4rem'}} decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />

`,
        javascript: `
import { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function VerticalDoc() {
    const [value, setValue] = useState(50);

    return (
        <div className="field">
            <label htmlFor="vertical" style={{display: 'block'}}>Vertical</label>
            <InputNumber inputId="vertical" value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" showButtons buttonLayout="vertical" style={{width: '4rem'}} decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
        </div>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { InputNumber, InputNumberValueChangeParams } from 'primereact/inputnumber';

export default function VerticalDoc() {
    const [value, setValue] = useState<number>(50);

    return (
        <div className="field">
            <label htmlFor="vertical" style={{display: 'block'}}>Vertical</label>
            <InputNumber inputId="vertical" value={value} onValueChange={(e : InputNumberValueChangeParams) => setValue(e.value)} mode="decimal" showButtons buttonLayout="vertical" style={{width: '4rem'}} decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Spinner buttons is enabled using the <i>showButtons</i> options and layout is defined with the <i>buttonLayout</i>. Default value is "stacked" whereas "horizontal" and "stacked" are alternatives. Note that even there are no buttons,
                up and down arrow keys can be used to spin the values with keyboard.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="field">
                    <label htmlFor="vertical" style={{ display: 'block' }}>
                        Vertical
                    </label>
                    <InputNumber
                        inputId="vertical"
                        value={value}
                        onValueChange={(e) => setValue(e.value)}
                        mode="decimal"
                        showButtons
                        buttonLayout="vertical"
                        style={{ width: '4rem' }}
                        decrementButtonClassName="p-button-secondary"
                        incrementButtonClassName="p-button-secondary"
                        incrementButtonIcon="pi pi-plus"
                        decrementButtonIcon="pi pi-minus"
                    />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
