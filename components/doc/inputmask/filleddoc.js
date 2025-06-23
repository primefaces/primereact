import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputMask } from '@/components/lib/inputmask/InputMask';
import { useState } from 'react';

export function FilledDoc(props) {
    const [value, setValue] = useState();

    const code = {
        basic: `
<InputMask variant="filled" value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999" />
        `,
        javascript: `
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function FilledDemo() {
    const [value, setValue] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputMask variant="filled" value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999"/>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";

export default function FilledDemo() {
    const [value, setValue] = useState<string | undefined>();

    return (
        <div className="card flex justify-content-center">
            <InputMask variant="filled" value={value} onChange={(e: InputMaskChangeEvent) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999"/>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputMask variant="filled" value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
