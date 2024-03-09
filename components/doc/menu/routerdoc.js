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
                    Items with navigation are defined with <i>command</i> and <i>url</i> property to be able to use a router link component, an external link or programmatic navigation.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Menu model={items} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
