import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function MultipleMonthsDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar id="multiplemonths" value={date} onChange={(e) => setDate(e.value)} numberOfMonths={3}/>
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function MultipleMonthsDoc() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar id="multiplemonths" value={date} onChange={(e) => setDate(e.value)} numberOfMonths={3}/>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar, CalendarChangeParams } from 'primereact/calendar';

export default function MultipleMonthsDoc() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar id="multiplemonths" value={date} onChange={(e : CalendarChangeParams) => setDate(e.value)} numberOfMonths={3}/>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Number of months to display. </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="multiplemonths" value={date} onChange={(e) => setDate(e.value)} numberOfMonths={3} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
