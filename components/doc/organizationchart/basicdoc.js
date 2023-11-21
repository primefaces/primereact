import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { OrganizationChart } from '@/components/lib/organizationchart/OrganizationChart';
import { useState } from 'react';

export function BasicDoc(props) {
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
<OrganizationChart value={data} />
        `,
        javascript: `
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

export default function BasicDoc() {
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
            <OrganizationChart value={data} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import { TreeNode } from 'primereact/treenode';

export default function BasicDoc() {
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
            <OrganizationChart value={data} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    OrganizationChart requires a collection of <i>TreeNode</i> instances as a <i>value</i>.
                </p>
            </DocSectionText>
            <div className="card overflow-x-auto">
                <OrganizationChart value={data} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
