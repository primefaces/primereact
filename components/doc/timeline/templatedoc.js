import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Card } from '@/components/lib/card/Card';
import { Timeline } from '@/components/lib/timeline/Timeline';

export function TemplateDoc(props) {
    const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    const customizedMarker = (item) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                {item.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.name} width={200} className="shadow-1" />}
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
                <Button label="Read more" className="p-button-text"></Button>
            </Card>
        );
    };

    const code = {
        basic: `
<Timeline value={events} align="alternate" className="customized-timeline" 
    marker={customizedMarker} content={customizedContent} />
        `,
        javascript: `
import React from 'react'; 
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './TimelineDemo.css';

export default function TemplateDemo() {
        const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    const customizedMarker = (item) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                { item.image && <img src={\`https://primefaces.org/cdn/primereact/images/product/\${item.image}\`} alt={item.name} width={200} className="shadow-1" />}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                <Button label="Read more" className="p-button-text"></Button>
            </Card>
        );
    };
        
    return (
        <div className="card">
            <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './TimelineDemo.css';

interface TimelineEvent {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

export default function TemplateDemo() {
    const events: TimelineEvent = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    const customizedMarker = (item: TimelineEvent) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item: TimelineEvent) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                { item.image && <img src={\`https://primefaces.org/cdn/primereact/images/product/\${item.image}\`} alt={item.name} width={200} className="shadow-1" />}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                <Button label="Read more" className="p-button-text"></Button>
            </Card>
        );
    };

    return (
        <div className="card">
            <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
        </div>
    )
}
        `,
        extFiles: {
            'TimelineDemo.css': `
@media screen and (max-width: 991px) {
    .customized-timeline .p-timeline-event:nth-child(even) {
        flex-direction: row !important;
    }
    .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: left !important;
    }
    .customized-timeline .p-timeline-event-opposite {
        flex: 0;
    }
    .customized-timeline .p-card {
        margin-top: 1rem;
    }
}
    `
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Sample implementation with custom content and styled markers.</p>
            </DocSectionText>
            <div className="card">
                <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
