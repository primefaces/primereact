import { useState } from 'react';
import { ToggleButton } from '../../../lib/togglebutton/ToggleButton';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function PTDoc(props) {
    const [checked, setChecked] = useState(false);

    const code = {
        basic: `
<ToggleButton
    checked={checked}
    onChange={(e) => setChecked(e.value)}
    pt={{
        root: {
            className: \`w-8rem \${checked ? 'bg-teal-400 border-white' : ''}\`
        }
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

export default function PTDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton
                checked={checked}
                onChange={(e) => setChecked(e.value)}
                pt={{
                    root: {
                        className: \`w-8rem \${checked ? 'bg-teal-400 border-white' : ''}\`
                    }
                }}
            />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { ToggleButton, ToggleButtonChangeEvent } from 'primereact/togglebutton';

export default function PTDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton
                checked={checked}
                onChange={(e) => setChecked(e.value)}
                pt={{
                    root: {
                        className: \`w-8rem \${checked ? 'bg-teal-400 border-white' : ''}\`
                    }
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
                <ToggleButton
                    checked={checked}
                    onChange={(e) => setChecked(e.value)}
                    pt={{
                        root: {
                            className: `w-8rem ${checked ? 'bg-teal-400 border-white' : ''}`
                        }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
