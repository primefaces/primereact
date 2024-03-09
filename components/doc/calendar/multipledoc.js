import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Calendar } from '@/components/lib/calendar/Calendar';
import { useState } from 'react';

export function MultipleDoc(props) {
    const [dates, setDates] = useState(null);

    const code = {
        basic: `
<Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="multiple" readOnlyInput />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function MultipleDemo() {
    const [dates, setDates] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="multiple" readOnlyInput />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function MultipleDemo() {
    const [dates, setDates] = useState<Nullable<Date[]>>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="multiple" readOnlyInput />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    In order to choose multiple dates, set <i>selectionMode</i> as <i>multiple</i>. In this mode, the value binding should be an array.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="multiple" readOnlyInput />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
