import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FloatLabelDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar id="calendar" value={date} onChange={(e) => setDate(e.date)} />
<label htmlFor="calendar">Calendar</label>
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function FloatLabelDoc() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <Calendar id="calendar" value={date} onChange={(e) => setDate(e.date)} />
                <label htmlFor="calendar">Calendar</label>
            </span>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar, CalendarChangeParams } from 'primereact/calendar';

export default function FloatLabelDoc() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <Calendar id="calendar" value={date} onChange={(e) => setDate(e.date)} />
                <label htmlFor="calendar">Calendar</label>
            </span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <span className="p-float-label">
                    <Calendar id="calendar" value={date} onChange={(e) => setDate(e.date)} />
                    <label htmlFor="calendar">Calendar</label>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
