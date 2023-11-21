import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Calendar } from '@/components/lib/calendar/Calendar';
import { useState } from 'react';

export function FormatDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function FormatDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function FormatDemo() {
     const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Default date format is <i>mm/dd/yy</i> which can be customized using the <i>dateFormat</i> property. Following options can be a part of the format.
                </p>
                <ul className="mb-4 line-height-4">
                    <li>
                        <i>d</i> - day of month (no leading zero)
                    </li>
                    <li>
                        <i>dd</i> - day of month (two digit)
                    </li>
                    <li>
                        <i>o</i> - day of the year (no leading zeros)
                    </li>
                    <li>
                        <i>oo</i> - day of the year (three digit)
                    </li>
                    <li>
                        <i>D</i> - day name short
                    </li>
                    <li>
                        <i>DD</i> - day name long
                    </li>
                    <li>
                        <i>m</i> - month of year (no leading zero)
                    </li>
                    <li>
                        <i>mm</i> - month of year (two digit)
                    </li>
                    <li>
                        <i>M</i> - month name short
                    </li>
                    <li>
                        <i>MM</i> - month name long
                    </li>
                    <li>
                        <i>y</i> - year (two digit)
                    </li>
                    <li>
                        <i>yy</i> - year (four digit)
                    </li>
                    <li>
                        <i>@</i> - Unix timestamp (ms since 01/01/1970)
                    </li>
                    <li>
                        <i>!</i> - Windows ticks (100ns since 01/01/0001)
                    </li>
                    <li>
                        <i>'...'</i> - literal text
                    </li>
                    <li>
                        <i>''</i> - single quote
                    </li>
                    <li>
                        <i>anything else</i> - literal text
                    </li>
                </ul>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
