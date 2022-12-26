import { Timeline } from '../../lib/timeline/Timeline';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AlignmentDoc(props) {
    const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    const code = {
        basic: `
<h5>Left Align</h5>
<Timeline value={events} content={(item) => item.status} />

<h5>Right Align</h5>
<Timeline value={events} align="right" content={(item) => item.status} />

<h5>Alternate Align</h5>
<Timeline value={events} align="alternate" content={(item) => item.status} />
        `,
        javascript: `
import React from 'react'; 
import { Timeline } from 'primereact/timeline';
import './TimelineDemo.css';

export default function AlignmentDoc() {
        const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
        
    return (
        <div className="card timeline-demo">
            <h5>Left Align</h5>
            <Timeline value={events} content={(item) => item.status} />

            <h5>Right Align</h5>
            <Timeline value={events} align="right" content={(item) => item.status} />

            <h5>Alternate Align</h5>
            <Timeline value={events} align="alternate" content={(item) => item.status} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Timeline } from 'primereact/timeline';
import './TimelineDemo.css';

export default function AlignmentDoc() {
        const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    return (
        <div className="card timeline-demo">
            <h5>Left Align</h5>
            <Timeline value={events} content={(item) => item.status} />

            <h5>Right Align</h5>
            <Timeline value={events} align="right" content={(item) => item.status} />

            <h5>Alternate Align</h5>
            <Timeline value={events} align="alternate" content={(item) => item.status} />
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
                <p>Alignment content.</p>
            </DocSectionText>
            <div className="card">
                <h5>Left Align</h5>
                <Timeline value={events} content={(item) => item.status} />

                <h5>Right Align</h5>
                <Timeline value={events} align="right" content={(item) => item.status} />

                <h5>Alternate Align</h5>
                <Timeline value={events} align="alternate" content={(item) => item.status} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
