import { Timeline } from '../../lib/timeline/Timeline';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function OppositeContentDoc(props) {
    const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    const code = {
        basic: `
<Timeline value={events} opposite={(item) => item.status} content={(item) => <small className="p-text-secondary">{item.date}</small>} />
        `,
        javascript: `
import { Timeline } from 'primereact/timeline';

export default function OppositeContentDoc() {
        const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
        
    return (
        <div className="card">
            <Timeline value={events} opposite={(item) => item.status} content={(item) => <small className="p-text-secondary">{item.date}</small>} />
        </div>
    )
}
        `,
        typescript: `
import { Timeline } from 'primereact/timeline';

export default function OppositeContentDoc() {
        const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    return (
        <div className="card">
            <Timeline value={events} opposite={(item) => item.status} content={(item) => <small className="p-text-secondary">{item.date}</small>} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Opposite Connect content.</p>
            </DocSectionText>
            <div className="card">
                <Timeline value={events} opposite={(item) => item.status} content={(item) => <small className="p-text-secondary">{item.date}</small>} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
