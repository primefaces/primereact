import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Calendar } from '@/components/lib/calendar/Calendar';
import { useState } from 'react';

export function TimeDoc(props) {
    const [datetime12h, setDateTime12h] = useState(null);
    const [datetime24h, setDateTime24h] = useState(null);
    const [time, setTime] = useState(null);

    const code = {
        basic: `
<Calendar value={datetime12h} onChange={(e) => setDateTime12h(e.value)} showTime hourFormat="12" />
<Calendar value={datetime24h} onChange={(e) => setDateTime24h(e.value)} showTime hourFormat="24" />
<Calendar value={time} onChange={(e) => setTime(e.value)} timeOnly />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function TimeDemo() {
    const [datetime12h, setDateTime12h] = useState(null);
    const [datetime24h, setDateTime24h] = useState(null);
    const [time, setTime] = useState(null);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="calendar-12h" className="font-bold block mb-2">
                    12h Format
                </label>
                <Calendar id="calendar-12h" value={datetime12h} onChange={(e) => setDateTime12h(e.value)} showTime hourFormat="12" />
            </div>
            <div className="flex-auto">
                <label htmlFor="calendar-24h" className="font-bold block mb-2">
                    24h Format
                </label>
                <Calendar id="calendar-24h" value={datetime24h} onChange={(e) => setDateTime24h(e.value)} showTime hourFormat="24" />
            </div>
            <div className="flex-auto">
                <label htmlFor="calendar-timeonly" className="font-bold block mb-2">
                    Time Only
                </label>
                <Calendar id="calendar-timeonly" value={time} onChange={(e) => setTime(e.value)} timeOnly />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar} from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function TimeDemo() {
    const [datetime12h, setDateTime12h] = useState<Nullable<Date>>(null);
    const [datetime24h, setDateTime24h] = useState<Nullable<Date>>(null);
    const [time, setTime] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="calendar-12h" className="font-bold block mb-2">
                    12h Format
                </label>
                <Calendar id="calendar-12h" value={datetime12h} onChange={(e) => setDateTime12h(e.value)} showTime hourFormat="12" />
            </div>
            <div className="flex-auto">
                <label htmlFor="calendar-24h" className="font-bold block mb-2">
                    24h Format
                </label>
                <Calendar id="calendar-24h" value={datetime24h} onChange={(e) => setDateTime24h(e.value)} showTime hourFormat="24" />
            </div>
            <div className="flex-auto">
                <label htmlFor="calendar-timeonly" className="font-bold block mb-2">
                    Time Only
                </label>
                <Calendar id="calendar-timeonly" value={time} onChange={(e) => setTime(e.value)} timeOnly />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A time picker is displayed when <i>showTime</i> is enabled where 12/24 hour format is configured with <i>hourFormat</i> property. In case, only time needs to be selected, add <i>timeOnly</i> to hide the date section.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap gap-3 p-fluid">
                <div className="flex-auto">
                    <label htmlFor="calendar-12h" className="font-bold block mb-2">
                        12h Format
                    </label>
                    <Calendar id="calendar-12h" value={datetime12h} onChange={(e) => setDateTime12h(e.value)} showTime hourFormat="12" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="calendar-24h" className="font-bold block mb-2">
                        24h Format
                    </label>
                    <Calendar id="calendar-24h" value={datetime24h} onChange={(e) => setDateTime24h(e.value)} showTime hourFormat="24" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="calendar-timeonly" className="font-bold block mb-2">
                        Time Only
                    </label>
                    <Calendar id="calendar-timeonly" value={time} onChange={(e) => setTime(e.value)} timeOnly />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
