import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TouchUIDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar id="touchUI" value={date} onChange={(e) => setDate(e.value)} touchUI />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function TouchUIDoc() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar id="touchUI" value={date} onChange={(e) => setDate(e.value)} touchUI />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar, CalendarChangeParams } from 'primereact/calendar';

export default function TouchUIDoc() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar id="touchUI" value={date} onChange={(e : CalendarChangeParams) => setDate(e.value)} touchUI />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>When enabled, calendar overlay is displayed as optimized for touch devices.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="touchUI" value={date} onChange={(e) => setDate(e.value)} touchUI />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
