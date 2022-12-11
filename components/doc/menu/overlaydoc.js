import { useRef } from 'react';
import { Button } from '../../lib/button/Button';
import { Menu } from '../../lib/menu/Menu';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function OverlayDoc(props) {
    const menuLeft = useRef(null);
    const menuRight = useRef(null);
    const toast = useRef(null);
    const items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Navigate',
            items: [
                {
                    label: 'React Docs Website',
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    command: (e) => {
                        window.location.hash = '/fileupload';
                    }
                }
            ]
        }
    ];
    const code = {
        basic: `
<Toast ref={toast} />
<Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
<Button label="Show Left" icon="pi pi-align-left" className="mr-2" onClick={(event) => menuLeft.current?.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
<Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
<Button label="Show Right" icon="pi pi-align-right" className="mr-2" onClick={(event) => menuRight.current?.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
`,
        javascript: `
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

export default function OverlayDoc() {
    const menuLeft = useRef(null);
    const menuRight = useRef(null);
    const toast = useRef(null);
    const items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Navigate',
            items: [
                {
                    label: 'React Docs Website',
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    command:(e) => {
                        window.location.hash = "/fileupload"
                    }
                }
            ]
        }
    ];

    return (
        <div>
            <Toast ref={toast}></Toast>
            <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
            <Button label="Show Left" icon="pi pi-align-left" className="mr-2" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
            <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
            <Button label="Show Right" icon="pi pi-align-right" className="mr-2" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
        </div>
    )
}
        `,
        typescript: `
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function OverlayDoc() {
    const menuLeft = useRef<Menu>(null);
    const menuRight = useRef<Menu>(null);
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Navigate',
            items: [
                {
                    label: 'React Docs Website',
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    command:(e) => {
                        window.location.hash = "/fileupload"
                    }
                }
            ]
        }
    ];

    return (
        <div>
            <Toast ref={toast}></Toast>
            <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
            <Button label="Show Left" icon="pi pi-align-left" className="mr-2" onClick={(event) => menuLeft.current?.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
            <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
            <Button label="Show Right" icon="pi pi-align-right" className="mr-2" onClick={(event) => menuRight.current?.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Menu is inline by default whereas popup mode is supported by enabling popup property and calling toggle method with an event of the target. The <i>popupAlignment</i> property allows you to control how the overlay is aligned with
                    its target.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast}></Toast>
                <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
                <Button label="Show Left" icon="pi pi-align-left" className="mr-2" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
                <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
                <Button label="Show Right" icon="pi pi-align-right" className="mr-2" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
