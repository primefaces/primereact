import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function MonthPickerDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar id="monthpicker" value={date} onChange={(e) => setDate(e.value)} view="month" dateFormat="mm/yy" />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function MonthPickerDoc() {
    const [date, setDate] = useState(null);

    return (
        <Calendar id="monthpicker" value={date} onChange={(e) => setDate(e.value)} view="month" dateFormat="mm/yy" />
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar, CalendarChangeParams } from 'primereact/calendar';

export default function MonthPickerDoc() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <Calendar id="monthpicker" value={date} onChange={(e : CalendarChangeParams) => setDate(e.value)} view="month" dateFormat="mm/yy" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Datepicker element in month view.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="monthpicker" value={date} onChange={(e) => setDate(e.value)} view="month" dateFormat="mm/yy" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
