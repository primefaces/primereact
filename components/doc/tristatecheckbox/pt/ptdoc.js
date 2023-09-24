import { useState } from 'react';
import { TriStateCheckbox } from '../../../lib/tristatecheckbox/TriStateCheckbox';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function PTDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<TriStateCheckbox
    value={value}
    onChange={(e) => setValue(e.value)}
    pt={{
        checkbox: {
            className: value ? 'bg-teal-500 border-white' : undefined
        }
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export default function PTDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <TriStateCheckbox
                value={value}
                onChange={(e) => setValue(e.value)}
                pt={{
                    checkbox: {
                        className: value ? 'bg-teal-500 border-white' : undefined
                    }
                }}
            />
            <label>{String(value)}</label>
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { TriStateCheckbox, TriStateCheckboxChangeEvent } from 'primereact/tristatecheckbox';

export default function PTDemo() {
    const [value, setValue] = useState<boolean | undefined | null>(null);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <TriStateCheckbox
                value={value}
                onChange={(e) => setValue(e.value)}
                pt={{
                    checkbox: {
                        className: value ? 'bg-teal-500 border-white' : undefined
                    }
                }}
            />
            <label>{String(value)}</label>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    TriStateCheckbox is used as a controlled input with <i>value</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center gap-3">
                <TriStateCheckbox
                    value={value}
                    onChange={(e) => setValue(e.value)}
                    pt={{
                        checkbox: {
                            className: value ? 'bg-teal-500 border-white' : undefined
                        }
                    }}
                />
                <label>{String(value)}</label>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
