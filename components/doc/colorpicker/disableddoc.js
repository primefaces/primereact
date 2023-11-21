import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ColorPicker } from '@/components/lib/colorpicker/ColorPicker';

export function DisabledDoc(props) {
    const code = {
        basic: `
<ColorPicker disabled />
        `,
        javascript: `
import React from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <ColorPicker disabled />
        </div>
    )
}
        `,
        typescript: `
import React from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function DisabledDemo() {
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
                    When <i>disabled</i> is present, the element cannot be edited and focused.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ColorPicker disabled />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
