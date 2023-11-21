import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputNumber } from '@/components/lib/inputnumber/InputNumber';
import { useState } from 'react';

export function NumeralsDoc(props) {
    const [value1, setValue1] = useState(42723);
    const [value2, setValue2] = useState(58151);
    const [value3, setValue3] = useState(2351.35);
    const [value4, setValue4] = useState(50);

    const code = {
        basic: `
<InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} />
<InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} useGrouping={false} />
<InputNumber value={value3} onValueChange={(e) => setValue3(e.value)} minFractionDigits={2} maxFractionDigits={5} />
<InputNumber value={value4} onValueChange={(e) => setValue4(e.value)} min={0} max={100} />
`,
        javascript: `
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function NumeralsDemo() {
    const [value1, setValue1] = useState(42723);
    const [value2, setValue2] = useState(58151);
    const [value3, setValue3] = useState(2351.35);
    const [value4, setValue4] = useState(50);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="integeronly" className="font-bold block mb-2">Integer Only</label>
                <InputNumber inputId="integeronly" value={value1} onValueChange={(e) => setValue1(e.value)} />
            </div>
            <div className="flex-auto">
                <label htmlFor="withoutgrouping" className="font-bold block mb-2">Without Grouping</label>
                <InputNumber inputId="withoutgrouping" value={value2} onValueChange={(e) => setValue2(e.value)} useGrouping={false} />
            </div>
            <div className="flex-auto">
                <label htmlFor="minmaxfraction" className="font-bold block mb-2">Min-Max Fraction Digits</label>
                <InputNumber inputId="minmaxfraction" value={value3} onValueChange={(e) => setValue3(e.value)} minFractionDigits={2} maxFractionDigits={5} />
            </div>
            <div className="flex-auto">
                <label htmlFor="minmax" className="font-bold block mb-2">Min-Max Boundaries</label>
                <InputNumber inputId="minmax" value={value4} onValueChange={(e) => setValue4(e.value)} min={0} max={100} />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function NumeralsDemo() {
    const [value1, setValue1] = useState<number>(42723);
    const [value2, setValue2] = useState<number>(58151);
    const [value3, setValue3] = useState<number>(2351.35);
    const [value4, setValue4] = useState<number>(50);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="integeronly" className="font-bold block mb-2">Integer Only</label>
                <InputNumber inputId="integeronly" value={value1} onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value)} />
            </div>
            <div className="flex-auto">
                <label htmlFor="withoutgrouping" className="font-bold block mb-2">Without Grouping</label>
                <InputNumber inputId="withoutgrouping" value={value2} onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value)} useGrouping={false} />
            </div>
            <div className="flex-auto">
                <label htmlFor="minmaxfraction" className="font-bold block mb-2">Min-Max Fraction Digits</label>
                <InputNumber inputId="minmaxfraction" value={value3} onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value)} minFractionDigits={2} maxFractionDigits={5} />
            </div>
            <div className="flex-auto">
                <label htmlFor="minmax" className="font-bold block mb-2">Min-Max Boundaries</label>
                <InputNumber inputId="minmax" value={value4} onValueChange={(e: InputNumberValueChangeEvent) => setValue4(e.value)} min={0} max={100} />
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
                    InputNumber is used as a controlled input with <i>value</i> and <i>onValueChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap gap-3 p-fluid">
                <div className="flex-auto">
                    <label htmlFor="integeronly" className="font-bold block mb-2">
                        Integer Only
                    </label>
                    <InputNumber inputId="integeronly" value={value1} onValueChange={(e) => setValue1(e.value)} />
                </div>
                <div className="flex-auto">
                    <label htmlFor="withoutgrouping" className="font-bold block mb-2">
                        Without Grouping
                    </label>
                    <InputNumber inputId="withoutgrouping" value={value2} onValueChange={(e) => setValue2(e.value)} useGrouping={false} />
                </div>
                <div className="flex-auto">
                    <label htmlFor="minmaxfraction" className="font-bold block mb-2">
                        Min-Max Fraction Digits
                    </label>
                    <InputNumber inputId="minmaxfraction" value={value3} onValueChange={(e) => setValue3(e.value)} minFractionDigits={2} maxFractionDigits={5} />
                </div>
                <div className="flex-auto">
                    <label htmlFor="minmax" className="font-bold block mb-2">
                        Min-Max Boundaries
                    </label>
                    <InputNumber inputId="minmax" value={value4} onValueChange={(e) => setValue4(e.value)} min={0} max={100} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
