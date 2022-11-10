import { useState } from 'react';
import { Slider } from '../../lib/slider/Slider';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function VerticalDoc(props) {
    const [value, setValue] = useState(50);

    const code = {
        basic: `
<Slider value={value} onChange={(e) => setValue(e.value)} orientation="vertical" />
        `,
        javascript: `
import { useState } from "react";
import { Slider } from "primereact/slider";

export default function VerticalDemo() {
    const [value, setValue] = useState(50);

    return (
        <Slider value={value} onChange={(e) => setValue(e.value)} orientation="vertical" />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Slider } from "primereact/slider";

export default function VerticalDemo() {
    const [value, setValue] = useState<number>(50);

    return (
        <Slider value={value} onChange={(e: SliderChangeParams) => setValue(e.value)} orientation="vertical" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Default layout of slider is horizontal, use <i>orientation</i> property for the alternative vertical mode.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Slider value={value} onChange={(e) => setValue(e.value)} orientation="vertical" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
