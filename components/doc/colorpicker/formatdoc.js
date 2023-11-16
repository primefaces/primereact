import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ColorPicker } from '@/components/lib/colorpicker/ColorPicker';
import { useState } from 'react';

export function FormatDoc(props) {
    const [colorHEX, setColorHEX] = useState('6466f1');
    const [colorRGB, setColorRGB] = useState({ r: 100, g: 102, b: 241 });
    const [colorHSB, setColorHSB] = useState({ h: 239, s: 59, b: 95 });

    const code = {
        basic: `
<ColorPicker format="hex" value={colorHEX} onChange={(e) => setColorHEX(e.value)} />
<ColorPicker format="rgb" value={colorRGB} onChange={(e) => setColorRGB(e.value)} />
<ColorPicker format="hsb" value={colorHSB} onChange={(e) => setColorHSB(e.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function FormatDemo() {
    const [colorHEX, setColorHEX] = useState('6466f1');
    const [colorRGB, setColorRGB] = useState({ r: 100, g: 102, b: 241 });
    const [colorHSB, setColorHSB] = useState({ h: 239, s: 59, b: 95 });

    return (
        <div className="card flex flex-wrap gap-3">
            <div className="flex-1 flex flex-column align-items-center">
                <label htmlFor="cp-hex" className="font-bold block mb-2">
                    HEX
                </label>
                <ColorPicker inputId="cp-hex" format="hex" value={colorHEX} onChange={(e) => setColorHEX(e.value)} className="mb-3" />
                <span>{colorHEX}</span>
            </div>
            <div className="flex-1 flex flex-column align-items-center">
                <label htmlFor="cp-rgb" className="font-bold block mb-2">
                    RGB
                </label>
                <ColorPicker inputId="cp-rgb" format="rgb" value={colorRGB} onChange={(e) => setColorRGB(e.value)} className="mb-3" />
                <span>{JSON.stringify(colorRGB)}</span>
            </div>
            <div className="flex-1 flex flex-column align-items-center">
                <label htmlFor="cp-hsb" className="font-bold block mb-2">
                    HSB
                </label>
                <ColorPicker inputId="cp-hsb" format="hsb" value={colorHSB} onChange={(e) => setColorHSB(e.value)} className="mb-3" />
                <span>{JSON.stringify(colorHSB)}</span>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { ColorPicker, ColorPickerChangeEvent } from 'primereact/colorpicker';

interface RGB {
    r: number;
    g: number;
    b: number;
}

interface HSB {
    h: number;
    s: number;
    b: number;
}

export default function FormatDemo() {
    const [colorHEX, setColorHEX] = useState<string>('6466f1');
    const [colorRGB, setColorRGB] = useState<RGB>({ r: 100, g: 102, b: 241 });
    const [colorHSB, setColorHSB] = useState<HSB>({ h: 239, s: 59, b: 95 });

    return (
        <div className="card flex flex-wrap gap-3">
            <div className="flex-1 flex flex-column align-items-center">
                <label htmlFor="cp-hex" className="font-bold block mb-2">
                    HEX
                </label>
                <ColorPicker inputId="cp-hex" format="hex" value={colorHEX} onChange={(e: ColorPickerChangeEvent) => setColorHEX(e.value)} className="mb-3" />
                <span>{colorHEX}</span>
            </div>
            <div className="flex-1 flex flex-column align-items-center">
                <label htmlFor="cp-rgb" className="font-bold block mb-2">
                    RGB
                </label>
                <ColorPicker inputId="cp-rgb" format="rgb" value={colorRGB} onChange={(e: ColorPickerChangeEvent) => setColorRGB(e.value)} className="mb-3" />
                <span>{JSON.stringify(colorRGB)}</span>
            </div>
            <div className="flex-1 flex flex-column align-items-center">
                <label htmlFor="cp-hsb" className="font-bold block mb-2">
                    HSB
                </label>
                <ColorPicker inputId="cp-hsb" format="hsb" value={colorHSB} onChange={(e: ColorPickerChangeEvent) => setColorHSB(e.value)} className="mb-3" />
                <span>{JSON.stringify(colorHSB)}</span>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Default color format to use in value binding is <i>hex</i> and other possible values can be <i>rgb</i> and <i>hsb</i> using the <i>format</i> property.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap gap-3">
                <div className="flex-1 flex flex-column align-items-center">
                    <label htmlFor="cp-hex" className="font-bold block mb-2">
                        HEX
                    </label>
                    <ColorPicker inputId="cp-hex" format="hex" value={colorHEX} onChange={(e) => setColorHEX(e.value)} className="mb-3" />
                    <span>{colorHEX}</span>
                </div>
                <div className="flex-1 flex flex-column align-items-center">
                    <label htmlFor="cp-rgb" className="font-bold block mb-2">
                        RGB
                    </label>
                    <ColorPicker inputId="cp-rgb" format="rgb" value={colorRGB} onChange={(e) => setColorRGB(e.value)} className="mb-3" />
                    <span>{JSON.stringify(colorRGB)}</span>
                </div>
                <div className="flex-1 flex flex-column align-items-center">
                    <label htmlFor="cp-hsb" className="font-bold block mb-2">
                        HSB
                    </label>
                    <ColorPicker inputId="cp-hsb" format="hsb" value={colorHSB} onChange={(e) => setColorHSB(e.value)} className="mb-3" />
                    <span>{JSON.stringify(colorHSB)}</span>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
