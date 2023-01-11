import { useState } from 'react';
import { Calendar } from '../../lib/calendar/Calendar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

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
import React, { useState } from "react";
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
        <div className="card flex justify-content-center">
            <Calendar id="datetemplate" value={date} onChange={(e) => setDate(e.value)} dateTemplate={dateTemplate} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar, CalendarChangeParams } from 'primereact/calendar';

export default function DateTemplateDoc() {
    const [date, setDate] = useState<Date | null>(null);

    const dateTemplate = (date: Date) => {
        if (date.day > 10 && date.day < 15) {
            return (
                <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
            );
        }

        return date.day;
    }

    return (
        <div className="card flex justify-content-center">
            <Calendar id="datetemplate" value={date} onChange={(e : CalendarChangeParams) => setDate(e.value)} dateTemplate={dateTemplate} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Function that gets a date information and returns the cell content in datepicker.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar id="datetemplate" value={date} onChange={(e) => setDate(e.value)} dateTemplate={dateTemplate} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
