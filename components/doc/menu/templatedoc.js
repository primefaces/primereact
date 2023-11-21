import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Avatar } from '@/components/lib/avatar/Avatar';
import { Menu } from '@/components/lib/menu/Menu';
import { Toast } from '@/components/lib/toast/Toast';
import { classNames } from '@/components/lib/utils/Utils';
import { useRef } from 'react';

export function TemplateDoc(props) {
    const toast = useRef(null);
    let items = [
        { label: 'Profile', icon: 'pi pi-fw pi-user' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog' },
        { separator: true },
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
<Menu model={items} />
`,
        javascript: `
import React from 'react'; 
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { Avatar } from 'primereact/avatar';

export default function TemplateDemo() {
    const toast = useRef<Toast>(null);
    let items = [
        { label: 'Profile', icon: 'pi pi-fw pi-user' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog' },
        { separator: true},
        { 
            command: () => { toast.current.show({ severity: 'info', summary: 'Info', detail: 'Item Selected', life: 3000 }); },
            template: (item, options) => {
                return (
                    <button onClick={(e) => options.onClick(e)} className={classNames(options.className, 'w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround')}>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" shape="circle" />
                        <div className="flex flex-column align">
                            <span className="font-bold">Amy Elsner</span>
                            <span className="text-sm">Agent</span>
                        </div>
                    </button>
                )
        }}
    ];

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Menu model={items} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { Avatar } from 'primereact/avatar';
import { MenuItem } from 'primereact/menuitem';

export default function TemplateDemo() {
    const toast = useRef<Toast>(null);
    let items: MenuItem[] = [
        { label: 'Profile', icon: 'pi pi-fw pi-user' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog' },
        { separator: true},
        { 
            command: () => { toast.current.show({ severity: 'info', summary: 'Info', detail: 'Item Selected', life: 3000 }); },
            template: (item, options) => {
                return (
                    <button onClick={(e) => options.onClick(e)} className={classNames(options.className, 'w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround')}>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" shape="circle" />
                        <div className="flex flex-column align">
                            <span className="font-bold">Amy Elsner</span>
                            <span className="text-sm">Agent</span>
                        </div>
                    </button>
                )
        }}

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Menu model={items} />
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
                <Toast ref={toast} />
                <Menu model={items} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
