import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Calendar } from '@/components/lib/calendar/Calendar';
import { useState } from 'react';

export function ButtonBarDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar value={date} onChange={(e) => setDate(e.value)} showButtonBar />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function ButtonBarDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} showButtonBar />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function ButtonBarDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} showButtonBar />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When <i>showButtonBar</i> is present, today and clear buttons are displayed at the footer.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar value={date} onChange={(e) => setDate(e.value)} showButtonBar />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
