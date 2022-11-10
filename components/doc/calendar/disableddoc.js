import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function DisabledDoc(props) {
    const [date, setDate] = useState(null);

    let today = new Date();

    let invalidDates = [today];

    const code = {
        basic: `
<Calendar id="disableddays" value={date} onChange={(e) => setDate(e.value)} disabledDates={invalidDates} disabledDays={[0, 6]} readOnlyInput />

        `,
        javascript: `
import { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function DisabledDoc() {
    const [date, setDate] = useState(null);

    return (
        <Calendar id="disableddays" value={date} onChange={(e) => setDate(e.value)} disabledDates={invalidDates} disabledDays={[0, 6]} readOnlyInput />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function DisabledDoc() {
    const [date, setDate] = useState<any | null>(null);

    return (
        <Calendar id="disableddays" value={date} onChange={(e : CalendarChangeParams) => setDate(e.value)} disabledDates={invalidDates} disabledDays={[0, 6]} readOnlyInput />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Calendar is used a controlled input component with <i>value</i> and <i>onChange</i> properties.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="disableddays" value={date} onChange={(e) => setDate(e.value)} disabledDates={invalidDates} disabledDays={[0, 6]} readOnlyInput />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
