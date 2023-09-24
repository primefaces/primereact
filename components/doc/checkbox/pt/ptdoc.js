import { useState } from 'react';
import { Checkbox } from '../../../lib/checkbox/Checkbox';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function PTDoc(props) {
    const [checked, setChecked] = useState(false);

    const code = {
        basic: `
<Checkbox
    checked={checked}
    onChange={(e) => setChecked(e.checked)}
    pt={{
        input: ({ state }) => ({
            className: state.focused ? 'border-orange-400' : undefined
        })
    }}
></Checkbox>
        `,
        javascript: `
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function PTDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.checked)}
                pt={{
                    input: ({ state }) => ({
                        className: state.focused ? 'border-orange-400' : undefined
                    })
                }}
            ></Checkbox>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function PTDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.checked)}
                pt={{
                    input: ({ state }) => ({
                        className: state.focused ? 'border-orange-400' : undefined
                    })
                }}
            ></Checkbox>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <Checkbox
                    checked={checked}
                    onChange={(e) => setChecked(e.checked)}
                    pt={{
                        input: ({ state }) => ({
                            className: state.focused ? 'border-orange-400' : undefined
                        })
                    }}
                ></Checkbox>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
