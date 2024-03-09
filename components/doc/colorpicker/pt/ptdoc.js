import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ColorPicker } from '@/components/lib/colorpicker/ColorPicker';
import { useState } from 'react';

export function PTDoc(props) {
    const [color, setColor] = useState(null);

    const code = {
        basic: `
<ColorPicker
    value={color}
    onChange={(e) => setColor(e.value)}
    inline
    pt={{
        colorHandler: { className: 'w-1rem h-1rem' }
    }}
/>

        `,
        javascript: `
import React, { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function PTDemo() {
    const [color, setColor] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <ColorPicker
                value={color}
                onChange={(e) => setColor(e.value)}
                inline
                pt={{
                    colorHandler: { className: 'w-1rem h-1rem' }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { ColorPicker, ColorPickerChangeEvent } from 'primereact/colorpicker';

export default function PTDemo() {
    const [color, setColor] = useState<string>(null);

    return (
        <div className="card flex justify-content-center">
            <ColorPicker
                value={color}
                onChange={(e) => setColor(e.value)}
                inline
                pt={{
                    colorHandler: { className: 'w-1rem h-1rem' }
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
                <ColorPicker
                    value={color}
                    onChange={(e) => setColor(e.value)}
                    inline
                    pt={{
                        colorHandler: { className: 'w-1rem h-1rem' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
