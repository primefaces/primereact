import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Calendar } from '@/components/lib/calendar/Calendar';
import { useState } from 'react';

export function RangeDoc(props) {
    const [dates, setDates] = useState(null);

    const code = {
        basic: `
<Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function RangeDemo() {
    const [dates, setDates] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function RangeDemo() {
    const [dates, setDates] = useState<Nullable<(Date | null)[]>>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />
        </div>

    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A range of dates can be selected by defining <i>selectionMode</i> as <i>range</i>, in this case the bound value would be an array with two values where first date is the start of the range and second date is the end.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
