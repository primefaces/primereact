import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function MultipleDoc(props) {
    const [dates, setDates] = useState(null);

    const code = {
        basic: `
<Calendar id="multiple" value={dates} onChange={(e) => setDates(e.value)} selectionMode="multiple" readOnlyInput />
        `,
        javascript: `
import { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function MultipleDoc() {
    const [dates, setDates] = useState<Date(null);

    return (
        <Calendar id="multiple" value={dates} onChange={(e) => setDates(e.value)} selectionMode="multiple" readOnlyInput />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Calendar, CalendarChangeParams } from 'primereact/calendar';

export default function MultipleDoc() {
    const [dates, setDates] = useState<Date | null>(null);

    return (
        <Calendar id="multiple" value={dates} onChange={(e : CalendarChangeParams) => setDates(e.value)} selectionMode="multiple" readOnlyInput />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Calendar offers "single" (default), "multiple" and "range" selection types controlled via the <i>selectionMode</i> property. In single, mode the bound value should be an array whereas in multiple case an array is required. Third
                alternative is the range mode that allows selecting a range based on an array of two values where first value is the start date and second value is the end date. Note: Time picker is supported in range mode but not in multiple mode.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="multiple" value={dates} onChange={(e) => setDates(e.value)} selectionMode="multiple" readOnlyInput />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
