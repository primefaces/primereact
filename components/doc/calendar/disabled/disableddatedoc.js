import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Calendar } from '@/components/lib/calendar/Calendar';

export function DisabledDateDoc(props) {
    const code = {
        basic: `
<Calendar disabledDate={disabledDate} />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function DisabledDateDemo() {
    const disabledDate = (day, month, year) => {
        if (day === 13) return true;
        if (month === 10) return true;
        if (year === 2025) return true;
        if (new Date(year, month, day) < new Date()) return true;
        return false;
    }

    return (
        <div className="card flex justify-content-center">
            <Calendar disabledDate={disabledDate} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function DisabledDateDemo() {
    const disabledDate = (day, month, year) => {
        if (day === 13) return true;
        if (month === 10) return true;
        if (year === 2024) return true;
        if (new Date(year, month, day) < new Date()) return true;
        return false;
    }

    return (
        <div className="card flex justify-content-center">
            <Calendar disabledDate={disabledDate} />
        </div>
    )
}
        `
    };

    const disabledDate = (day, month, year) => {
        if (day === 13) return true;

        if (month === 10) return false;

        if (year === 2025) return true;

        if (new Date(year, month, day) < new Date()) return true;

        return false;
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Specify the date that cannot be selected, When passed <i>disabledDate</i>, the <i>disabledDates</i> and <i>disabledDays</i> and <i>enabledDates</i> will be ignored.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar disabledDate={disabledDate} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
