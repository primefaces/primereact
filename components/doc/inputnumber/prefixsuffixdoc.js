import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputNumber } from '@/components/lib/inputnumber/InputNumber';
import { useState } from 'react';

export function PrefixSuffixDoc(props) {
    const [value1, setValue1] = useState(20);
    const [value2, setValue2] = useState(50);
    const [value3, setValue3] = useState(10);
    const [value4, setValue4] = useState(20);

    const code = {
        basic: `
<InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} suffix=" mi" />
<InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} prefix="%" />
<InputNumber value={value3} onValueChange={(e) => setValue3(e.value)} prefix="Expires in " suffix=" days" />
<InputNumber value={value4} onValueChange={(e) => setValue4(e.value)} prefix="&uarr; " suffix="℃" min={0} max={40} />
`,
        javascript: `
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function PrefixSuffixDemo() {
    const [value1, setValue1] = useState(20);
    const [value2, setValue2] = useState(50);
    const [value3, setValue3] = useState(10);
    const [value4, setValue4] = useState(20);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="mile" className="font-bold block mb-2">Mile</label>
                <InputNumber inputId="mile" value={value1} onValueChange={(e) => setValue1(e.value)} suffix=" mi" />
            </div>
            <div className="flex-auto">
                <label htmlFor="percent" className="font-bold block mb-2">Percent</label>
                <InputNumber inputId="percent" value={value2} onValueChange={(e) => setValue2(e.value)} prefix="%" />
            </div>
            <div className="flex-auto">
                <label htmlFor="expiry" className="font-bold block mb-2">Expiry</label>
                <InputNumber inputId="expiry" value={value3} onValueChange={(e) => setValue3(e.value)} prefix="Expires in " suffix=" days" />
            </div>
            <div className="flex-auto">
                <label htmlFor="temperature" className="font-bold block mb-2">Temperature</label>
                <InputNumber inputId="temperature" value={value4} onValueChange={(e) => setValue4(e.value)} prefix="&uarr; " suffix="℃" min={0} max={40} />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function PrefixSuffixDemo() {
    const [value1, setValue1] = useState<number>(20);
    const [value2, setValue2] = useState<number>(50);
    const [value3, setValue3] = useState<number>(10);
    const [value4, setValue4] = useState<number>(20);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="mile" className="font-bold block mb-2">Mile</label>
                <InputNumber inputId="mile" value={value1} onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value)} suffix=" mi" />
            </div>
            <div className="flex-auto">
                <label htmlFor="percent" className="font-bold block mb-2">Percent</label>
                <InputNumber inputId="percent" value={value2} onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value)} prefix="%" />
            </div>
            <div className="flex-auto">
                <label htmlFor="expiry" className="font-bold block mb-2">Expiry</label>
                <InputNumber inputId="expiry" value={value3} onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value)} prefix="Expires in " suffix=" days" />
            </div>
            <div className="flex-auto">
                <label htmlFor="temperature" className="font-bold block mb-2">Temperature</label>
                <InputNumber inputId="temperature" value={value4} onValueChange={(e: InputNumberValueChangeEvent) => setValue4(e.value)} prefix="&uarr; " suffix="℃" min={0} max={40} />
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
                    Custom texts e.g. units can be placed before or after the input section with the <i>prefix</i> and <i>suffix</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap gap-3 p-fluid">
                <div className="flex-auto">
                    <label htmlFor="mile" className="font-bold block mb-2">
                        Mile
                    </label>
                    <InputNumber inputId="mile" value={value1} onValueChange={(e) => setValue1(e.value)} suffix=" mi" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="percent" className="font-bold block mb-2">
                        Percent
                    </label>
                    <InputNumber inputId="percent" value={value2} onValueChange={(e) => setValue2(e.value)} prefix="%" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="expiry" className="font-bold block mb-2">
                        Expiry
                    </label>
                    <InputNumber inputId="expiry" value={value3} onValueChange={(e) => setValue3(e.value)} prefix="Expires in " suffix=" days" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="temperature" className="font-bold block mb-2">
                        Temperature
                    </label>
                    <InputNumber inputId="temperature" value={value4} onValueChange={(e) => setValue4(e.value)} prefix="&uarr; " suffix="℃" min={0} max={40} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
