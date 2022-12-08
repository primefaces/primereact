import { useState } from 'react';
import { InputNumber } from '../../lib/inputnumber/InputNumber';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function PrefixDoc(props) {
    const [value1, setValue1] = useState(20);
    const [value2, setValue2] = useState(50);
    const [value3, setValue3] = useState(10);
    const [value4, setValue4] = useState(20);

    const code = {
        basic: `
<InputNumber inputId="mile" value={value1} onValueChange={(e) => setValue1(e.value)} suffix=" mi" />
<InputNumber inputId="percent" value={value2} onValueChange={(e) => setValue2(e.value)} prefix="%" />
<InputNumber inputId="expiry" value={value3} onValueChange={(e) => setValue3(e.value)} prefix="Expires in " suffix=" days" />
<InputNumber inputId="temperature" value={value4} onValueChange={(e) => setValue4(e.value)} prefix="&uarr; " suffix="℃" min={0} max={40} />
`,
        javascript: `
import { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function PrefixDoc() {
    const [value1, setValue1] = useState(20);
    const [value2, setValue2] = useState(50);
    const [value3, setValue3] = useState(10);
    const [value4, setValue4] = useState(20);

    return (
        <div className="field col-12 md:col-3">
            <label htmlFor="mile">Mile</label>
            <InputNumber inputId="mile" value={value1} onValueChange={(e) => setValue1(e.value)} suffix=" mi" />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="percent">Percent</label>
            <InputNumber inputId="percent" value={value2} onValueChange={(e) => setValue2(e.value)} prefix="%" />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="expiry">Expiry</label>
            <InputNumber inputId="expiry" value={value3} onValueChange={(e) => setValue3(e.value)} prefix="Expires in " suffix=" days" />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="temperature">Temperature</label>
            <InputNumber inputId="temperature" value={value4} onValueChange={(e) => setValue4(e.value)} prefix="&uarr; " suffix="℃" min={0} max={40} />
        </div>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { InputNumber, InputNumberValueChangeParams } from 'primereact/inputnumber';

export default function PrefixDoc() {
    const [value1, setValue1] = useState<number>(20);
    const [value2, setValue2] = useState<number>(50);
    const [value3, setValue3] = useState<number>(10);
    const [value4, setValue4] = useState<number>(20);

    return (
        <div className="field col-12 md:col-3">
            <label htmlFor="mile">Mile</label>
            <InputNumber inputId="mile" value={value1} onValueChange={(e : InputNumberValueChangeParams) => setValue1(e.value)} suffix=" mi" />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="percent">Percent</label>
            <InputNumber inputId="percent" value={value2} onValueChange={(e : InputNumberValueChangeParams) => setValue2(e.value)} prefix="%" />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="expiry">Expiry</label>
            <InputNumber inputId="expiry" value={value3} onValueChange={(e : InputNumberValueChangeParams) => setValue3(e.value)} prefix="Expires in " suffix=" days" />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="temperature">Temperature</label>
            <InputNumber inputId="temperature" value={value4} onValueChange={(e : InputNumberValueChangeParams) => setValue4(e.value)} prefix="&uarr; " suffix="℃" min={0} max={40} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Custom texts e.g. units can be placed before or after the input section with the <i>prefix</i> and <i>suffix</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center p-fluid">
                <div className="field col-12 md:col-3">
                    <label htmlFor="mile">Mile</label>
                    <InputNumber inputId="mile" value={value1} onValueChange={(e) => setValue1(e.value)} suffix=" mi" />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="percent">Percent</label>
                    <InputNumber inputId="percent" value={value2} onValueChange={(e) => setValue2(e.value)} prefix="%" />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="expiry">Expiry</label>
                    <InputNumber inputId="expiry" value={value3} onValueChange={(e) => setValue3(e.value)} prefix="Expires in " suffix=" days" />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="temperature">Temperature</label>
                    <InputNumber inputId="temperature" value={value4} onValueChange={(e) => setValue4(e.value)} prefix="&uarr; " suffix="℃" min={0} max={40} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
