import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Calendar } from '@/components/lib/calendar/Calendar';
import { useState } from 'react';

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
<Calendar value={date} onChange={(e) => setDate(e.value)} dateTemplate={dateTemplate} />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function DateTemplateDemo() {
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
            <Calendar value={date} onChange={(e) => setDate(e.value)} dateTemplate={dateTemplate} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function DateTemplateDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

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
            <Calendar value={date} onChange={(e) => setDate(e.value)} dateTemplate={dateTemplate} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Custom content can be placed inside date cells with the <i>dateTemplate</i> property that takes a Date as a parameter.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar value={date} onChange={(e) => setDate(e.value)} dateTemplate={dateTemplate} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
