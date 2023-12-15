import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Calendar } from '@/components/lib/calendar/Calendar';

export function DisabledDoc(props) {
    const code = {
        basic: `
<Calendar disabled />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Calendar disabled />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Calendar disabled />
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
                <Calendar disabled />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
