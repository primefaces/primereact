import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Slider } from '@/components/lib/slider/Slider';
import { useState } from 'react';

export function PTDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<Slider
    value={value}
    onChange={(e) => setValue(e.value)}
    pt={{
        root: { className: 'w-14rem' },
        handle: { className: 'bg-orange-400 border-900' },
        range: { className: 'bg-orange-400' }
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { Slider } from "primereact/slider";

export default function PTDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Slider
                value={value}
                onChange={(e) => setValue(e.value)}
                pt={{
                    root: { className: 'w-14rem' },
                    handle: { className: 'bg-orange-400 border-900' },
                    range: { className: 'bg-orange-400' }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Slider, SliderChangeEvent } from "primereact/slider";

export default function PTDemo() {
    const [value, setValue] = useState<number>(null);

    return (
        <div className="card flex justify-content-center">
            <Slider
                value={value}
                onChange={(e) => setValue(e.value)}
                pt={{
                    root: { className: 'w-14rem' },
                    handle: { className: 'bg-orange-400 border-900' },
                    range: { className: 'bg-orange-400' }
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <Slider
                    value={value}
                    onChange={(e) => setValue(e.value)}
                    pt={{
                        root: { className: 'w-14rem' },
                        handle: { className: 'bg-orange-400 border-900' },
                        range: { className: 'bg-orange-400' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
