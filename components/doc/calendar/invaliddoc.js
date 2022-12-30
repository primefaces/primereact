import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InvalidStateDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<label htmlFor="calendar">Calendar</label>
<Calendar id="calendar" value={date} onChange={(e) => setDate(e.date)} className="p-invalid" />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function InvalidStateDoc() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <label htmlFor="calendar">Calendar</label>
            <Calendar id="calendar" value={date} onChange={(e) => setDate(e.date)} className="p-invalid" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar, CalendarChangeParams } from 'primereact/calendar';

export default function InvalidStateDoc() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <div className="card flex justify-content-center">
            <label htmlFor="calendar">Calendar</label>
            <Calendar id="calendar" value={date} onChange={(e) => setValue3(e.date)} className="p-invalid" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>ToDo</p>
            </DocSectionText>
            <div className="card flex flex-column justify-content-center align-items-center">
                <div className="flex flex-column gap-2">
                    <label htmlFor="calendar">Calendar</label>
                    <Calendar id="calendar" value={date} onChange={(e) => setDate(e.date)} className="p-invalid" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
