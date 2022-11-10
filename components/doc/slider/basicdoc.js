import { useState } from 'react';
import { Slider } from '../../lib/slider/Slider';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

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
import { Slider } from "primereact/slider";

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
                Slider is used as a controlled input with <i>value</i> and <i>onChange</i> properties.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
