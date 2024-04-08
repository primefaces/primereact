import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Calendar } from '@/components/lib/calendar/Calendar';

export function InvalidDoc(props) {
    const code = {
        basic: `
<Calendar invalid/>
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <Calendar invalid/>
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
            <Calendar invalid/>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar invalid />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
