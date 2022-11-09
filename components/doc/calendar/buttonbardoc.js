import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function ButtonBarDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar id="buttonbar" value={date} onChange={(e) => setDate(e.value)} showButtonBar />
        `,
        javascript: `
import { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function ButtonBarDoc() {
    const [date, setDate] = useState(null);

    return (
        <Calendar id="buttonbar" value={date} onChange={(e) => setDate(e.value)} showButtonBar />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function ButtonBarDoc() {
    const [date, setDate] = useState<any | null>(null);

    return (
        <Calendar id="buttonbar" value={date} onChange={(e : CalendarChangeParams) => setDate(e.value)} showButtonBar />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Whether to display today and clear buttons at the footer</DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="buttonbar" value={date} onChange={(e) => setDate(e.value)} showButtonBar />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
