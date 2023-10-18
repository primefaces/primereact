import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function MultipleDoc(props) {
    const [dates, setDates] = useState(null);

    const code = {
        basic: `
<Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="multiple" readOnlyInput />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function MultipleDemo() {
    const [dates, setDates] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="multiple" readOnlyInput />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

export default function MultipleDemo() {
    const [dates, setDates] = useState<string | Date | Date[] | null>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={dates} onChange={(e : CalendarChangeEvent) => setDates(e.value)} selectionMode="multiple" readOnlyInput />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    In order to choose multiple dates, set <i>selectionMode</i> as <i>multiple</i>. In this mode, the value binding should be an array.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="multiple" readOnlyInput />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
