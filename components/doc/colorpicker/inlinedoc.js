import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ColorPicker } from '@/components/lib/colorpicker/ColorPicker';
import { useState } from 'react';

export function InlineDoc(props) {
    const [color, setColor] = useState(null);

    const code = {
        basic: `
<ColorPicker value={color} onChange={(e) => setColor(e.value)} inline />
        `,
        javascript: `
import React, { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function InlineDemo() {
    const [color, setColor] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <ColorPicker value={color} onChange={(e) => setColor(e.value)} inline />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { ColorPicker, ColorPickerChangeEvent } from 'primereact/colorpicker';

export default function InlineDemo() {
    const [color, setColor] = useState<string>(null);

    return (
        <div className="card flex justify-content-center">
            <ColorPicker value={color} onChange={(e: ColorPickerChangeEvent) => setColor(e.value)} inline />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    ColorPicker is displayed as a popup by default, add <i>inline</i> property to customize this behavior.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ColorPicker value={color} onChange={(e) => setColor(e.value)} inline />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
