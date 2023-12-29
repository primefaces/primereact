import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { TieredMenu } from '@/components/lib/tieredmenu/TieredMenu';
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
<TieredMenu model={items} breakpoint="767px" />
        `,
        javascript: `
import React from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
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
        <TieredMenu model={items} breakpoint="767px" />
    )
}
        `,
        typescript: `
import React from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
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
        <TieredMenu model={items} breakpoint="767px" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    TieredMenu requires a collection of menuitems as its <i>model</i>.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <TieredMenu model={items} breakpoint="767px" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
