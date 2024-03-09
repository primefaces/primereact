import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ColorPicker } from '@/components/lib/colorpicker/ColorPicker';
import { useState } from 'react';

export function BasicDoc(props) {
    const [color, setColor] = useState(null);

    const code = {
        basic: `
<ColorPicker value={color} onChange={(e) => setColor(e.value)} />

        `,
        javascript: `
import React, { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function BasicDemo() {
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

export default function BasicDemo() {
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
                <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
