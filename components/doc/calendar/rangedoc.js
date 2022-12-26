import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RangeDoc(props) {
    const [dates, setDates] = useState(null);

    const code = {
        basic: `
<Calendar id="range" value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function RangeDoc() {
    const [dates, setDates] = useState(null);

    return (
        <Calendar id="range" value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput />
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar, CalendarChangeParams } from 'primereact/calendar';

export default function RangeDoc() {
    const [dates, setDates] = useState<Date | null>(null);

    return (
        <Calendar id="range" value={dates} onChange={(e : CalendarChangeParams) => setDates(e.value)} selectionMode="range" readOnlyInput />

    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Calendar offers "single" (default), "multiple" and "range" selection types controlled via the <i>selectionMode</i> property. In single, mode the bound value should be an array whereas in multiple case an array is required. Third
                    alternative is the range mode that allows selecting a range based on an array of two values where first value is the start date and second value is the end date. Note: Time picker is supported in range mode but not in multiple
                    mode.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="range" value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
