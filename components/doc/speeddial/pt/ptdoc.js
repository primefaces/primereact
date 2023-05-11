import { useRef } from 'react';
import { SpeedDial } from '../../../lib/speeddial/SpeedDial';
import { Toast } from '../../../lib/toast/Toast';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { classNames } from '../../../lib/utils/utils';

export function PTDoc(props) {
    const toast = useRef(null);
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/';
            }
        }
    ];

    const code = {
        basic: `
<Toast ref={toast} />
<SpeedDial
    pt={{
        menu: ({ state }) => ({
            className: classNames("mt-2", { "border-1 border-primary surface-border border-round surface-ground": state.visible })
        })
    }}
    model={items}
    radius={80}
    direction='down'
/>
        `,
        javascript: `
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';

export default function PTDemo() {
    const toast = useRef(null);
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ height: '500px' }} className="flex align-items-center justify-content-center">
                <Toast ref={toast} />
                <SpeedDial
                    pt={{
                        menu: ({ state }) => ({
                            className: classNames("mt-2", { "border-1 border-primary surface-border border-round surface-ground": state.visible })
                        })
                    }}
                    model={items}
                    radius={80}
                    direction='down'

                />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import { MenuItem } from 'primereact/menuitem';

export default function PTDemo() {
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ height: '500px' }} className="flex align-items-center justify-content-center">
                <Toast ref={toast} />
                <SpeedDial
                    pt={{
                        menu: ({ state }) => ({
                            className: classNames("mt-2", { "border-1 border-primary surface-border border-round surface-ground": state.visible })
                        })
                    }}
                    model={items}
                    radius={80}
                    direction='down'

                />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
            </DocSectionText>
            <div className="card">
                <div style={{ height: '500px' }} className="flex align-items-center justify-content-center">
                    <Toast ref={toast} />
                    <SpeedDial
                        pt={{
                            menu: ({ state }) => ({
                                className: classNames("mt-2", { "border-1 border-primary surface-border border-round surface-ground": state.visible })
                            })
                        }}
                        model={items}
                        radius={80}
                        direction='down'

                    />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
