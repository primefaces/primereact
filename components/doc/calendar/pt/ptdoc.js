import { useState } from 'react';
import { Calendar } from '../../../lib/calendar/Calendar';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function PTDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar
    value={date}
    onChange={(e) => setDate(e.value)}
    showIcon
    pt={{
        input: { className: 'w-16rem' },
        dropdownButton: {
            root: { className: 'bg-teal-500 border-teal-500' }
        }
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function PTDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
                showIcon
                pt={{
                    input: { className: 'w-16rem' },
                    dropdownButton: {
                        root: { className: 'bg-teal-500 border-teal-500' }
                    }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';

export default function PTDemo() {
    const [date, setDate] = useState<string | Date | Date[] | null>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
                showIcon
                pt={{
                    input: { className: 'w-16rem' },
                    dropdownButton: {
                        root: { className: 'bg-teal-500 border-teal-500' }
                    }
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar
                    value={date}
                    onChange={(e) => setDate(e.value)}
                    showIcon
                    pt={{
                        input: { className: 'w-16rem' },
                        dropdownButton: {
                            root: { className: 'bg-teal-500 border-teal-500' }
                        }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
