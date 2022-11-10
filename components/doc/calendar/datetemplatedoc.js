import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function DateTemplateDoc(props) {
    const [date, setDate] = useState(null);

    const dateTemplate = (date) => {
        if (date.day > 10 && date.day < 15) {
            return <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>;
        }

        return date.day;
    };

    const code = {
        basic: `
<Calendar id="datetemplate" value={date} onChange={(e) => setDate(e.value)} dateTemplate={dateTemplate} />
        `,
        javascript: `
import { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function DateTemplateDoc() {
    const [date, setDate] = useState(null);

    const dateTemplate = (date) => {
        if (date.day > 10 && date.day < 15) {
            return (
                <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
            );
        }

        return date.day;
    }

    return (
        <Calendar id="datetemplate" value={date} onChange={(e) => setDate(e.value)} dateTemplate={dateTemplate} />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function DateTemplateDoc() {
    const [date, setDate] = useState<any | null>(null);
    
    const dateTemplate = (date) => {
        if (date.day > 10 && date.day < 15) {
            return (
                <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
            );
        }

        return date.day;
    }

    return (
        <Calendar id="datetemplate" value={date} onChange={(e : CalendarChangeParams) => setDate(e.value)} dateTemplate={dateTemplate} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}> Function that gets a date information and returns the cell content in datepicker.</DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="datetemplate" value={date} onChange={(e) => setDate(e.value)} dateTemplate={dateTemplate} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
