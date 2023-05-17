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
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function InlineDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
        </div>

    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

export default function InlineDemo() {
    const [date, setDate] = useState<string | Date | Date[] | null>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e : CalendarChangeEvent) => setDate(e.value)} inline showWeek />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Calendar is displayed as a popup by default, add <i>inline</i> property to customize this behavior.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
