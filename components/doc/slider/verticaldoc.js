import { useState } from 'react';
import { Slider } from '../../lib/slider/Slider';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function VerticalDoc(props) {
    const [value, setValue] = useState(50);

    const code = {
        basic: `
<Slider value={value} onChange={(e) => setValue(e.value)} orientation="vertical" />
        `,
        javascript: `
import React, { useState } from "react";
import { Slider } from "primereact/slider";

export default function VerticalDemo() {
    const [value, setValue] = useState(50);

    return (
        <div className="card flex justify-content-center">
            <Slider value={value} onChange={(e) => setValue(e.value)} orientation="vertical" className="h-14rem" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Slider, SliderChangeEvent } from "primereact/slider";

export default function VerticalDemo() {
    const [value, setValue] = useState<number>(50);

    return (
        <div className="card flex justify-content-center">
            <Slider value={value} onChange={(e: SliderChangeEvent) => setValue(e.value)} orientation="vertical" className="h-14rem" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Default layout of slider is <i>horizontal</i>, use <i>orientation</i> property for the alternative <i>vertical</i> mode.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Slider value={value} onChange={(e) => setValue(e.value)} orientation="vertical" className="h-14rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
