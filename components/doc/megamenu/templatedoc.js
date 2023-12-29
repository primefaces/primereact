import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Avatar } from '@/components/lib/avatar/Avatar';
import { MegaMenu } from '@/components/lib/megamenu/MegaMenu';
import { Button } from '@/components/lib/button/Button';
import { Ripple } from '@/components/lib/primereact.all';

export function TemplateDoc(props) {
    const itemRenderer = (item, options) => {
        if (item.root) {
            return (
                <a className="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase p-ripple hover:surface-ground" style={{ borderRadius: '2rem' }} onClick={(e) => options.onClick(e)}>
                    <span className={item.icon} />
                    <span className="ml-2">{item.label}</span>
                    <Ripple />
                </a>
            );
        } else if (!item.image) {
            return (
                <a className="flex align-items-center p-3 cursor-pointer mb-2 gap-2 " onClick={options.onClick}>
                    <span className="inline-flex align-items-center justify-content-center border-circle bg-primary w-3rem h-3rem">
                        <i className={`${item.icon} text-lg`}></i>
                    </span>
                    <span className="inline-flex flex-column gap-1">
                        <span className="font-medium text-lg text-900">{item.label}</span>
                        <span className="white-space-nowrap">{item.subtext}</span>
                    </span>
                </a>
            );
        } else {
            return (
                <div className="flex flex-column align-items-start gap-3" onClick={options.onClick}>
                    <img alt="megamenu-demo" src={item.image} className="w-full" />
                    <span>{item.subtext}</span>
                    <Button className="p-button p-component p-button-outlined" label={item.label} />
                </div>
            );
        }
    };

    const items = [
        {
            label: 'Company',
            root: true,
            template: itemRenderer,
            items: [
                [
                    {
                        items: [
                            { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [
                            { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [
                            { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [{ image: 'https://primefaces.org/cdn/primevue/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.', template: itemRenderer }]
                    }
                ]
            ]
        },
        {
            label: 'Resources',
            root: true,
            template: itemRenderer
        },
        {
            label: 'Contact',
            root: true,
            template: itemRenderer
        }
    ];

    const start = (
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
    );
    const end = <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />;

    const code = {
        basic: `
<MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="960px" className="p-3 surface-0 shadow-2" style={{ borderRadius: '3rem' }} />
`,
        javascript: `
import React from 'react';
import { MegaMenu } from 'primereact/megamenu';
import { InputText } from 'primereact/inputtext';
import { Ripple } from 'primereact/ripple';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    const itemRenderer = (item, options) => {
        if (item.root) {
            return (
                <a className="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase p-ripple hover:surface-ground" style={{ borderRadius: '2rem' }} onClick={(e) => options.onClick(e)}>
                    <span className={item.icon} />
                    <span className="ml-2">{item.label}</span>
                    <Ripple />
                </a>
            );
        } else if (!item.image) {
            return (
                <a className="flex align-items-center p-3 cursor-pointer mb-2 gap-2 " onClick={options.onClick}>
                    <span className="inline-flex align-items-center justify-content-center border-circle bg-primary w-3rem h-3rem">
                        <i className={\`\${item.icon} text-lg\`}></i>
                    </span>
                    <span className="inline-flex flex-column gap-1">
                        <span className="font-medium text-lg text-900">{item.label}</span>
                        <span className="white-space-nowrap">{item.subtext}</span>
                    </span>
                </a>
            );
        } else {
            return (
                <div className="flex flex-column align-items-start gap-3" onClick={options.onClick}>
                    <img alt="megamenu-demo" src={item.image} className="w-full" />
                    <span>{item.subtext}</span>
                    <Button className="p-button p-component p-button-outlined" label={item.label} />
                </div>
            );
        }
    };

    const items = [
        {
            label: 'Company',
            root: true,
            template: itemRenderer,
            items: [
                [
                    {
                        items: [
                            { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [
                            { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [
                            { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [{ image: 'https://primefaces.org/cdn/primevue/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.', template: itemRenderer }]
                    }
                ]
            ]
        },
        {
            label: 'Resources',
            root: true,
            template: itemRenderer
        },
        {
            label: 'Contact',
            root: true,
            template: itemRenderer
        }
    ];

    const start = (
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
    );
    const end = <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />;

    return (
        <div className="card">
            <MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="960px" className="p-3 surface-0 shadow-2" style={{ borderRadius: '3rem' }} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { MegaMenu } from 'primereact/megamenu';
import { InputText } from 'primereact/inputtext';
import { MenuItem } from 'primereact/menuitem';
import { Ripple } from 'primereact/ripple';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    const itemRenderer = (item, options) => {
        if (item.root) {
            return (
                <a className="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase p-ripple hover:surface-ground" style={{ borderRadius: '2rem' }} onClick={(e) => options.onClick(e)}>
                    <span className={item.icon} />
                    <span className="ml-2">{item.label}</span>
                    <Ripple />
                </a>
            );
        } else if (!item.image) {
            return (
                <a className="flex align-items-center p-3 cursor-pointer mb-2 gap-2 " onClick={options.onClick}>
                    <span className="inline-flex align-items-center justify-content-center border-circle bg-primary w-3rem h-3rem">
                        <i className={\`\${item.icon} text-lg\`}></i>
                    </span>
                    <span className="inline-flex flex-column gap-1">
                        <span className="font-medium text-lg text-900">{item.label}</span>
                        <span className="white-space-nowrap">{item.subtext}</span>
                    </span>
                </a>
            );
        } else {
            return (
                <div className="flex flex-column align-items-start gap-3" onClick={options.onClick}>
                    <img alt="megamenu-demo" src={item.image} className="w-full" />
                    <span>{item.subtext}</span>
                    <Button className="p-button p-component p-button-outlined" label={item.label} />
                </div>
            );
        }
    };

    const items: MenuItem[] = [
        {
            label: 'Company',
            root: true,
            template: itemRenderer,
            items: [
                [
                    {
                        items: [
                            { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [
                            { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [
                            { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [{ image: 'https://primefaces.org/cdn/primevue/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.', template: itemRenderer }]
                    }
                ]
            ]
        },
        {
            label: 'Resources',
            root: true,
            template: itemRenderer
        },
        {
            label: 'Contact',
            root: true,
            template: itemRenderer
        }
    ];

    const start = (
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
    );
    const end = <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />;

    return (
        <div className="card">
            <MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="960px" className="p-3 surface-0 shadow-2" style={{ borderRadius: '3rem' }} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Custom content can be placed inside the megamenu using the <i>start</i> and <i>end</i> properties.
                </p>
            </DocSectionText>
            <div className="card">
                <MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="960px" className="p-3 surface-0 shadow-2" style={{ borderRadius: '3rem' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
