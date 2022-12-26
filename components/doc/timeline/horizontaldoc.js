import { Timeline } from '../../lib/timeline/Timeline';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function HorizontalDoc(props) {
    const events = ['2020', '2021', '2022', '2023'];

    const code = {
        basic: `
<h6>Top Align</h6>
<Timeline value={events} layout="horizontal" align="top" content={(item) => item} />
<h6>Bottom Align</h6>
<Timeline value={events} layout="horizontal" align="bottom" content={(item) => item} />
<h6>Alternate Align</h6>
<Timeline value={events} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
        `,
        javascript: `
import React from 'react'; 
import { Timeline } from 'primereact/timeline';
import './TimelineDemo.css';

export default function HorizontalDoc() {
    const events = ['2020', '2021', '2022', '2023'];
        
    return (
        <div className="card timeline-demo">
            <h6>Top Align</h6>
            <Timeline value={events} layout="horizontal" align="top" content={(item) => item} />
        
            <h6>Bottom Align</h6>
            <Timeline value={events} layout="horizontal" align="bottom" content={(item) => item} />
        
            <h6>Alternate Align</h6>
            <Timeline value={events} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
    </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Timeline } from 'primereact/timeline';
import './TimelineDemo.css';

export default function HorizontalDoc() {
    const events = ['2020', '2021', '2022', '2023'];

    return (
        <div className="card timeline-demo">
            <h6>Top Align</h6>
            <Timeline value={events} layout="horizontal" align="top" content={(item) => item} />

            <h6>Bottom Align</h6>
            <Timeline value={events} layout="horizontal" align="bottom" content={(item) => item} />

            <h6>Alternate Align</h6>
            <Timeline value={events} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
    </div>
    )
}
        `,
        css: `
/* TimelineDemo.css */

.timeline-demo .p-timeline-event-content,
.timeline-demo .p-timeline-event-opposite {
    line-height: 1;
}

@media screen and (max-width: 960px) {
    .timeline-demo .customized-timeline .p-timeline-event:nth-child(even) {
        flex-direction: row !important;
    }
    .timeline-demo .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: left !important;
    }
    .timeline-demo .customized-timeline .p-timeline-event-opposite {
        flex: 0;
    }
    .timeline-demo .customized-timeline .p-card {
        margin-top: 1rem;
    }
}
    `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Horizontal Connect content.</p>
            </DocSectionText>
            <div className="card">
                <h6>Top Align</h6>
                <Timeline value={events} layout="horizontal" align="top" content={(item) => item} />

                <h6>Bottom Align</h6>
                <Timeline value={events} layout="horizontal" align="bottom" content={(item) => item} />

                <h6>Alternate Align</h6>
                <Timeline value={events} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
