import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { PanelMenu } from '@/components/lib/panelmenu/PanelMenu';
import { Badge } from '@/components/lib/badge/Badge';

export function TemplateDoc(props) {
    const itemRenderer = (item, options) => (
        <a className="flex align-items-center px-3 py-2 cursor-pointer" onClick={options.onClick}>
            <span className={`${item.icon} text-primary`} />
            <span className={`mx-2 ${item.items && 'font-semibold'}`}>{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );

    const items = [
        {
            label: 'Mail',
            icon: 'pi pi-envelope',
            badge: 5,
            template: itemRenderer,
            items: [
                {
                    label: 'Compose',
                    icon: 'pi pi-file-edit',
                    shortcut: '⌘+N',
                    template: itemRenderer
                },
                {
                    label: 'Inbox',
                    icon: 'pi pi-inbox',
                    badge: 5,
                    template: itemRenderer
                },
                {
                    label: 'Sent',
                    icon: 'pi pi-send',
                    shortcut: '⌘+S',
                    template: itemRenderer
                },
                {
                    label: 'Trash',
                    icon: 'pi pi-trash',
                    shortcut: '⌘+T',
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Reports',
            icon: 'pi pi-chart-bar',
            shortcut: '⌘+R',
            template: itemRenderer,
            items: [
                {
                    label: 'Sales',
                    icon: 'pi pi-chart-line',
                    badge: 3,
                    template: itemRenderer
                },
                {
                    label: 'Products',
                    icon: 'pi pi-list',
                    badge: 6,
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Profile',
            icon: 'pi pi-user',
            shortcut: '⌘+W',
            template: itemRenderer,
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    shortcut: '⌘+O',
                    template: itemRenderer
                },
                {
                    label: 'Privacy',
                    icon: 'pi pi-shield',
                    shortcut: '⌘+P',
                    template: itemRenderer
                }
            ]
        }
    ];

    const code = {
        basic: `
<PanelMenu model={items} className="w-full md:w-20rem" />   
`,
        javascript: `
import React from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { Badge } from 'primereact/badge';

export default function TemplateDemo() {
    const itemRenderer = (item, options) => (
        <a className="flex align-items-center px-3 py-2 cursor-pointer" onClick={options.onClick}>
            <span className={\`\${item.icon} text-primary\`} />
            <span className={\`mx-2 \${item.items && 'font-semibold'}\`}>{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );

    const items = [
        {
            label: 'Mail',
            icon: 'pi pi-envelope',
            badge: 5,
            template: itemRenderer,
            items: [
                {
                    label: 'Compose',
                    icon: 'pi pi-file-edit',
                    shortcut: '⌘+N',
                    template: itemRenderer
                },
                {
                    label: 'Inbox',
                    icon: 'pi pi-inbox',
                    badge: 5,
                    template: itemRenderer
                },
                {
                    label: 'Sent',
                    icon: 'pi pi-send',
                    shortcut: '⌘+S',
                    template: itemRenderer
                },
                {
                    label: 'Trash',
                    icon: 'pi pi-trash',
                    shortcut: '⌘+T',
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Reports',
            icon: 'pi pi-chart-bar',
            shortcut: '⌘+R',
            template: itemRenderer,
            items: [
                {
                    label: 'Sales',
                    icon: 'pi pi-chart-line',
                    badge: 3,
                    template: itemRenderer
                },
                {
                    label: 'Products',
                    icon: 'pi pi-list',
                    badge: 6,
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Profile',
            icon: 'pi pi-user',
            shortcut: '⌘+W',
            template: itemRenderer,
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    shortcut: '⌘+O',
                    template: itemRenderer
                },
                {
                    label: 'Privacy',
                    icon: 'pi pi-shield',
                    shortcut: '⌘+P',
                    template: itemRenderer
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-20rem" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { MenuItem } from 'primereact/menuitem';
import { Badge } from 'primereact/badge';

export default function TemplateDemo() {
    const itemRenderer = (item, options) => (
        <a className="flex align-items-center px-3 py-2 cursor-pointer" onClick={options.onClick}>
            <span className={\`\${item.icon} text-primary\`} />
            <span className={\`mx-2 \${item.items && 'font-semibold'}\`}>{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );

    const items: MenuItem[] = [
        {
            label: 'Mail',
            icon: 'pi pi-envelope',
            badge: 5,
            template: itemRenderer,
            items: [
                {
                    label: 'Compose',
                    icon: 'pi pi-file-edit',
                    shortcut: '⌘+N',
                    template: itemRenderer
                },
                {
                    label: 'Inbox',
                    icon: 'pi pi-inbox',
                    badge: 5,
                    template: itemRenderer
                },
                {
                    label: 'Sent',
                    icon: 'pi pi-send',
                    shortcut: '⌘+S',
                    template: itemRenderer
                },
                {
                    label: 'Trash',
                    icon: 'pi pi-trash',
                    shortcut: '⌘+T',
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Reports',
            icon: 'pi pi-chart-bar',
            shortcut: '⌘+R',
            template: itemRenderer,
            items: [
                {
                    label: 'Sales',
                    icon: 'pi pi-chart-line',
                    badge: 3,
                    template: itemRenderer
                },
                {
                    label: 'Products',
                    icon: 'pi pi-list',
                    badge: 6,
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Profile',
            icon: 'pi pi-user',
            shortcut: '⌘+W',
            template: itemRenderer,
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    shortcut: '⌘+O',
                    template: itemRenderer
                },
                {
                    label: 'Privacy',
                    icon: 'pi pi-shield',
                    shortcut: '⌘+P',
                    template: itemRenderer
                }
            ]
        }
    ];
    return (
        <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-20rem" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PanelMenu offers item customization with the items <i>template</i> property that receives the item instance and returns an element.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <PanelMenu model={items} className="w-full md:w-20rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
