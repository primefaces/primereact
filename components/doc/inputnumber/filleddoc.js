import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputNumber } from '@/components/lib/inputnumber/InputNumber';
import { useState } from 'react';

export function FilledDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<InputNumber variant="filled" value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
`,
        javascript: `
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function FilledDemo() {
    const [value, setValue] = useState(151351);

    return (
        <div className="card flex justify-content-center">
            <InputNumber variant="filled" value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function FilledDemo() {
    const [value, setValue] = useState<number>(151351);

    return (
        <div className="card flex justify-content-center">
            <InputNumber variant="filled" value={value} onValueChange={(e: InputNumberValueChangeEvent) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
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
                <InputNumber variant="filled" value={value} onValueChange={(e) => setValue(e.value)} minFractionDigits={2} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
