import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { BottomNavigation } from '@/components/lib/bottomnavigation/BottomNavigation';

export function BasicDoc(props) {
    const items = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Wallet', icon: 'pi pi-credit-card' },
        { label: 'Send', icon: 'pi pi-send' },
        { label: 'Card', icon: 'pi pi-id-card' },
        { label: 'Profile', icon: 'pi pi-user' }
    ];

    const code = {
        basic: `
<BottomNavigation model={items} />
        `,
        javascript: `
import React from 'react';
import { BottomNavigation } from 'primereact/bottomnavigation';

export default function BasicDemo() {
    const items = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Wallet', icon: 'pi pi-credit-card' },
        { label: 'Send', icon: 'pi pi-send' },
        { label: 'Card', icon: 'pi pi-id-card' },
        { label: 'Profile', icon: 'pi pi-user' }
    ];

    return (
        <div className="card flex justify-content-center">
            <BottomNavigation model={items} style={{ maxWidth: '30rem' }} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { BottomNavigation } from 'primereact/bottomnavigation';
import { MenuItem } from 'primereact/menuitem';

export default function BasicDemo() {
    const items: MenuItem[] = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Wallet', icon: 'pi pi-credit-card' },
        { label: 'Send', icon: 'pi pi-send' },
        { label: 'Card', icon: 'pi pi-id-card' },
        { label: 'Profile', icon: 'pi pi-user' }
    ];

    return (
        <div className="card flex justify-content-center">
            <BottomNavigation model={items} style={{ maxWidth: '30rem' }} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    BottomNavigation uses the common <i>MenuItem</i> model to define the available destinations.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <BottomNavigation model={items} style={{ maxWidth: '30rem' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
