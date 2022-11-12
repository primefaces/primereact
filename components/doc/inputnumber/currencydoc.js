import { useState } from 'react';
import { InputNumber } from '../../lib/inputnumber/InputNumber';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function CurrencyDoc(props) {
    const [value1, setValue1] = useState(1500);
    const [value2, setValue2] = useState(2500);
    const [value3, setValue3] = useState(4250);
    const [value4, setValue4] = useState(5002);

    const code = {
        basic: `
<InputNumber inputId="currency-us" value={value1} onValueChange={(e) => setValue1(e.value)} mode="currency" currency="USD" locale="en-US" />
<InputNumber inputId="currency-germany" value={value2} onValueChange={(e) => setValue2(e.value)} mode="currency" currency="EUR" locale="de-DE" />
<InputNumber inputId="currency-india" value={value3} onValueChange={(e) => setValue3(e.value)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
<InputNumber inputId="currency-japan" value={value4} onValueChange={(e) => setValue4(e.value)} mode="currency" currency="JPY" locale="jp-JP" />

`,
        javascript: `
import { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function CurrencyDoc() {
    const [value1, setValue1] = useState(1500);
    const [value2, setValue2] = useState(2500);
    const [value3, setValue3] = useState(4250);
    const [value4, setValue4] = useState(5002);

    return (
        <div className="field col-12 md:col-3">
            <label htmlFor="currency-us">United States</label>
            <InputNumber inputId="currency-us" value={value1} onValueChange={(e) => setValue1(e.value)} mode="currency" currency="USD" locale="en-US" />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="currency-germany">Germany</label>
            <InputNumber inputId="currency-germany" value={value2} onValueChange={(e) => setValue2(e.value)} mode="currency" currency="EUR" locale="de-DE" />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="currency-india">India</label>
            <InputNumber inputId="currency-india" value={value3} onValueChange={(e) => setValue3(e.value)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="currency-japan">Japan</label>
            <InputNumber inputId="currency-japan" value={value4} onValueChange={(e) => setValue4(e.value)} mode="currency" currency="JPY" locale="jp-JP" />
        </div>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { InputNumber, InputNumberValueChangeParams } from 'primereact/inputnumber';

export default function CurrencyDoc() {
    const [value1, setValue1] = useState<number>(1500);
    const [value2, setValue2] = useState<number>(2500);
    const [value3, setValue3] = useState<number>(4250);
    const [value4, setValue4] = useState<number>(5002);

    return (
        <div className="field col-12 md:col-3">
            <label htmlFor="currency-us">United States</label>
            <InputNumber inputId="currency-us" value={value1} onValueChange={(e : : InputNumberValueChangeParams) => setValue1(e.value)} mode="currency" currency="USD" locale="en-US" />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="currency-germany">Germany</label>
            <InputNumber inputId="currency-germany" value={value2} onValueChange={(e : : InputNumberValueChangeParams) => setValue2(e.value)} mode="currency" currency="EUR" locale="de-DE" />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="currency-india">India</label>
            <InputNumber inputId="currency-india" value={value3} onValueChange={(e : : InputNumberValueChangeParams) => setValue3(e.value)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="currency-japan">Japan</label>
            <InputNumber inputId="currency-japan" value={value4} onValueChange={(e : InputNumberValueChangeParams) => setValue4(e.value)} mode="currency" currency="JPY" locale="jp-JP" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                The currency to use in currency formatting. Possible values are the <i>ISO 4217 currency codes,</i> such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB. There is no default value; if the style is
                "currency", the currency property must be provided.
            </DocSectionText>
            <div className="card flex justify-content-center p-fluid">
                <div className="field col-12 md:col-3">
                    <label htmlFor="currency-us">United States</label>
                    <InputNumber inputId="currency-us" value={value1} onValueChange={(e) => setValue1(e.value)} mode="currency" currency="USD" locale="en-US" />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="currency-germany">Germany</label>
                    <InputNumber inputId="currency-germany" value={value2} onValueChange={(e) => setValue2(e.value)} mode="currency" currency="EUR" locale="de-DE" />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="currency-india">India</label>
                    <InputNumber inputId="currency-india" value={value3} onValueChange={(e) => setValue3(e.value)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="currency-japan">Japan</label>
                    <InputNumber inputId="currency-japan" value={value4} onValueChange={(e) => setValue4(e.value)} mode="currency" currency="JPY" locale="jp-JP" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
