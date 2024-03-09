import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Slider } from '@/components/lib/slider/Slider';
import { useState } from 'react';

export function StepDoc(props) {
    const [value, setValue] = useState(20);

    const code = {
        basic: `
<Slider value={value} onChange={(e) => setValue(e.value)} step={20} />
        `,
        javascript: `
import React, { useState } from "react";
import { Slider } from "primereact/slider";

export default function StepDemo() {
    const [value, setValue] = useState(20);

    return (
        <div className="card flex justify-content-center">
            <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" step={20} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Slider, SliderChangeEvent } from "primereact/slider";

export default function StepDemo() {
    const [value, setValue] = useState<number>(20);

    return (
        <div className="card flex justify-content-center">
            <Slider value={value} onChange={(e: SliderChangeEvent) => setValue(e.value)} className="w-14rem" step={20} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Size of each movement is defined with the <i>step</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" step={20} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
