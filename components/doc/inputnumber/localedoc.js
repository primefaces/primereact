import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputNumber } from '@/components/lib/inputnumber/InputNumber';
import { useState } from 'react';

export function LocaleDoc(props) {
    const [value1, setValue1] = useState(151351);
    const [value2, setValue2] = useState(115744);
    const [value3, setValue3] = useState(635524);
    const [value4, setValue4] = useState(732762);

    const code = {
        basic: `
<InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} minFractionDigits={2} />
<InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} locale="en-US" minFractionDigits={2} />
<InputNumber value={value3} onValueChange={(e) => setValue3(e.value)} locale="de-DE" minFractionDigits={2} />
<InputNumber value={value4} onValueChange={(e) => setValue4(e.value)} locale="en-IN" minFractionDigits={2} />
`,
        javascript: `
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function LocaleDemo() {
    const [value1, setValue1] = useState(151351);
    const [value2, setValue2] = useState(115744);
    const [value3, setValue3] = useState(635524);
    const [value4, setValue4] = useState(732762);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="locale-user" className="font-bold block mb-2">User Locale</label>
                <InputNumber inputId="locale-user" value={value1} onValueChange={(e) => setValue1(e.value)} minFractionDigits={2} />
            </div>
            <div className="flex-auto">
                <label htmlFor="locale-us" className="font-bold block mb-2">United States Locale</label>
                <InputNumber inputId="locale-us" value={value2} onValueChange={(e) => setValue2(e.value)} locale="en-US" minFractionDigits={2} />
            </div>
            <div className="flex-auto">
                <label htmlFor="locale-german" className="font-bold block mb-2">German Locale</label>
                <InputNumber inputId="locale-german" value={value3} onValueChange={(e) => setValue3(e.value)} locale="de-DE" minFractionDigits={2} />
            </div>
            <div className="flex-auto">
                <label htmlFor="locale-indian" className="font-bold block mb-2">Indian Locale</label>
                <InputNumber inputId="locale-indian" value={value4} onValueChange={(e) => setValue4(e.value)} locale="en-IN" minFractionDigits={2} />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function LocaleDemo() {
    const [value1, setValue1] = useState<number>(151351);
    const [value2, setValue2] = useState<number>(115744);
    const [value3, setValue3] = useState<number>(635524);
    const [value4, setValue4] = useState<number>(732762);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="locale-user" className="font-bold block mb-2">User Locale</label>
                <InputNumber inputId="locale-user" value={value1} onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value)} minFractionDigits={2} />
            </div>
            <div className="flex-auto">
                <label htmlFor="locale-us" className="font-bold block mb-2">United States Locale</label>
                <InputNumber inputId="locale-us" value={value2} onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value)} locale="en-US" minFractionDigits={2} />
            </div>
            <div className="flex-auto">
                <label htmlFor="locale-german" className="font-bold block mb-2">German Locale</label>
                <InputNumber inputId="locale-german" value={value3} onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value)} locale="de-DE" minFractionDigits={2} />
            </div>
            <div className="flex-auto">
                <label htmlFor="locale-indian" className="font-bold block mb-2">Indian Locale</label>
                <InputNumber inputId="locale-indian" value={value4} onValueChange={(e: InputNumberValueChangeEvent) => setValue4(e.value)} locale="en-IN" minFractionDigits={2} />
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
                    Localization information such as grouping and decimal symbols are defined with the <i>locale</i> property which defaults to the user locale.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap gap-3 p-fluid">
                <div className="flex-auto">
                    <label htmlFor="locale-user" className="font-bold block mb-2">
                        User Locale
                    </label>
                    <InputNumber inputId="locale-user" value={value1} onValueChange={(e) => setValue1(e.value)} minFractionDigits={2} />
                </div>
                <div className="flex-auto">
                    <label htmlFor="locale-us" className="font-bold block mb-2">
                        United States Locale
                    </label>
                    <InputNumber inputId="locale-us" value={value2} onValueChange={(e) => setValue2(e.value)} locale="en-US" minFractionDigits={2} />
                </div>
                <div className="flex-auto">
                    <label htmlFor="locale-german" className="font-bold block mb-2">
                        German Locale
                    </label>
                    <InputNumber inputId="locale-german" value={value3} onValueChange={(e) => setValue3(e.value)} locale="de-DE" minFractionDigits={2} />
                </div>
                <div className="flex-auto">
                    <label htmlFor="locale-indian" className="font-bold block mb-2">
                        Indian Locale
                    </label>
                    <InputNumber inputId="locale-indian" value={value4} onValueChange={(e) => setValue4(e.value)} locale="en-IN" minFractionDigits={2} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
