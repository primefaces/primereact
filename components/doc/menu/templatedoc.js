import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Avatar } from '@/components/lib/avatar/Avatar';
import { Menu } from '@/components/lib/menu/Menu';
import { classNames } from '@/components/lib/utils/Utils';
import { Badge } from '@/components/lib/badge/Badge';

export function TemplateDoc(props) {
    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    let items = [
        {
            template: () => {
                return (
                    <span className="inline-flex align-items-center gap-1 px-2 py-2">
                        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-2rem">
                            <path
                                d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                                fill="var(--primary-color)"
                            />
                            <path
                                d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                                fill="var(--text-color)"
                            />
                        </svg>
                        <span className="font-medium text-xl font-semibold">
                            PRIME<span className="text-primary">APP</span>
                        </span>
                    </span>
                );
            }
        },
        {
            separator: true
        },
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    shortcut: '⌘+N',
                    template: itemRenderer
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    shortcut: '⌘+S',
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    shortcut: '⌘+O',
                    template: itemRenderer
                },
                {
                    label: 'Messages',
                    icon: 'pi pi-inbox',
                    badge: 2,
                    template: itemRenderer
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    shortcut: '⌘+Q',
                    template: itemRenderer
                }
            ]
        },
        {
            separator: true
        },
        {
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Info', detail: 'Item Selected', life: 3000 });
            },
            template: (item, options) => {
                return (
                    <button onClick={(e) => options.onClick(e)} className={classNames(options.className, 'w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround')}>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" shape="circle" />
                        <div className="flex flex-column align">
                            <span className="font-bold">Amy Elsner</span>
                            <span className="text-sm">Agent</span>
                        </div>
                    </button>
                );
            }
        }
    ];

    const code = {
        basic: `
<Menu model={items} className="w-full md:w-15rem"  />
`,
        javascript: `
import React from 'react'; 
import { Menu } from 'primereact/menu';
import { badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';

export default function TemplateDemo() {
    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    let items = [
        {
            template: () => {
                return (
                    <span className="inline-flex align-items-center gap-1 px-2 py-2">
                        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-2rem">
                            <path
                                d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                                fill="var(--primary-color)"
                            />
                            <path
                                d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                                fill="var(--text-color)"
                            />
                        </svg>
                        <span className="font-medium text-xl font-semibold">
                            PRIME<span className="text-primary">APP</span>
                        </span>
                    </span>
                );
            }
        },
        {
            separator: true
        },
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    shortcut: '⌘+N',
                    template: itemRenderer
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    shortcut: '⌘+S',
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    shortcut: '⌘+O',
                    template: itemRenderer
                },
                {
                    label: 'Messages',
                    icon: 'pi pi-inbox',
                    badge: 2,
                    template: itemRenderer
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    shortcut: '⌘+Q',
                    template: itemRenderer
                }
            ]
        },
        {
            separator: true
        },
        {
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Info', detail: 'Item Selected', life: 3000 });
            },
            template: (item, options) => {
                return (
                    <button onClick={(e) => options.onClick(e)} className={classNames(options.className, 'w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround')}>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" shape="circle" />
                        <div className="flex flex-column align">
                            <span className="font-bold">Amy Elsner</span>
                            <span className="text-sm">Agent</span>
                        </div>
                    </button>
                );
            }
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <Menu model={items} className="w-full md:w-15rem" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { Badge } from 'primereact/badge';
import { MenuItem } from 'primereact/menuitem';

export default function TemplateDemo() {
    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    let items: MenuItem[] = [
        {
            template: () => {
                return (
                    <span className="inline-flex align-items-center gap-1 px-2 py-2">
                        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-2rem">
                            <path
                                d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                                fill="var(--primary-color)"
                            />
                            <path
                                d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                                fill="var(--text-color)"
                            />
                        </svg>
                        <span className="font-medium text-xl font-semibold">
                            PRIME<span className="text-primary">APP</span>
                        </span>
                    </span>
                );
            }
        },
        {
            separator: true
        },
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    shortcut: '⌘+N',
                    template: itemRenderer
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    shortcut: '⌘+S',
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    shortcut: '⌘+O',
                    template: itemRenderer
                },
                {
                    label: 'Messages',
                    icon: 'pi pi-inbox',
                    badge: 2,
                    template: itemRenderer
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    shortcut: '⌘+Q',
                    template: itemRenderer
                }
            ]
        },
        {
            separator: true
        },
        {
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Info', detail: 'Item Selected', life: 3000 });
            },
            template: (item, options) => {
                return (
                    <button onClick={(e) => options.onClick(e)} className={classNames(options.className, 'w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround')}>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" shape="circle" />
                        <div className="flex flex-column align">
                            <span className="font-bold">Amy Elsner</span>
                            <span className="text-sm">Agent</span>
                        </div>
                    </button>
                );
            }
        }
    ]

    return (
        <div className="card flex justify-content-center">
            <Menu model={items} className="w-full md:w-15rem"  />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Custom content can be placed inside the menuitem using the <i>template</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Menu model={items} className="w-full md:w-15rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
