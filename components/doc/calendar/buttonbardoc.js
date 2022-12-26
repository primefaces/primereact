import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ButtonBarDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar id="buttonbar" value={date} onChange={(e) => setDate(e.value)} showButtonBar />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function ButtonBarDoc() {
    const [date, setDate] = useState(null);

    return (
        <Calendar id="buttonbar" value={date} onChange={(e) => setDate(e.value)} showButtonBar />
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar, CalendarChangeParams } from 'primereact/calendar';

export default function ButtonBarDoc() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <Calendar id="buttonbar" value={date} onChange={(e : CalendarChangeParams) => setDate(e.value)} showButtonBar />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Whether to display today and clear buttons at the footer</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="buttonbar" value={date} onChange={(e) => setDate(e.value)} showButtonBar />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
