import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function MultipleMonthsDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar id="multiplemonths" value={date} onChange={(e) => setDate(e.value)} numberOfMonths={3}/>
        `,
        javascript: `
import { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function MultipleMonthsDoc() {
    const [date, setDate] = useState(null);

    return (
        <Calendar id="multiplemonths" value={date} onChange={(e) => setDate(e.value)} numberOfMonths={3}/>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function MultipleMonthsDoc() {
    const [date, setDate] = useState<any | null>(null);

    return (
        <Calendar id="multiplemonths" value={date} onChange={(e : CalendarChangeParams) => setDate(e.value)} numberOfMonths={3}/>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}> Number of months to display. </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="multiplemonths" value={date} onChange={(e) => setDate(e.value)} numberOfMonths={3} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
