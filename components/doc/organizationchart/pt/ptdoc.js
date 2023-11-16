import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { OrganizationChart } from '@/components/lib/organizationchart/OrganizationChart';
import { useState } from 'react';

export function PTDoc(props) {
    const [selection, setSelection] = useState([]);
    const [data] = useState([
        {
            label: 'Argentina',
            expanded: true,
            children: [
                {
                    label: 'Argentina',
                    expanded: true,
                    children: [
                        {
                            label: 'Argentina'
                        },
                        {
                            label: 'Croatia'
                        }
                    ]
                },
                {
                    label: 'France',
                    expanded: true,
                    children: [
                        {
                            label: 'France'
                        },
                        {
                            label: 'Morocco'
                        }
                    ]
                }
            ]
        }
    ]);

    const code = {
        basic: `
<OrganizationChart
    value={data}
    selectionMode="single"
    selection={selection}
    onSelectionChange={(e) => setSelection(e.data)}
    pt={{
        node: ({ context }) => ({
            className: context.selected ? 'border-orange-400 border-round-sm' : 'border-primary-400 border-round-sm'
        })
    }}
/>
        `,
        javascript: `
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

export default function PTDemo() {
    const [selection, setSelection] = useState([]);
    const [data] = useState([
        {
            label: 'Argentina',
            expanded: true,
            children: [
                {
                    label: 'Argentina',
                    expanded: true,
                    children: [
                        {
                            label: 'Argentina'
                        },
                        {
                            label: 'Croatia'
                        }
                    ]
                },
                {
                    label: 'France',
                    expanded: true,
                    children: [
                        {
                            label: 'France'
                        },
                        {
                            label: 'Morocco'
                        }
                    ]
                }
            ]
        }
    ]);

    return (
        <div className="card overflow-x-auto">
            <OrganizationChart
                value={data}
                selectionMode="single"
                selection={selection}
                onSelectionChange={(e) => setSelection(e.data)}
                pt={{
                    node: ({ context }) => ({
                        className: context.selected ? 'border-orange-400 border-round-sm' : 'border-primary-400 border-round-sm'
                    })
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import { TreeNode } from 'primereact/treenode';

export default function PTDemo() {
    const [selection, setSelection] = useState<TreeNode[]>([]);
    const [data] = useState<TreeNode>([
        {
            label: 'Argentina',
            expanded: true,
            children: [
                {
                    label: 'Argentina',
                    expanded: true,
                    children: [
                        {
                            label: 'Argentina'
                        },
                        {
                            label: 'Croatia'
                        }
                    ]
                },
                {
                    label: 'France',
                    expanded: true,
                    children: [
                        {
                            label: 'France'
                        },
                        {
                            label: 'Morocco'
                        }
                    ]
                }
            ]
        }
    ]);

    return (
        <div className="card overflow-x-auto">
            <OrganizationChart
                value={data}
                selectionMode="single"
                selection={selection}
                onSelectionChange={(e) => setSelection(e.data)}
                pt={{
                    node: ({ context }) => ({
                        className: context.selected ? 'border-orange-400 border-round-sm' : 'border-primary-400 border-round-sm'
                    })
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card overflow-x-auto">
                <OrganizationChart
                    value={data}
                    selectionMode="single"
                    selection={selection}
                    onSelectionChange={(e) => setSelection(e.data)}
                    pt={{
                        node: ({ context }) => ({
                            className: context.selected ? 'border-orange-400 border-round-sm' : 'border-primary-400 border-round-sm'
                        })
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
