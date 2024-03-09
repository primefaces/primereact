import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ContextMenu } from '@/components/lib/contextmenu/ContextMenu';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export function RouterDoc(props) {
    const cm = useRef(null);
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

    const onRightClick = (event) => {
        cm.current.show(event);
    };

    const code = {
        basic: `
<span className="inline-flex align-items-center justify-content-center border-2 border-primary border-round w-4rem h-4rem" onContextMenu={(event) => onRightClick(event)} aria-haspopup="true">
    <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40"></img>
</span>
<ContextMenu model={items} ref={cm} />`,
        javascript: `
import { ContextMenu } from 'primereact/contextmenu';
import { useRef } from 'react';
import { useRouter } from 'next/router'

export function RouterDemo(props) {
    const cm = useRef(null);
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

    const onRightClick = (event) => {
        cm.current.show(event);
    };

    return (
        <div className="card flex md:justify-content-center">
            <span className="inline-flex align-items-center justify-content-center border-2 border-primary border-round w-4rem h-4rem" onContextMenu={(event) => onRightClick(event)} aria-haspopup="true">
                <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40"></img>
            </span>
            <ContextMenu model={items} ref={cm} />
        </div>
    )
}
        `,
        typescript: `
import { ContextMenu } from 'primereact/contextmenu';
import { useRef, MouseEvent } from 'react';
import { useRouter } from 'next/router'
import { MenuItem } from 'primereact/menuitem';

export function RouterDemo(props: any) {
    const cm = useRef<ContextMenuRef | null>(null);
    const router = useRouter();
    const items: MenuItem[] = [
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

    const onRightClick = (event: MouseEvent) => {
        cm.current?.show(event);
    };

    return (
        <div className="card flex md:justify-content-center">
            <span className="inline-flex align-items-center justify-content-center border-2 border-primary border-round w-4rem h-4rem" onContextMenu={(event) => onRightClick(event)} aria-haspopup="true">
                <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40"></img>
            </span>
            <ContextMenu model={items} ref={cm} />
        </div>
    )
}`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Items with navigation are defined with <i>command</i> and <i>url</i> property to be able to use a router link component, an external link or programmatic navigation.
                </p>
            </DocSectionText>
            <div className="card flex md:justify-content-center">
                <span className="inline-flex align-items-center justify-content-center border-2 border-primary border-round w-4rem h-4rem" onContextMenu={(event) => onRightClick(event)} aria-haspopup="true">
                    <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40"></img>
                </span>
                <ContextMenu model={items} ref={cm} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
