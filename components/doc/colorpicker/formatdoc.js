import { useState } from 'react';
import { ColorPicker } from '../../lib/colorpicker/ColorPicker';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function FormatDoc(props) {
    const [color, setColor] = useState('6466f1');

    const code = {
        basic: `
<ColorPicker format="rgb" value={color} onChange={(e) => setColor(e.value)} />

        `,
        javascript: `
import { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function BasicDemo() {
    const [color, setColor] = useState('6466f1');

    return (
        <ColorPicker format="rgb" value={color} onChange={(e) => setColor(e.value)} />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function BasicDemo() {
    const [color, setColor] = useState<any>('6466f1');

    return (
        <ColorPicker format="rgb" value={color} onChange={(e) => setColor(e.value)} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Default color format to use in value binding is "hex" and other possible values are "rgb" and "hsb". Example below has 3 colorpickers having default values with different formats.</DocSectionText>
            <div className="card flex justify-content-center">
                <ColorPicker format="rgb" value={color} onChange={(e) => setColor(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
