import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InvalidDoc(props) {
    const code = {
        basic: `
<Calendar className="p-invalid" />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <Calendar className="p-invalid" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <Calendar className="p-invalid" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar className="p-invalid" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
