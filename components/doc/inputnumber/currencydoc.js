import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputNumber } from '@/components/lib/inputnumber/InputNumber';
import { useState } from 'react';

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
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function CurrencyDemo() {
    const [value1, setValue1] = useState(1500);
    const [value2, setValue2] = useState(2500);
    const [value3, setValue3] = useState(4250);
    const [value4, setValue4] = useState(5002);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="currency-us" className="font-bold block mb-2">United States</label>
                <InputNumber inputId="currency-us" value={value1} onValueChange={(e) => setValue1(e.value)} mode="currency" currency="USD" locale="en-US" />
            </div>
            <div className="flex-auto">
                <label htmlFor="currency-germany" className="font-bold block mb-2">Germany</label>
                <InputNumber inputId="currency-germany" value={value2} onValueChange={(e) => setValue2(e.value)} mode="currency" currency="EUR" locale="de-DE" />
            </div>
            <div className="flex-auto">
                <label htmlFor="currency-india" className="font-bold block mb-2">India</label>
                <InputNumber inputId="currency-india" value={value3} onValueChange={(e) => setValue3(e.value)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
            </div>
            <div className="flex-auto">
                <label htmlFor="currency-japan" className="font-bold block mb-2">Japan</label>
                <InputNumber inputId="currency-japan" value={value4} onValueChange={(e) => setValue4(e.value)} mode="currency" currency="JPY" locale="jp-JP" />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function CurrencyDemo() {
    const [value1, setValue1] = useState<number>(1500);
    const [value2, setValue2] = useState<number>(2500);
    const [value3, setValue3] = useState<number>(4250);
    const [value4, setValue4] = useState<number>(5002);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="currency-us" className="font-bold block mb-2">United States</label>
                <InputNumber inputId="currency-us" value={value1} onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value)} mode="currency" currency="USD" locale="en-US" />
            </div>
            <div className="flex-auto">
                <label htmlFor="currency-germany" className="font-bold block mb-2">Germany</label>
                <InputNumber inputId="currency-germany" value={value2} onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value)} mode="currency" currency="EUR" locale="de-DE" />
            </div>
            <div className="flex-auto">
                <label htmlFor="currency-india" className="font-bold block mb-2">India</label>
                <InputNumber inputId="currency-india" value={value3} onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
            </div>
            <div className="flex-auto">
                <label htmlFor="currency-japan" className="font-bold block mb-2">Japan</label>
                <InputNumber inputId="currency-japan" value={value4} onValueChange={(e: InputNumberValueChangeEvent) => setValue4(e.value)} mode="currency" currency="JPY" locale="jp-JP" />
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
                    Monetary values are enabled by setting <i>mode</i> property as <i>currency</i>. In this setting, <i>currency</i> property also needs to be defined using ISO 4217 standard such as "USD" for the US dollar.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap gap-3 p-fluid">
                <div className="flex-auto">
                    <label htmlFor="currency-us" className="font-bold block mb-2">
                        United States
                    </label>
                    <InputNumber inputId="currency-us" value={value1} onValueChange={(e) => setValue1(e.value)} mode="currency" currency="USD" locale="en-US" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="currency-germany" className="font-bold block mb-2">
                        Germany
                    </label>
                    <InputNumber inputId="currency-germany" value={value2} onValueChange={(e) => setValue2(e.value)} mode="currency" currency="EUR" locale="de-DE" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="currency-india" className="font-bold block mb-2">
                        India
                    </label>
                    <InputNumber inputId="currency-india" value={value3} onValueChange={(e) => setValue3(e.value)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="currency-japan" className="font-bold block mb-2">
                        Japan
                    </label>
                    <InputNumber inputId="currency-japan" value={value4} onValueChange={(e) => setValue4(e.value)} mode="currency" currency="JPY" locale="jp-JP" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
