import { useState } from 'react';
import { ColorPicker } from '../../lib/colorpicker/ColorPicker';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function InlineDoc(props) {
    const [color, setColor] = useState(null);

    const code = {
        basic: `
<ColorPicker value={color} onChange={(e) => setColor(e.value)} inline />

        `,
        javascript: `
import { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function BasicDemo() {
    const [color, setColor] = useState(null);

    return (
        <ColorPicker value={color} onChange={(e) => setColor(e.value)} inline />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function BasicDemo() {
    const [color, setColor] = useState<any>(null);

    return (
        <ColorPicker value={color} onChange={(e) => setColor(e.value)} inline />
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
                <ColorPicker value={color} onChange={(e) => setColor(e.value)} inline />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
