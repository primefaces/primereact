import { useState } from 'react';
import { Slider } from '../../lib/slider/Slider';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" />
        `,
        javascript: `
import { useState } from "react";
import { Slider } from "primereact/slider";

export default function BasicDemo() {
    const [value, setValue] = useState(null);

    return (
        <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Slider, SliderChangeParams } from "primereact/slider";

export default function BasicDemo() {
    const [value, setValue] = useState<number>(null);

    return (
        <Slider value={value} onChange={(e: SliderChangeParams) => setValue(e.value)} className="w-14rem" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Slider is used as a controlled input with <i>value</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
