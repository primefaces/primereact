import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Timeline } from '@/components/lib/timeline/Timeline';

export function AlignmentDoc(props) {
    const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    const code = {
        basic: `
<Timeline value={events} content={(item) => item.status} className="w-full md:w-20rem" />
<Timeline value={events} align="right" content={(item) => item.status} className="w-full md:w-20rem" />
<Timeline value={events} align="alternate" content={(item) => item.status} className="w-full md:w-20rem" />
        `,
        javascript: `
import React from 'react'; 
import { Timeline } from 'primereact/timeline';

export default function AlignmentDemo() {
    const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
        
    return (
        <div className="card flex flex-wrap gap-6">
            <Timeline value={events} content={(item) => item.status} className="w-full md:w-20rem" />
            <Timeline value={events} align="right" content={(item) => item.status} className="w-full md:w-20rem" />
            <Timeline value={events} align="alternate" content={(item) => item.status} className="w-full md:w-20rem" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Timeline } from 'primereact/timeline';

interface TimelineEvent {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

export default function AlignmentDemo() {
    const events: TimelineEvent[] = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
        
    return (
        <div className="card flex flex-wrap gap-6">
            <Timeline value={events} content={(item) => item.status} className="w-full md:w-20rem" />
            <Timeline value={events} align="right" content={(item) => item.status} className="w-full md:w-20rem" />
            <Timeline value={events} align="alternate" content={(item) => item.status} className="w-full md:w-20rem" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Content location relative the line is defined with the <i>align</i> property.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap gap-6">
                <Timeline value={events} content={(item) => item.status} className="w-full md:w-20rem" />
                <Timeline value={events} align="right" content={(item) => item.status} className="w-full md:w-20rem" />
                <Timeline value={events} align="alternate" content={(item) => item.status} className="w-full md:w-20rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
