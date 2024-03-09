import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputMask } from '@/components/lib/inputmask/InputMask';
import { useState } from 'react';

export function OptionalDoc(props) {
    const [value, setValue] = useState();

    const code = {
        basic: `
<InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="(999) 999-9999? x99999" placeholder="(999) 999-9999? x99999"  />
        `,
        javascript: `
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function OptionalDemo() {
    const [value, setValue] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="(999) 999-9999? x99999" placeholder="(999) 999-9999? x99999" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputMask, InputMaskChangeEvent} from "primereact/inputmask";

export default function OptionalDemo() {
    const [value, setValue] = useState<string | undefined>();

    return (
        <div className="card flex justify-content-center">
            <InputMask value={value} onChange={(e: InputMaskChangeEvent) => setValue(e.target.value)} mask="(999) 999-9999? x99999" placeholder="(999) 999-9999? x99999" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When the input does not complete the mask definition, it is cleared by default. Use <i>autoClear</i> property to control this behavior. In addition, <i>?</i> is used to mark anything after the question mark optional.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="(999) 999-9999? x999" placeholder="(999) 999-9999? x999" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
