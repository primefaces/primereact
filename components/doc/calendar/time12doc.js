import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function Time12Doc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar id="time12" value={date} onChange={(e) => setDate(e.value)} timeOnly hourFormat="12" />


        `,
        javascript: `
import { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function Time12Doc() {
    const [date, setDate] = useState(null);

    return (
        <Calendar id="time12" value={date} onChange={(e) => setDate(e.value)} timeOnly hourFormat="12" />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Calendar, CalendarChangeParams } from 'primereact/calendar';

export default function Time12Doc() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <Calendar id="time12" value={date} onChange={(e : CalendarChangeParams) => setDate(e.value)} timeOnly hourFormat="12" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Whether to display timepicker.</DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="time12" value={date} onChange={(e) => setDate(e.value)} timeOnly hourFormat="12" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
