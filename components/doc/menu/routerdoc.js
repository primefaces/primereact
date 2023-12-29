import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Menu } from '@/components/lib/menu/Menu';
import { useRouter } from 'next/router';

export function RouterDoc(props) {
    const router = useRouter();
    const items = [
        {
            label: 'Router Link',
            icon: 'pi pi-palette',
            url: '/unstyled'
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
            url: 'https://react.dev/'
        }
    ];

    const code = {
        basic: `
<Menu model={items} />
`,
        javascript: `
import React from 'react'; 
import { Menu } from 'primereact/menu';
import { useRouter } from 'next/router';

export default function RouterDemo() {
    const router = useRouter();
    const items = [
        {
            label: 'Router Link',
            icon: 'pi pi-palette',
            url: '/unstyled'
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
            url: 'https://react.dev/'
        }
    ];

    return (
        <Menu model={items} />
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { useRouter } from 'next/router';

export default function RouterDemo() {
    const router = useRouter();
    const items = [
        {
            label: 'Router Link',
            icon: 'pi pi-palette',
            url: '/unstyled'
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
            url: 'https://react.dev/'
        }
    ];

    return (
        <Menu model={items} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Menu requires a collection of menuitems as its <i>model</i>.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Menu model={items} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
