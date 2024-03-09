import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { TabMenu } from '@/components/lib/tabmenu/TabMenu';
import { useRouter } from 'next/router';

export function RouterDoc(props) {
    const router = useRouter();
    const items = [
        { label: 'Router Link', icon: 'pi pi-home', url: '/tabmenu' },
        {
            label: 'Programmatic',
            icon: 'pi pi-palette',
            command: () => {
                router.push('/unstyled');
            }
        },
        { label: 'External', icon: 'pi pi-link', url: 'https://react.dev/' }
    ];

    const code = {
        basic: `
<TabMenu model={items} />
        `,
        javascript: `
import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import { useRouter } from 'next/router';

export default function RouterDemo() {
    const router = useRouter();
    const items = [
        { label: 'Router Link', icon: 'pi pi-home', url: '/tabmenu' },
        {
            label: 'Programmatic',
            icon: 'pi pi-palette',
            command: () => {
                router.push('/unstyled');
            }
        },
        { label: 'External', icon: 'pi pi-link', url: 'https://react.dev/' }
    ];

    return (
        <div className="card">
            <TabMenu model={items} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';
import { useRouter } from 'next/router';

export default function RouterDemo() {
    const router = useRouter();
    const items: MenuItem[] = [
        { label: 'Router Link', icon: 'pi pi-home', url: '/tabmenu' },
        {
            label: 'Programmatic',
            icon: 'pi pi-palette',
            command: () => {
                router.push('/unstyled');
            }
        },
        { label: 'External', icon: 'pi pi-link', url: 'https://react.dev/' }
    ];

    return (
        <div className="card">
            <TabMenu model={items} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Items with navigation are defined with <i>command</i> property to be able to use a router link component, an external link or programmatic navigation.{' '}
                </p>
            </DocSectionText>
            <div className="card">
                <TabMenu model={items} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
