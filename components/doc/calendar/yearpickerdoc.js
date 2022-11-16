import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function YearPickerDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar id="yearpicker" value={date} onChange={(e) => setDate(e.value)} view="year" dateFormat="yy" />
        `,
        javascript: `
import { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function YearPickerDoc() {
    const [date, setDate] = useState(null);

    return (
        <Calendar id="yearpicker" value={date} onChange={(e) => setDate(e.value)} view="year" dateFormat="yy" />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Calendar, CalendarChangeParams } from 'primereact/calendar';

export default function YearPickerDoc() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <Calendar id="yearpicker" value={date} onChange={(e : CalendarChangeParams) => setDate(e.value)} view="year" dateFormat="yy" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Datepicker element in year view.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="yearpicker" value={date} onChange={(e) => setDate(e.value)} view="year" dateFormat="yy" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
