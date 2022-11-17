import { useState } from 'react';
import { Slider } from '../../lib/slider/Slider';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function StepDoc(props) {
    const [value, setValue] = useState(20);

    const code = {
        basic: `
<Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" step={20} />
        `,
        javascript: `
import { useState } from "react";
import { Slider } from "primereact/slider";

export default function StepDemo() {
    const [value, setValue] = useState(20);

    return (
        <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" step={20} />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Slider, SliderChangeParams } from "primereact/slider";

export default function StepDemo() {
    const [value, setValue] = useState<number>(20);

    return (
        <Slider value={value} onChange={(e: SliderChangeParams) => setValue(e.value)} className="w-14rem" step={20} />
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
