import { useState } from 'react';
import { ColorPicker } from '../../lib/colorpicker/ColorPicker';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

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
import { ColorPicker } from 'primereact/colorpicker';

export default function BasicDemo() {
    const [color, setColor] = useState<any>('1976D2');

    return (
        <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
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
