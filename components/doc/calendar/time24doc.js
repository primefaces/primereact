import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function Time24Doc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar id="time24" value={date} onChange={(e) => setDate(e.value)} showTime showSeconds />

        `,
        javascript: `
import { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function Time24Doc() {
    const [date, setDate] = useState(null);

    return (
        <Calendar id="time24" value={date} onChange={(e) => setDate(e.value)} showTime showSeconds />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Calendar, CalendarChangeParams } from 'primereact/calendar';

export default function Time24Doc() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <Calendar id="time24" value={date} onChange={(e : CalendarChangeParams) => setDate(e.value)} showTime showSeconds />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Whether to display timepicker.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="time24" value={date} onChange={(e) => setDate(e.value)} showTime showSeconds />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
