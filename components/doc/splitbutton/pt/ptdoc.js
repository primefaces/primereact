import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { SplitButton } from '@/components/lib/splitbutton/SplitButton';

export function PTDoc(props) {
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link'
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload'
        }
    ];

    const code = {
        basic: `
<SplitButton
    pt={{
        menu: {
            className: 'surface-ground'
        }
    }}
    label="Save"
    icon="pi pi-plus"
    model={items}
/>
        `,
        javascript: `
import React from 'react';
import { SplitButton } from 'primereact/splitbutton';

export default function PTDemo() {
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link'
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload'
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <SplitButton
                pt={{
                    menu: {
                        className: 'surface-ground'
                    }
                }}
                label="Save"
                icon="pi pi-plus"
                model={items}
            />
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { SplitButton } from 'primereact/splitbutton';
import { MenuItem } from 'primereact/menuitem';

export default function PTDemo() {
    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link'
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload'
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <SplitButton
                pt={{
                    menu: {
                        className: 'surface-ground'
                    }
                }}
                label="Save"
                icon="pi pi-plus"
                model={items}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <SplitButton
                    pt={{
                        menu: {
                            className: 'surface-ground'
                        }
                    }}
                    label="Save"
                    icon="pi pi-plus"
                    model={items}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
