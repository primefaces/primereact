import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';
import { Slider } from '@/components/lib/slider/Slider';
import { useState } from 'react';

export function InputDoc(props) {
    const [value, setValue] = useState(50);

    const code = {
        basic: `
<InputText value={value} onChange={(e) => setValue(e.target.value)} />
<Slider value={value} onChange={(e) => setValue(e.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";

export default function InputDemo() {
    const [value, setValue] = useState(50);

    return (
        <div className="card flex justify-content-center">
            <div className="w-14rem">
                <InputText value={value} onChange={(e) => setValue(e.target.value)} className="w-full" />
                <Slider value={value} onChange={(e) => setValue(e.value)} className="w-full" />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Slider, SliderChangeEvent } from "primereact/slider";
import { InputText } from "primereact/inputtext";

export default function InputDemo() {
    const [value, setValue] = useState<number>(50);

    return (
        <div className="card flex justify-content-center">
            <div className="w-14rem">
                <InputText value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} className="w-full" />
                <Slider value={value} onChange={(e: SliderChangeEvent) => setValue(e.value)} className="w-full" />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Slider is connected to an input field using two-way binding.</p>
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
