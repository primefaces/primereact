import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DateFormatDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar id="basic" value={date} onChange={(e) => setDate(e.value)} dateFormat="mm-dd-yy" />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function DateFormatDoc() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar id="basic" value={date} onChange={(e) => setDate(e.value)} dateFormat="mm-dd-yy" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar, CalendarChangeParams } from 'primereact/calendar';

export default function DateFormatDoc() {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar id="basic" value={date} onChange={(e : CalendarChangeParams) => setDate(e.value)} dateFormat="mm-dd-yy" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Default date format is "mm/dd/yy" which can be customized using the <i>dateFormat</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="basic" value={date} onChange={(e) => setDate(e.value)} dateFormat="mm-dd-yy" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
