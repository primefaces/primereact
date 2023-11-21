import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Calendar } from '@/components/lib/calendar/Calendar';
import { useState } from 'react';

export function FloatLabelDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<span className="p-float-label">
    <Calendar inputId="birth_date" value={date} onChange={(e) => setDate(e.value)} />
    <label htmlFor="birth_date">Birth Date</label>
</span>
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function FloatLabelDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <Calendar inputId="birth_date" value={date} onChange={(e) => setDate(e.value)} />
                <label htmlFor="birth_date">Birth Date</label>
            </span>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function FloatLabelDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <Calendar inputId="birth_date" value={date} onChange={(e) => setDate(e.value)} />
                <label htmlFor="birth_date">Birth Date</label>
            </span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>A floating label appears on top of the input field when focused.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <span className="p-float-label">
                    <Calendar inputId="birth_date" value={date} onChange={(e) => setDate(e.value)} />
                    <label htmlFor="birth_date">Birth Date</label>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
