import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { BottomNavigation } from '@/components/lib/bottomnavigation/BottomNavigation';
import { Badge } from '@/components/lib/badge/Badge';

export function TemplateDoc(props) {
    const itemTemplate = (item, options) => {
        return (
            <a className={options.className} onClick={options.onClick}>
                <span className="p-overlay-badge">
                    <i className={options.iconClassName} />
                    {item.badge && <Badge value={item.badge} severity="danger" />}
                </span>
                <span className={options.labelClassName}>{item.label}</span>
            </a>
        );
    };

    const items = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Wallet', icon: 'pi pi-credit-card' },
        { label: 'Send', icon: 'pi pi-send', badge: '2', template: itemTemplate },
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
import { Badge } from 'primereact/badge';

export default function TemplateDemo() {
    const itemTemplate = (item, options) => {
        return (
            <a className={options.className} onClick={options.onClick}>
                <span className="p-overlay-badge">
                    <i className={options.iconClassName} />
                    {item.badge && <Badge value={item.badge} severity="danger" />}
                </span>
                <span className={options.labelClassName}>{item.label}</span>
            </a>
        );
    };
    const items = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Wallet', icon: 'pi pi-credit-card' },
        { label: 'Send', icon: 'pi pi-send', badge: '2', template: itemTemplate },
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
import { Badge } from 'primereact/badge';
import { MenuItem } from 'primereact/menuitem';

export default function TemplateDemo() {
    const itemTemplate = (item: MenuItem, options: any) => {
        return (
            <a className={options.className} onClick={options.onClick}>
                <span className="p-overlay-badge">
                    <i className={options.iconClassName} />
                    {item.badge && <Badge value={item.badge} severity="danger" />}
                </span>
                <span className={options.labelClassName}>{item.label}</span>
            </a>
        );
    };
    const items: MenuItem[] = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Wallet', icon: 'pi pi-credit-card' },
        { label: 'Send', icon: 'pi pi-send', badge: '2', template: itemTemplate },
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
                <p>Custom content can be placed inside menuitems using the template property of the menu model.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <BottomNavigation model={items} style={{ maxWidth: '30rem' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
