import { useState } from 'react';
import { InputNumber } from '../../lib/inputnumber/InputNumber';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function LocaleDoc(props) {
    const [value1, setValue1] = useState(151351);
    const [value2, setValue2] = useState(115744);
    const [value3, setValue3] = useState(635524);
    const [value4, setValue4] = useState(732762);

    const code = {
        basic: `
<InputNumber inputId="locale-user" value={value1} onValueChange={(e) => setValue1(e.value)} mode="decimal" minFractionDigits={2} />
<InputNumber inputId="locale-us" value={value2} onValueChange={(e) => setValue2(e.value)} mode="decimal" locale="en-US" minFractionDigits={2} />
<InputNumber inputId="locale-german" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" locale="de-DE" minFractionDigits={2} />
<InputNumber inputId="locale-indian" value={value4} onValueChange={(e) => setValue4(e.value)} mode="decimal" locale="en-IN" minFractionDigits={2} />

`,
        javascript: `
import { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function LocaleDoc() {
    const [value1, setValue1] = useState(151351);
    const [value2, setValue2] = useState(115744);
    const [value3, setValue3] = useState(635524);
    const [value4, setValue4] = useState(732762);

    return (
        <div className="field col-12 md:col-3">
            <label htmlFor="locale-user">User Locale</label>
            <InputNumber inputId="locale-user" value={value1} onValueChange={(e) => setValue1(e.value)} mode="decimal" minFractionDigits={2} />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="locale-us">United States Locale</label>
            <InputNumber inputId="locale-us" value={value2} onValueChange={(e) => setValue2(e.value)} mode="decimal" locale="en-US" minFractionDigits={2} />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="locale-german">German Locale</label>
            <InputNumber inputId="locale-german" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" locale="de-DE" minFractionDigits={2} />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="locale-indian">Indian Locale</label>
            <InputNumber inputId="locale-indian" value={value4} onValueChange={(e) => setValue4(e.value)} mode="decimal" locale="en-IN" minFractionDigits={2} />
        </div>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function LocaleDoc() {
    const [value1, setValue1] = useState<number>(151351);
    const [value2, setValue2] = useState<number>(115744);
    const [value3, setValue3] = useState<number>(635524);
    const [value4, setValue4] = useState<number>(732762);

    return (
        <div className="field col-12 md:col-3">
            <label htmlFor="locale-user">User Locale</label>
            <InputNumber inputId="locale-user" value={value1} onValueChange={(e : InputNumberValueChangeParams) => setValue1(e.value)} mode="decimal" minFractionDigits={2} />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="locale-us">United States Locale</label>
            <InputNumber inputId="locale-us" value={value2} onValueChange={(e : InputNumberValueChangeParams) => setValue2(e.value)} mode="decimal" locale="en-US" minFractionDigits={2} />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="locale-german">German Locale</label>
            <InputNumber inputId="locale-german" value={value3} onValueChange={(e : InputNumberValueChangeParams) => setValue3(e.value)} mode="decimal" locale="de-DE" minFractionDigits={2} />
        </div>
        <div className="field col-12 md:col-3">
            <label htmlFor="locale-indian">Indian Locale</label>
            <InputNumber inputId="locale-indian" value={value4} onValueChange={(e : InputNumberValueChangeParams) => setValue4(e.value)} mode="decimal" locale="en-IN" minFractionDigits={2} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <i>locale option</i> is available to set the localization information such as grouping and decimal symbols where default value is the browser locale. Locales are defined per <i>BCP Language Tag.</i>
            </DocSectionText>
            <div className="card flex justify-content-center p-fluid">
                <div className="field col-12 md:col-3">
                    <label htmlFor="locale-user">User Locale</label>
                    <InputNumber inputId="locale-user" value={value1} onValueChange={(e) => setValue1(e.value)} mode="decimal" minFractionDigits={2} />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="locale-us">United States Locale</label>
                    <InputNumber inputId="locale-us" value={value2} onValueChange={(e) => setValue2(e.value)} mode="decimal" locale="en-US" minFractionDigits={2} />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="locale-german">German Locale</label>
                    <InputNumber inputId="locale-german" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" locale="de-DE" minFractionDigits={2} />
                </div>
                <div className="field col-12 md:col-3">
                    <label htmlFor="locale-indian">Indian Locale</label>
                    <InputNumber inputId="locale-indian" value={value4} onValueChange={(e) => setValue4(e.value)} mode="decimal" locale="en-IN" minFractionDigits={2} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
