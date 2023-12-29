import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ContextMenu } from '@/components/lib/contextmenu/ContextMenu';

export function DocumentDoc(props) {
    const items = [
        {
            label: 'Translate',
            icon: 'pi pi-language'
        },
        {
            label: 'Speech',
            icon: 'pi pi-volume-up',
            items: [
                {
                    label: 'Start',
                    icon: 'pi pi-caret-right'
                },
                {
                    label: 'Stop',
                    icon: 'pi pi-pause'
                }
            ]
        },
        {
            separator: true
        },
        {
            label: 'Print',
            icon: 'pi pi-print'
        }
    ];

    const code = {
        basic: `
<ContextMenu global model={items} breakpoint="767px" />
`,
        javascript: `
import React from 'react';
import { ContextMenu } from 'primereact/contextmenu';

export default function DocumentDemo() {
    const items = [
        {
            label: 'Translate',
            icon: 'pi pi-language'
        },
        {
            label: 'Speech',
            icon: 'pi pi-volume-up',
            items: [
                {
                    label: 'Start',
                    icon: 'pi pi-caret-right'
                },
                {
                    label: 'Stop',
                    icon: 'pi pi-pause'
                }
            ]
        },
        {
            separator: true
        },
        {
            label: 'Print',
            icon: 'pi pi-print'
        }
    ];

    return (
        <div className="card text-center">
            <p className="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
            <ContextMenu global model={items} breakpoint="767px" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { ContextMenu } from 'primereact/contextmenu';
import { MenuItem } from 'primereact/menuitem';

export default function DocumentDemo() {
    const items: MenuItem[] = [
        {
            label: 'Translate',
            icon: 'pi pi-language'
        },
        {
            label: 'Speech',
            icon: 'pi pi-volume-up',
            items: [
                {
                    label: 'Start',
                    icon: 'pi pi-caret-right'
                },
                {
                    label: 'Stop',
                    icon: 'pi pi-pause'
                }
            ]
        },
        {
            separator: true
        },
        {
            label: 'Print',
            icon: 'pi pi-print'
        }
    ];

    return (
        <div className="card text-center">
            <p className="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
            <ContextMenu global model={items} breakpoint="767px" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Setting global property attaches the context menu to the document.</p>
            </DocSectionText>
            <div className="card text-center">
                <p className="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
                <ContextMenu global model={items} breakpoint="767px" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
