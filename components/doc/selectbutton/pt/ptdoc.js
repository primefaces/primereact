import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { SelectButton } from '@/components/lib/selectbutton/SelectButton';
import { useState } from 'react';

export function PTDoc(props) {
    const options = ['Off', 'On'];
    const [value, setValue] = useState(options[0]);

    const code = {
        basic: `
<SelectButton
    value={value}
    onChange={(e) => setValue(e.value)}
    options={options}
    pt={{
        button: ({ context }) => ({ className: context.selected ? 'bg-cyan-400 border-cyan-400' : undefined })
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function PTDemo() {
    const options = ['Off', 'On'];
    const [value, setValue] = useState(options[0]);

    return (
        <div className="card flex justify-content-center">
            <SelectButton
                value={value}
                onChange={(e) => setValue(e.value)}
                options={options}
                pt={{
                    button: ({ context }) => ({ className: context.selected ? 'bg-cyan-400 border-cyan-400' : undefined })
                }}
            />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';

export default function PTDemo() {
    const options: string[] = ['Off', 'On'];
    const [value, setValue] = useState<string>(options[0]);

    return (
        <div className="card flex justify-content-center">
            <SelectButton
                value={value}
                onChange={(e) => setValue(e.value)}
                options={options}
                pt={{
                    button: ({ context }) => ({ className: context.selected ? 'bg-cyan-400 border-cyan-400' : undefined })
                }}
            />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <SelectButton
                    value={value}
                    onChange={(e) => setValue(e.value)}
                    options={options}
                    pt={{
                        button: ({ context }) => ({ className: context.selected ? 'bg-cyan-400 border-cyan-400' : undefined })
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
