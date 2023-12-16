import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Timeline } from '@/components/lib/timeline/Timeline';

export function HorizontalDoc(props) {
    const events = ['2020', '2021', '2022', '2023'];

    const code = {
        basic: `
<Timeline value={events} layout="horizontal" align="top" content={(item) => item} />
<Timeline value={events} layout="horizontal" align="bottom" content={(item) => item} />
<Timeline value={events} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
        `,
        javascript: `
import React from 'react'; 
import { Timeline } from 'primereact/timeline';

export default function HorizontalDemo() {
    const events = ['2020', '2021', '2022', '2023'];

    return (
        <div className="card flex flex-column gap-3">
            <Timeline value={events} layout="horizontal" align="top" content={(item) => item} />
            <Timeline value={events} layout="horizontal" align="bottom" content={(item) => item} />
            <Timeline value={events} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Timeline } from 'primereact/timeline';

export default function HorizontalDemo() {
    const events: string[] = ['2020', '2021', '2022', '2023'];

    return (
        <div className="card flex flex-column gap-3">
            <Timeline value={events} layout="horizontal" align="top" content={(item) => item} />
            <Timeline value={events} layout="horizontal" align="bottom" content={(item) => item} />
            <Timeline value={events} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    TimeLine orientation is controlled with the <i>layout</i> property, default is <i>vertical</i> having <i>horizontal</i> as the alternative.
                </p>
            </DocSectionText>
            <div className="card flex flex-column gap-3">
                <Timeline value={events} layout="horizontal" align="top" content={(item) => item} />
                <Timeline value={events} layout="horizontal" align="bottom" content={(item) => item} />
                <Timeline value={events} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
