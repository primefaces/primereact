import { useState } from 'react';
import { InputNumber } from '../../lib/inputnumber/InputNumber';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function NumeralsDoc(props) {
    const [value1, setValue1] = useState(42723);
    const [value2, setValue2] = useState(58151);
    const [value3, setValue3] = useState(2351.35);
    const [value4, setValue4] = useState(50);

    const code = {
        basic: `
<InputNumber inputId="integeronly" value={value1} onValueChange={(e) => setValue1(e.value)} />
<InputNumber inputId="withoutgrouping" value={value2} onValueChange={(e) => setValue2(e.value)} mode="decimal" useGrouping={false} />
<InputNumber inputId="minmaxfraction" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" minFractionDigits={2} maxFractionDigits={5} />
<InputNumber inputId="minmax" value={value4} onValueChange={(e) => setValue4(e.value)} mode="decimal" min={0} max={100} />
`,
        javascript: `
import { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function NumeralsDoc() {
    const [value1, setValue1] = useState(42723);
    const [value2, setValue2] = useState(58151);
    const [value3, setValue3] = useState(2351.35);
    const [value4, setValue4] = useState(50);

    return (
        <div className="field col-12 md:col-3">
            <label htmlFor="integeronly">Integer Only</label>
            <InputNumber inputId="integeronly" value={value1} onValueChange={(e) => setValue1(e.value)} />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="withoutgrouping">Without Grouping</label>
            <InputNumber inputId="withoutgrouping" value={value2} onValueChange={(e) => setValue2(e.value)} mode="decimal" useGrouping={false} />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="minmaxfraction">Min-Max Fraction Digits</label>
            <InputNumber inputId="minmaxfraction" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" minFractionDigits={2} maxFractionDigits={5} />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="minmax">Min-Max Boundaries</label>
            <InputNumber inputId="minmax" value={value4} onValueChange={(e) => setValue4(e.value)} mode="decimal" min={0} max={100} />
        </div> 
    )
}
        `,
        typescript: `
import { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function NumeralsDoc() {
    const [value1, setValue1] = useState<number>(42723);
    const [value2, setValue2] = useState<number>(58151);
    const [value3, setValue3] = useState<number>(2351.35);
    const [value4, setValue4] = useState<number>(50);

    return (
        <div className="field col-12 md:col-3">
            <label htmlFor="integeronly">Integer Only</label>
            <InputNumber inputId="integeronly" value={value1} onValueChange={(e : InputNumberValueChangeParams) => setValue1(e.value)} />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="withoutgrouping">Without Grouping</label>
            <InputNumber inputId="withoutgrouping" value={value2} onValueChange={(e : InputNumberValueChangeParams) => setValue2(e.value)} mode="decimal" useGrouping={false} />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="minmaxfraction">Min-Max Fraction Digits</label>
            <InputNumber inputId="minmaxfraction" value={value3} onValueChange={(e : InputNumberValueChangeParams) => setValue3(e.value)} mode="decimal" minFractionDigits={2} maxFractionDigits={5} />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="minmax">Min-Max Boundaries</label>
            <InputNumber inputId="minmax" value={value4} onValueChange={(e : InputNumberValueChangeParams) => setValue4(e.value)} mode="decimal" min={0} max={100} />
        </div> 
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                InputNumber is used as a controlled input with <i>value</i> and <i>onValueChange</i> properties. Component always provides a number type although formatting on the input is a string.
            </DocSectionText>
            <div className="card flex justify-content-center p-fluid ">
                <div className="field col-12 md:col-3">
                    <label htmlFor="integeronly">Integer Only</label>
                    <InputNumber inputId="integeronly" value={value1} onValueChange={(e) => setValue1(e.value)} />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="withoutgrouping">Without Grouping</label>
                    <InputNumber inputId="withoutgrouping" value={value2} onValueChange={(e) => setValue2(e.value)} mode="decimal" useGrouping={false} />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="minmaxfraction">Min-Max Fraction Digits</label>
                    <InputNumber inputId="minmaxfraction" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" minFractionDigits={2} maxFractionDigits={5} />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="minmax">Min-Max Boundaries</label>
                    <InputNumber inputId="minmax" value={value4} onValueChange={(e) => setValue4(e.value)} mode="decimal" min={0} max={100} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
