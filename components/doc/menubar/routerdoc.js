import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Menubar } from '@/components/lib/menubar/Menubar';
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
                    url: '/theming'
                },
                {
                    label: 'Unstyled',
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
                    url: 'https://react.dev/'
                },
                {
                    label: 'Vite.js',
                    url: 'https://vitejs.dev/'
                }
            ]
        }
    ];

    const code = {
        basic: `
<Menubar model={items} />    
`,
        javascript: `
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
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
                    url: '/theming'
                },
                {
                    label: 'Unstyled',
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
                    url: 'https://react.dev/'
                },
                {
                    label: 'Vite.js',
                    url: 'https://vitejs.dev/'
                }
            ]
        }
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
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
                    url: '/theming'
                },
                {
                    label: 'Unstyled',
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
                    url: 'https://react.dev/'
                },
                {
                    label: 'Vite.js',
                    url: 'https://vitejs.dev/'
                }
            ]
        }
    ];
    
    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Menubar requires a collection of menuitems as its <i>model</i>.
                </p>
            </DocSectionText>
            <div className="card relative z-2">
                <Menubar model={items} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
