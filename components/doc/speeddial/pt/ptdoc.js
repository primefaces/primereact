import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { SpeedDial } from '@/components/lib/speeddial/SpeedDial';
import { classNames } from '@/components/lib/utils/Utils';

export function PTDoc(props) {
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil'
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash'
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link'
        }
    ];

    const code = {
        basic: `
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

export default function PTDemo() {
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil'
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash'
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link'
        }
    ];

    return (
        <div className="card">
            <div style={{ height: '500px' }} className="flex align-items-center justify-content-center">
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
import { MenuItem } from 'primereact/menuitem';

export default function PTDemo() {
    const items: MenuItem[] = [
        {
            label: 'Add',
            icon: 'pi pi-pencil'
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash'
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link'
        }
    ];

    return (
        <div className="card">
            <div style={{ height: '500px' }} className="flex align-items-center justify-content-center">
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
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div style={{ height: '500px' }} className="flex align-items-center justify-content-center">
                    <SpeedDial
                        pt={{
                            menu: ({ state }) => ({
                                className: classNames('mt-2', { 'border-1 border-primary surface-border border-round surface-ground': state.visible })
                            })
                        }}
                        model={items}
                        radius={80}
                        direction="down"
                    />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
