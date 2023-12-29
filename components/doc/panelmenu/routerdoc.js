import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { PanelMenu } from '@/components/lib/panelmenu/PanelMenu';
import { useRouter } from 'next/router';

export function RouterDoc(props) {
    const router = useRouter();
    const items = [
        {
            label: 'Router',
            icon: 'pi pi-palette',
            items: [
                {
                    label: 'Styled',
                    icon: 'pi pi-eraser',
                    url: '/theming'
                },
                {
                    label: 'Unstyled',
                    icon: 'pi pi-heart',
                    url: '/unstyled'
                }
            ]
        },
        {
            label: 'Programmatic',
            icon: 'pi pi-link',
            command: () => {
                router.push('/installation');
            }
        },
        {
            label: 'External',
            icon: 'pi pi-home',
            items: [
                {
                    label: 'React.js',
                    icon: 'pi pi-star',
                    url: 'https://react.dev/'
                },
                {
                    label: 'Vite.js',
                    icon: 'pi pi-bookmark',
                    url: 'https://vite.dev/'
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
import { useRouter } from 'next/router';

export default function RouterDemo() {
    const router = useRouter();
    const items = [
        {
            label: 'Router',
            icon: 'pi pi-palette',
            items: [
                {
                    label: 'Styled',
                    icon: 'pi pi-eraser',
                    url: '/theming'
                },
                {
                    label: 'Unstyled',
                    icon: 'pi pi-heart',
                    url: '/unstyled'
                }
            ]
        },
        {
            label: 'Programmatic',
            icon: 'pi pi-link',
            command: () => {
                router.push('/installation');
            }
        },
        {
            label: 'External',
            icon: 'pi pi-home',
            items: [
                {
                    label: 'React.js',
                    icon: 'pi pi-star',
                    url: 'https://react.dev/'
                },
                {
                    label: 'Vite.js',
                    icon: 'pi pi-bookmark',
                    url: 'https://vite.dev/'
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
import { useRouter } from 'next/router';

export default function RouterDemo() {
    const router = useRouter();
    const items: MenuItem[] = [
        {
            label: 'Router',
            icon: 'pi pi-palette',
            items: [
                {
                    label: 'Styled',
                    icon: 'pi pi-eraser',
                    url: '/theming'
                },
                {
                    label: 'Unstyled',
                    icon: 'pi pi-heart',
                    url: '/unstyled'
                }
            ]
        },
        {
            label: 'Programmatic',
            icon: 'pi pi-link',
            command: () => {
                router.push('/installation');
            }
        },
        {
            label: 'External',
            icon: 'pi pi-home',
            items: [
                {
                    label: 'React.js',
                    icon: 'pi pi-star',
                    url: 'https://react.dev/'
                },
                {
                    label: 'Vite.js',
                    icon: 'pi pi-bookmark',
                    url: 'https://vite.dev/'
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
                    PanelMenu requires a collection of menuitems as its <i>model</i>.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <PanelMenu model={items} className="w-full md:w-20rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
