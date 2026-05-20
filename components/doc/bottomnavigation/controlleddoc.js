import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { BottomNavigation } from '@/components/lib/bottomnavigation/BottomNavigation';
import { useState } from 'react';

export function ControlledDoc(props) {
    const [activeIndex, setActiveIndex] = useState(2);
    const items = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Wallet', icon: 'pi pi-credit-card' },
        { label: 'Send', icon: 'pi pi-send' },
        { label: 'Card', icon: 'pi pi-id-card' },
        { label: 'Profile', icon: 'pi pi-user' }
    ];

    const code = {
        basic: `
<BottomNavigation model={items} activeIndex={activeIndex} onChange={(e) => setActiveIndex(e.index)} />
        `,
        javascript: `
import { useState } from 'react';
import { BottomNavigation } from 'primereact/bottomnavigation';

export default function ControlledDemo() {
    const [activeIndex, setActiveIndex] = useState(2);
    const items = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Wallet', icon: 'pi pi-credit-card' },
        { label: 'Send', icon: 'pi pi-send' },
        { label: 'Card', icon: 'pi pi-id-card' },
        { label: 'Profile', icon: 'pi pi-user' }
    ];

    return (
        <div className="card flex justify-content-center">
            <BottomNavigation model={items} activeIndex={activeIndex} onChange={(e) => setActiveIndex(e.index)} style={{ maxWidth: '30rem' }} />
        </div>
    )
}
        `,
        typescript: `
import { useState } from 'react';
import { BottomNavigation } from 'primereact/bottomnavigation';
import { MenuItem } from 'primereact/menuitem';

export default function ControlledDemo() {
    const [activeIndex, setActiveIndex] = useState<number>(2);
    const items: MenuItem[] = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Wallet', icon: 'pi pi-credit-card' },
        { label: 'Send', icon: 'pi pi-send' },
        { label: 'Card', icon: 'pi pi-id-card' },
        { label: 'Profile', icon: 'pi pi-user' }
    ];

    return (
        <div className="card flex justify-content-center">
            <BottomNavigation model={items} activeIndex={activeIndex} onChange={(e) => setActiveIndex(e.index)} style={{ maxWidth: '30rem' }} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Active item can be controlled with <i>activeIndex</i> and <i>onChange</i>.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <BottomNavigation model={items} activeIndex={activeIndex} onChange={(e) => setActiveIndex(e.index)} style={{ maxWidth: '30rem' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
