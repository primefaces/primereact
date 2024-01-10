import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Calendar } from '@/components/lib/calendar/Calendar';
import { useState } from 'react';

export function IconDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function IconDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                    Button Display
                </label>
                <Calendar id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} showIcon />
            </div>
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                    Icon Display
                </label>

                <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon  />
            </div>
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                    Icon Template
                </label>

                <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon timeOnly  icon={() => <i className="pi pi-clock" />} />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function IconDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                    Button Display
                </label>
                <Calendar id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} showIcon />
            </div>
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                    Icon Display
                </label>

                <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon  />
            </div>
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                    Icon Template
                </label>

                <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon timeOnly  icon={() => <i className="pi pi-clock" />} />
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
                    An additional icon is displayed next to the input field when <i>showIcon</i> is present.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap gap-3 p-fluid">
                <div className="flex-auto">
                    <label htmlFor="buttondisplay" className="font-bold block mb-2">
                        Button Display
                    </label>
                    <Calendar id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} showIcon />
                </div>
                <div className="flex-auto">
                    <label htmlFor="buttondisplay" className="font-bold block mb-2">
                        Icon Display
                    </label>

                    <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
                </div>
                <div className="flex-auto">
                    <label htmlFor="buttondisplay" className="font-bold block mb-2">
                        Icon Template
                    </label>

                    <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon timeOnly icon={() => <i className="pi pi-clock" />} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
