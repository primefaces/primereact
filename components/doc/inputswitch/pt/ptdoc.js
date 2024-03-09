import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputSwitch } from '@/components/lib/inputswitch/InputSwitch';
import { useState } from 'react';

export function PTDoc(props) {
    const [checked, setChecked] = useState(false);

    const code = {
        basic: `
<InputSwitch
    checked={checked}
    onChange={(e) => setChecked(e.value)}
    pt={{
        slider: ({ props }) => ({
            className: props.checked ? 'bg-teal-400' : 'bg-red-400'
        })
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function PTDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <InputSwitch
                checked={checked}
                onChange={(e) => setChecked(e.value)}
                pt={{
                    slider: ({ props }) => ({
                        className: props.checked ? 'bg-teal-400' : 'bg-red-400'
                    })
                }}
            />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";

export default function PTDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <InputSwitch
                checked={checked}
                onChange={(e) => setChecked(e.value)}
                pt={{
                    slider: ({ props }) => ({
                        className: props.checked ? 'bg-teal-400' : 'bg-red-400'
                    })
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
                <InputSwitch
                    checked={checked}
                    onChange={(e) => setChecked(e.value)}
                    pt={{
                        slider: ({ props }) => ({
                            className: props.checked ? 'bg-teal-400' : 'bg-red-400'
                        })
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
