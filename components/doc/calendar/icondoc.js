import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function IconDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar id="icon" value={date} onChange={(e) => setDate(e.value)} showIcon />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function IconDoc() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar id="icon" value={date} onChange={(e) => setDate(e.value)} showIcon />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar, CalendarChangeParams } from 'primereact/calendar';

export default function IconDoc() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar id="icon" value={date} onChange={(e : CalendarChangeParams) => setDate(e.value)} showIcon />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Calendar is used a controlled input component with <i>value</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="icon" value={date} onChange={(e) => setDate(e.value)} showIcon />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
