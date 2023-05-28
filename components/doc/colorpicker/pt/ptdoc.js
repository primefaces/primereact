import { useState } from 'react';
import { ColorPicker } from '../../../lib/colorpicker/ColorPicker';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function PTDoc(props) {
    const [color, setColor] = useState(null);

    const code = {
        basic: `
<ColorPicker value={color} onChange={(e) => setColor(e.value)} />

        `,
        javascript: `
import React, { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function PTDemo() {
    const [color, setColor] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
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
            <ColorPicker value={color} onChange={(e: ColorPickerChangeEvent) => setColor(e.value)} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    ColorPicker is used as a controlled input with <i>value</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
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
