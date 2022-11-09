import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

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
import { Calendar } from 'primereact/calendar';

export default function Time24Doc() {
    const [date, setDate] = useState<any | null>(null);

    return (
        <Calendar id="time24" value={date} onChange={(e : CalendarChangeParams) => setDate(e.value)} showTime showSeconds />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Whether to display timepicker.</DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="time24" value={date} onChange={(e) => setDate(e.value)} showTime showSeconds />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
