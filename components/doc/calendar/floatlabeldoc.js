import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Calendar } from '@/components/lib/calendar/Calendar';
import { FloatLabel } from '@/components/lib/floatlabel/FloatLabel';
import Link from 'next/link';
import { useState } from 'react';

export function FloatLabelDoc(props) {
    const [date, setDate] = useState(null);

    const code = {
        basic: `
<FloatLabel>
    <Calendar inputId="birth_date" value={date} onChange={(e) => setDate(e.value)} />
    <label htmlFor="birth_date">Birth Date</label>
</FloatLabel>
        `,
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { FloatLabel } from 'primereact/floatlabel';

export default function FloatLabelDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <Calendar inputId="birth_date" value={date} onChange={(e) => setDate(e.value)} />
                <label htmlFor="birth_date">Birth Date</label>
            </FloatLabel>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { FloatLabel } from 'primereact/floatlabel';
import { Nullable } from "primereact/ts-helpers";

export default function FloatLabelDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <Calendar inputId="birth_date" value={date} onChange={(e) => setDate(e.value)} />
                <label htmlFor="birth_date">Birth Date</label>
            </FloatLabel>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A floating label appears on top of the input field when focused. Visit <Link href="/floatlabel">FloatLabel</Link> documentation for more information.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <FloatLabel>
                    <Calendar inputId="birth_date" value={date} onChange={(e) => setDate(e.value)} />
                    <label htmlFor="birth_date">Birth Date</label>
                </FloatLabel>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
