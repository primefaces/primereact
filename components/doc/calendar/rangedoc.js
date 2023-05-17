import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RangeDoc(props) {
    const [dates, setDates] = useState(null);

    const code = {
        basic: `
<Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function RangeDemo() {
    const [dates, setDates] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

export default function RangeDemo() {
    const [dates, setDates] = useState<string | Date | Date[] | null>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={dates} onChange={(e : CalendarChangeEvent) => setDates(e.value)} selectionMode="range" readOnlyInput />
        </div>

    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A range of dates can be selected by defining <i>selectionMode</i> as <i>range</i>, in this case the bound value would be an array with two values where first date is the start of the range and second date is the end.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
