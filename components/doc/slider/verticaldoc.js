import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Slider } from '@/components/lib/slider/Slider';
import { useState } from 'react';

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
