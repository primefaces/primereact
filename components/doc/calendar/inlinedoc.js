import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InlineDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />

        `,
        javascript: `
import { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function InlineDoc() {
    const [date, setDate] = useState(null);

    return (
        <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />

    )
}
        `,
        typescript: `
import { useState } from "react";
import { Calendar, CalendarChangeParams } from 'primereact/calendar';

export default function InlineDoc() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <Calendar value={date} onChange={(e : CalendarChangeParams) => setDate(e.value)} inline showWeek />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}> Calendar is displayed in a popup by default whereas inline property needs to be enabled for inline mode. </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
