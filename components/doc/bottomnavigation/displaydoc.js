import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { BottomNavigation } from '@/components/lib/bottomnavigation/BottomNavigation';

export function DisplayDoc(props) {
    const items = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Wallet', icon: 'pi pi-credit-card' },
        { label: 'Send', icon: 'pi pi-send' },
        { label: 'Card', icon: 'pi pi-id-card' },
        { label: 'Profile', icon: 'pi pi-user' }
    ];

    const code = {
        basic: `
<BottomNavigation model={items} activeItemDisplay="raised" />
<BottomNavigation model={items} activeItemDisplay="highlight" indicator="dot" />
<BottomNavigation model={items} activeItemDisplay="plain" indicator="bar" />
<BottomNavigation model={items} showLabels={false} indicator="dot" />
        `,
        javascript: `
import React from 'react';
import { BottomNavigation } from 'primereact/bottomnavigation';

export default function DisplayDemo() {
    const items = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Wallet', icon: 'pi pi-credit-card' },
        { label: 'Send', icon: 'pi pi-send' },
        { label: 'Card', icon: 'pi pi-id-card' },
        { label: 'Profile', icon: 'pi pi-user' }
    ];

    return (
        <div className="card flex flex-column align-items-center gap-4">
            <BottomNavigation model={items} activeItemDisplay="raised" style={{ maxWidth: '30rem' }} />
            <BottomNavigation model={items} activeItemDisplay="highlight" indicator="dot" style={{ maxWidth: '30rem' }} />
            <BottomNavigation model={items} activeItemDisplay="plain" indicator="bar" style={{ maxWidth: '30rem' }} />
            <BottomNavigation model={items} showLabels={false} indicator="dot" style={{ maxWidth: '30rem' }} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { BottomNavigation } from 'primereact/bottomnavigation';
import { MenuItem } from 'primereact/menuitem';

export default function DisplayDemo() {
    const items: MenuItem[] = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Wallet', icon: 'pi pi-credit-card' },
        { label: 'Send', icon: 'pi pi-send' },
        { label: 'Card', icon: 'pi pi-id-card' },
        { label: 'Profile', icon: 'pi pi-user' }
    ];

    return (
        <div className="card flex flex-column align-items-center gap-4">
            <BottomNavigation model={items} activeItemDisplay="raised" style={{ maxWidth: '30rem' }} />
            <BottomNavigation model={items} activeItemDisplay="highlight" indicator="dot" style={{ maxWidth: '30rem' }} />
            <BottomNavigation model={items} activeItemDisplay="plain" indicator="bar" style={{ maxWidth: '30rem' }} />
            <BottomNavigation model={items} showLabels={false} indicator="dot" style={{ maxWidth: '30rem' }} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Active item display, indicator and labels are independent options, allowing multiple visual combinations.</p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center gap-4">
                <BottomNavigation model={items} activeItemDisplay="raised" style={{ maxWidth: '30rem' }} />
                <BottomNavigation model={items} activeItemDisplay="highlight" indicator="dot" style={{ maxWidth: '30rem' }} />
                <BottomNavigation model={items} activeItemDisplay="plain" indicator="bar" style={{ maxWidth: '30rem' }} />
                <BottomNavigation model={items} showLabels={false} indicator="dot" style={{ maxWidth: '30rem' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
