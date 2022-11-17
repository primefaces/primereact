import { useState } from 'react';
import { InputText } from '../../lib/inputtext/InputText';
import { Slider } from '../../lib/slider/Slider';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InputDoc(props) {
    const [value, setValue] = useState(50);

    const code = {
        basic: `
<div className="w-14rem">
    <InputText value={value} onChange={(e) => setValue(e.target.value)} className="w-full" />
    <Slider value={value} onChange={(e) => setValue(e.value)} className="w-full" />
</div>
        `,
        javascript: `
import { useState } from "react";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";

export default function InputDemo() {
    const [value, setValue] = useState(50);

    return (
        <div className="w-14rem">
            <InputText value={value} onChange={(e) => setValue(e.target.value)} className="w-full" />
            <Slider value={value} onChange={(e) => setValue(e.value)} className="w-full" />
        </div>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Slider, SliderChangeParams } from "primereact/slider";
import { InputText } from "primereact/inputtext";

export default function InputDemo() {
    const [value, setValue] = useState<number>(50);

    return (
        <div className="w-14rem">
            <InputText value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} className="w-full" />
            <Slider value={value} onChange={(e: SliderChangeParams) => setValue(e.value)} className="w-full" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Slider can be connected to an input field using two-way binding.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="w-14rem">
                    <InputText value={value} onChange={(e) => setValue(e.target.value)} className="w-full" />
                    <Slider value={value} onChange={(e) => setValue(e.value)} className="w-full" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
