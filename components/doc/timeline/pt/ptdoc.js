import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Timeline } from '@/components/lib/timeline/Timeline';

export function PTDoc(props) {
    const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    const code = {
        basic: `
<Timeline
    value={events}
    content={(item) => item.status}
    pt={{
        marker: { className: 'border-orange-400' }
    }}
/>
        `,
        javascript: `
import React from 'react'; 
import { Timeline } from 'primereact/timeline';

export default function PTDemo() {
    const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
        
    return (
        <div className="card">
            <Timeline
                value={events}
                content={(item) => item.status}
                pt={{
                    marker: { className: 'border-orange-400' }
                }}
            />
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

export default function PTDemo() {
    const events: TimelineEvent[] = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
        
    return (
        <div className="card">
            <Timeline
                value={events}
                content={(item) => item.status}
                pt={{
                    marker: { className: 'border-orange-400' }
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <Timeline
                    value={events}
                    content={(item) => item.status}
                    pt={{
                        marker: { className: 'border-orange-400' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
