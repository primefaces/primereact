import { ColorPicker } from '../../lib/colorpicker/ColorPicker';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const code = {
        basic: `
<ColorPicker disabled />
        `,
        javascript: `
import React from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function DisabledDoc() {

    return (
        <div className="card flex justify-content-center">
            <ColorPicker disabled />
        </div>
    )
}
        `,
        typescript: `
import React from "react";
import { ColorPicker, ColorPickerChangeParams } from 'primereact/colorpicker';

export default function DisabledDoc() {

    return (
        <div className="card flex justify-content-center">
            <ColorPicker disabled />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <i>disabled</i> prop prevents an input from being editable.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ColorPicker disabled />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
