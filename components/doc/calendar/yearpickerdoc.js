import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function YearPickerDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar value={date} onChange={(e) => setDate(e.value)} view="year" dateFormat="yy" />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function YearPickerDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} view="year" dateFormat="yy" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

export default function YearPickerDemo() {
    const [date, setDate] = useState<string | Date | Date[] | null>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e : CalendarChangeEvent) => setDate(e.value)} view="year" dateFormat="yy" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Specifying <i>view</i> as <i>year</i> in addition to a suitable <i>dateFormat</i> enables the year picker.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar value={date} onChange={(e) => setDate(e.value)} view="year" dateFormat="yy" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
