import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Avatar } from '@/components/lib/avatar/Avatar';
import { MegaMenu } from '@/components/lib/megamenu/MegaMenu';
import { Button } from '@/components/lib/button/Button';
import { Ripple } from '@/components/lib/primereact.all';

export function TemplateDoc(props) {
    const itemRenderer = (item) => {
        if (item.root) {
            return (
                <a className="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase p-ripple" style={{ borderRadius: '2rem' }}>
                    <span className={item.icon} />
                    <span className="ml-2">{item.label}</span>
                    <Ripple />
                </a>
            );
        } else if (!item.image) {
            return (
                <a className="flex align-items-center p-3 cursor-pointer mb-2 gap-2 ">
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
                <div className="flex flex-column align-items-start gap-3">
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
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g mask="url(#mask0_2642_713)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.5357 13.0197L29.2036 17.0218L31.531 21.0161C32.3802 22.4733 32.3802 24.2131 31.5311 25.6702C30.682 27.1274 29.1612 27.9973 27.463 27.9973H22.8081L20.6555 31.6915C19.7975 33.164 18.2608 34.0431 16.5447 34.0431C14.8286 34.0431 13.2918 33.164 12.4337 31.6915L10.2811 27.9973H5.617C3.93113 27.9973 2.42136 27.1337 1.57841 25.6871C0.735451 24.2405 0.735451 22.5131 1.57841 21.0666L3.91045 17.0644L1.58298 13.0702C0.733895 11.613 0.733895 9.87311 1.58298 8.41596C2.43207 6.95878 3.95286 6.08884 5.65104 6.08884H10.306L12.4585 2.39474C13.3165 0.922318 14.8535 0.0430908 16.5695 0.0430908C18.2856 0.0430908 19.8223 0.922227 20.6803 2.39474L22.8329 6.08884H27.4971C29.183 6.08884 30.6927 6.95252 31.5357 8.3991C32.3787 9.84573 32.3787 11.573 31.5357 13.0197ZM16.5695 1.06124C15.225 1.0612 14.0208 1.74999 13.3486 2.90374L11.4927 6.08873H21.6463L19.7904 2.90374C19.1182 1.74999 17.914 1.06124 16.5695 1.06124ZM22.7105 26.1286L22.6607 26.2141L22.6534 26.2266L22.5337 26.432L21.8976 27.5237L21.7881 27.7117L20.4662 29.9803L20.0676 30.6643L19.7869 31.146L19.7763 31.1484L19.77 31.1592C19.0978 32.313 17.8714 32.6453 16.5269 32.6453C15.1843 32.6453 14.004 32.3149 13.3312 31.1641L13.31 31.1588L12.6277 29.9878L12.4567 29.6945L5.09715 17.0644L6.43206 14.7736L6.43225 14.7744L8.78685 10.7356L8.7852 10.7353L9.05248 10.2767L9.05421 10.277L10.9022 7.10709L22.2401 7.10314L28.017 17.0219L22.7105 26.1286ZM30.6411 25.1613C29.9777 26.2996 28.7896 26.9792 27.4629 26.9792H23.4014L28.6101 18.0401L30.641 21.5253C31.3043 22.6636 31.3043 24.0229 30.6411 25.1613ZM2.46839 25.178C3.1256 26.3058 4.30263 26.9791 5.617 26.9791H9.6878L4.50379 18.0826L2.46839 21.5756C1.81123 22.7035 1.81123 24.0502 2.46839 25.178ZM2.47303 12.5611C1.80969 11.4227 1.80969 10.0634 2.47303 8.92507C3.13632 7.78669 4.32437 7.10706 5.65105 7.10706H9.71266L4.50381 16.0462L2.47303 12.5611ZM27.497 7.10706C28.8114 7.10706 29.9885 7.78039 30.6456 8.90826C31.3028 10.036 31.3028 11.3827 30.6456 12.5106L28.6102 16.0036L23.4262 7.10706H27.497Z"
                    fill="var(--primary-color)"
                />
            </g>
            <path d="M22.0969 18.6465L20.3461 18.2616L21.7078 20.1862V26.1522L26.0214 22.3031L26.3764 15.7598L24.2367 16.5296L22.0969 18.6465Z" fill="var(--primary-color)" />
            <path d="M11.2035 18.6465L12.9543 18.2616L11.5926 20.1862V26.1522L7.27906 22.3031L6.92397 15.7598L9.06376 16.5296L11.2035 18.6465Z" fill="var(--primary-color)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.1761 20.5713L13.7323 18.2618L14.7049 18.8392H18.5955L19.5681 18.2618L21.1243 20.5713V29.2316L19.3056 32.6659H13.6397L12.1761 29.2316V20.5713Z" fill="var(--primary-color)" />
            <path d="M21.7079 29.8089L24.2367 27.3071V24.8052L21.7079 26.9221V29.8089Z" fill="var(--primary-color)" />
            <path d="M11.5927 29.8089L9.06387 27.3071V24.8052L11.5927 26.9221V29.8089Z" fill="var(--primary-color)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16.2613 7.09967H14.1215L12.5652 10.7563L15.0941 18.0694H18.401L20.7353 10.7563L19.1791 7.09967H17.0394V18.0694H16.2613V7.09967Z" fill="var(--primary-color)" />
            <path d="M15.0942 18.0694L6.7296 14.9901L5.56244 10.1788L12.7599 10.7562L15.2887 18.0694H15.0942Z" fill="var(--primary-color)" />
            <path d="M18.4011 18.0694L26.7658 14.9901L27.9329 10.1788L20.5409 10.7562L18.2066 18.0694H18.4011Z" fill="var(--primary-color)" />
            <path d="M21.1245 10.1789L24.8545 9.794L22.4862 7.09967H19.7628L21.1245 10.1789Z" fill="var(--primary-color)" />
            <path d="M12.1762 10.1789L8.4462 9.794L10.8145 7.09967H13.5378L12.1762 10.1789Z" fill="var(--primary-color)" />
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
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g mask="url(#mask0_2642_713)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.5357 13.0197L29.2036 17.0218L31.531 21.0161C32.3802 22.4733 32.3802 24.2131 31.5311 25.6702C30.682 27.1274 29.1612 27.9973 27.463 27.9973H22.8081L20.6555 31.6915C19.7975 33.164 18.2608 34.0431 16.5447 34.0431C14.8286 34.0431 13.2918 33.164 12.4337 31.6915L10.2811 27.9973H5.617C3.93113 27.9973 2.42136 27.1337 1.57841 25.6871C0.735451 24.2405 0.735451 22.5131 1.57841 21.0666L3.91045 17.0644L1.58298 13.0702C0.733895 11.613 0.733895 9.87311 1.58298 8.41596C2.43207 6.95878 3.95286 6.08884 5.65104 6.08884H10.306L12.4585 2.39474C13.3165 0.922318 14.8535 0.0430908 16.5695 0.0430908C18.2856 0.0430908 19.8223 0.922227 20.6803 2.39474L22.8329 6.08884H27.4971C29.183 6.08884 30.6927 6.95252 31.5357 8.3991C32.3787 9.84573 32.3787 11.573 31.5357 13.0197ZM16.5695 1.06124C15.225 1.0612 14.0208 1.74999 13.3486 2.90374L11.4927 6.08873H21.6463L19.7904 2.90374C19.1182 1.74999 17.914 1.06124 16.5695 1.06124ZM22.7105 26.1286L22.6607 26.2141L22.6534 26.2266L22.5337 26.432L21.8976 27.5237L21.7881 27.7117L20.4662 29.9803L20.0676 30.6643L19.7869 31.146L19.7763 31.1484L19.77 31.1592C19.0978 32.313 17.8714 32.6453 16.5269 32.6453C15.1843 32.6453 14.004 32.3149 13.3312 31.1641L13.31 31.1588L12.6277 29.9878L12.4567 29.6945L5.09715 17.0644L6.43206 14.7736L6.43225 14.7744L8.78685 10.7356L8.7852 10.7353L9.05248 10.2767L9.05421 10.277L10.9022 7.10709L22.2401 7.10314L28.017 17.0219L22.7105 26.1286ZM30.6411 25.1613C29.9777 26.2996 28.7896 26.9792 27.4629 26.9792H23.4014L28.6101 18.0401L30.641 21.5253C31.3043 22.6636 31.3043 24.0229 30.6411 25.1613ZM2.46839 25.178C3.1256 26.3058 4.30263 26.9791 5.617 26.9791H9.6878L4.50379 18.0826L2.46839 21.5756C1.81123 22.7035 1.81123 24.0502 2.46839 25.178ZM2.47303 12.5611C1.80969 11.4227 1.80969 10.0634 2.47303 8.92507C3.13632 7.78669 4.32437 7.10706 5.65105 7.10706H9.71266L4.50381 16.0462L2.47303 12.5611ZM27.497 7.10706C28.8114 7.10706 29.9885 7.78039 30.6456 8.90826C31.3028 10.036 31.3028 11.3827 30.6456 12.5106L28.6102 16.0036L23.4262 7.10706H27.497Z"
                    fill="var(--primary-color)"
                >
            </g>
            <path d="M22.0969 18.6465L20.3461 18.2616L21.7078 20.1862V26.1522L26.0214 22.3031L26.3764 15.7598L24.2367 16.5296L22.0969 18.6465Z" fill="var(--primary-color)" />
            <path d="M11.2035 18.6465L12.9543 18.2616L11.5926 20.1862V26.1522L7.27906 22.3031L6.92397 15.7598L9.06376 16.5296L11.2035 18.6465Z" fill="var(--primary-color)" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.1761 20.5713L13.7323 18.2618L14.7049 18.8392H18.5955L19.5681 18.2618L21.1243 20.5713V29.2316L19.3056 32.6659H13.6397L12.1761 29.2316V20.5713Z"
                fill="var(--primary-color)"
            />
            <path d="M21.7079 29.8089L24.2367 27.3071V24.8052L21.7079 26.9221V29.8089Z" fill="var(--primary-color)" />
            <path d="M11.5927 29.8089L9.06387 27.3071V24.8052L11.5927 26.9221V29.8089Z" fill="var(--primary-color)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16.2613 7.09967H14.1215L12.5652 10.7563L15.0941 18.0694H18.401L20.7353 10.7563L19.1791 7.09967H17.0394V18.0694H16.2613V7.09967Z" fill="var(--primary-color)" />
            <path d="M15.0942 18.0694L6.7296 14.9901L5.56244 10.1788L12.7599 10.7562L15.2887 18.0694H15.0942Z" fill="var(--primary-color)" />
            <path d="M18.4011 18.0694L26.7658 14.9901L27.9329 10.1788L20.5409 10.7562L18.2066 18.0694H18.4011Z" fill="var(--primary-color)" />
            <path d="M21.1245 10.1789L24.8545 9.794L22.4862 7.09967H19.7628L21.1245 10.1789Z" fill="var(--primary-color)" />
            <path d="M12.1762 10.1789L8.4462 9.794L10.8145 7.09967H13.5378L12.1762 10.1789Z" fill="var(--primary-color)" />
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
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g mask="url(#mask0_2642_713)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.5357 13.0197L29.2036 17.0218L31.531 21.0161C32.3802 22.4733 32.3802 24.2131 31.5311 25.6702C30.682 27.1274 29.1612 27.9973 27.463 27.9973H22.8081L20.6555 31.6915C19.7975 33.164 18.2608 34.0431 16.5447 34.0431C14.8286 34.0431 13.2918 33.164 12.4337 31.6915L10.2811 27.9973H5.617C3.93113 27.9973 2.42136 27.1337 1.57841 25.6871C0.735451 24.2405 0.735451 22.5131 1.57841 21.0666L3.91045 17.0644L1.58298 13.0702C0.733895 11.613 0.733895 9.87311 1.58298 8.41596C2.43207 6.95878 3.95286 6.08884 5.65104 6.08884H10.306L12.4585 2.39474C13.3165 0.922318 14.8535 0.0430908 16.5695 0.0430908C18.2856 0.0430908 19.8223 0.922227 20.6803 2.39474L22.8329 6.08884H27.4971C29.183 6.08884 30.6927 6.95252 31.5357 8.3991C32.3787 9.84573 32.3787 11.573 31.5357 13.0197ZM16.5695 1.06124C15.225 1.0612 14.0208 1.74999 13.3486 2.90374L11.4927 6.08873H21.6463L19.7904 2.90374C19.1182 1.74999 17.914 1.06124 16.5695 1.06124ZM22.7105 26.1286L22.6607 26.2141L22.6534 26.2266L22.5337 26.432L21.8976 27.5237L21.7881 27.7117L20.4662 29.9803L20.0676 30.6643L19.7869 31.146L19.7763 31.1484L19.77 31.1592C19.0978 32.313 17.8714 32.6453 16.5269 32.6453C15.1843 32.6453 14.004 32.3149 13.3312 31.1641L13.31 31.1588L12.6277 29.9878L12.4567 29.6945L5.09715 17.0644L6.43206 14.7736L6.43225 14.7744L8.78685 10.7356L8.7852 10.7353L9.05248 10.2767L9.05421 10.277L10.9022 7.10709L22.2401 7.10314L28.017 17.0219L22.7105 26.1286ZM30.6411 25.1613C29.9777 26.2996 28.7896 26.9792 27.4629 26.9792H23.4014L28.6101 18.0401L30.641 21.5253C31.3043 22.6636 31.3043 24.0229 30.6411 25.1613ZM2.46839 25.178C3.1256 26.3058 4.30263 26.9791 5.617 26.9791H9.6878L4.50379 18.0826L2.46839 21.5756C1.81123 22.7035 1.81123 24.0502 2.46839 25.178ZM2.47303 12.5611C1.80969 11.4227 1.80969 10.0634 2.47303 8.92507C3.13632 7.78669 4.32437 7.10706 5.65105 7.10706H9.71266L4.50381 16.0462L2.47303 12.5611ZM27.497 7.10706C28.8114 7.10706 29.9885 7.78039 30.6456 8.90826C31.3028 10.036 31.3028 11.3827 30.6456 12.5106L28.6102 16.0036L23.4262 7.10706H27.497Z"
                    fill="var(--primary-color)"
                />
            </g>
            <path d="M22.0969 18.6465L20.3461 18.2616L21.7078 20.1862V26.1522L26.0214 22.3031L26.3764 15.7598L24.2367 16.5296L22.0969 18.6465Z" fill="var(--primary-color)" />
            <path d="M11.2035 18.6465L12.9543 18.2616L11.5926 20.1862V26.1522L7.27906 22.3031L6.92397 15.7598L9.06376 16.5296L11.2035 18.6465Z" fill="var(--primary-color)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12.1761 20.5713L13.7323 18.2618L14.7049 18.8392H18.5955L19.5681 18.2618L21.1243 20.5713V29.2316L19.3056 32.6659H13.6397L12.1761 29.2316V20.5713Z" fill="var(--primary-color)" />
            <path d="M21.7079 29.8089L24.2367 27.3071V24.8052L21.7079 26.9221V29.8089Z" fill="var(--primary-color)" />
            <path d="M11.5927 29.8089L9.06387 27.3071V24.8052L11.5927 26.9221V29.8089Z" fill="var(--primary-color)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16.2613 7.09967H14.1215L12.5652 10.7563L15.0941 18.0694H18.401L20.7353 10.7563L19.1791 7.09967H17.0394V18.0694H16.2613V7.09967Z" fill="var(--primary-color)" />
            <path d="M15.0942 18.0694L6.7296 14.9901L5.56244 10.1788L12.7599 10.7562L15.2887 18.0694H15.0942Z" fill="var(--primary-color)" />
            <path d="M18.4011 18.0694L26.7658 14.9901L27.9329 10.1788L20.5409 10.7562L18.2066 18.0694H18.4011Z" fill="var(--primary-color)" />
            <path d="M21.1245 10.1789L24.8545 9.794L22.4862 7.09967H19.7628L21.1245 10.1789Z" fill="var(--primary-color)" />
            <path d="M12.1762 10.1789L8.4462 9.794L10.8145 7.09967H13.5378L12.1762 10.1789Z" fill="var(--primary-color)" />
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
