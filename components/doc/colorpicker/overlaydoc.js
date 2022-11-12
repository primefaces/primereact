import { useState } from 'react';
import { ColorPicker } from '../../lib/colorpicker/ColorPicker';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function OverlayDoc(props) {
    const [color, setColor] = useState('1976D2');

    const code = {
        basic: `
<ColorPicker value={color} onChange={(e) => setColor(e.value)} />

        `,
        javascript: `
import { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function BasicDemo() {
    const [color, setColor] = useState('1976D2');

    return (
        <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { ColorPicker, ColorPickerChangeParams } from 'primereact/colorpicker';

export default function BasicDemo() {
    const [color, setColor] = useState<string>('1976D2');

    return (
        <ColorPicker value={color} onChange={(e: ColorPickerChangeParams) => setColor(e.value)} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                ColorPicker is used as a controlled input component with <i>value</i> and <i>onChange</i> properties.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
