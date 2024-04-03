import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { FloatLabel } from '@/components/lib/floatlabel/FloatLabel';
import { InputNumber } from '@/components/lib/inputnumber/InputNumber';
import Link from 'next/link';
import { useState } from 'react';

export function FloatLabelDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<FloatLabel>
    <InputNumber id="number-input" value={value} onValueChange={(e) => setValue(e.value)} />
    <label htmlFor="number-input">Number</label>
</FloatLabel>
`,
        javascript: `
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';
import { FloatLabel } from 'primereact/floatlabel';

export default function FloatLabelDemo() {
    const [value, setValue] = useState(151351);

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputNumber id="number-input" value={value} onValueChange={(e) => setValue(e.value)} />
                <label htmlFor="number-input">Number</label>
            </FloatLabel>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { FloatLabel } from 'primereact/floatlabel';

export default function FloatLabelDemo() {
    const [value, setValue] = useState<number>(151351);

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputNumber id="number-input" value={value} onValueChange={(e: InputNumberValueChangeEvent) => setValue(e.value)} />
                <label htmlFor="number-input">Number</label>
            </FloatLabel>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A floating label appears on top of the input field when focused. Visit <Link href="/floatlabel">FloatLabel</Link> documentation for more information.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <FloatLabel>
                    <InputNumber id="number-input" value={value} onValueChange={(e) => setValue(e.value)} />
                    <label htmlFor="number-input">Number</label>
                </FloatLabel>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
