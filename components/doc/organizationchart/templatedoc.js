import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { OrganizationChart } from '@/components/lib/organizationchart/OrganizationChart';
import { useState } from 'react';

export function TemplateDoc(props) {
    const [data] = useState([
        {
            label: 'Argentina',
            expanded: true,
            data: 'ar',
            children: [
                {
                    label: 'Argentina',
                    expanded: true,
                    data: 'ar',
                    children: [
                        {
                            label: 'Argentina',
                            data: 'ar'
                        },
                        {
                            label: 'Croatia',
                            data: 'hr'
                        }
                    ]
                },
                {
                    label: 'France',
                    expanded: true,
                    data: 'fr',
                    children: [
                        {
                            label: 'France',
                            data: 'fr'
                        },
                        {
                            label: 'Morocco',
                            data: 'ma'
                        }
                    ]
                }
            ]
        }
    ]);

    const nodeTemplate = (node) => {
        return (
            <div className="flex flex-column align-items-center">
                <img alt={node.label} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`w-2rem shadow-2 flag flag-${node.data}`} />
                <div className="mt-3 font-medium text-lg">{node.label}</div>
            </div>
        );
    };

    const code = {
        basic: `
<OrganizationChart value={data} nodeTemplate={nodeTemplate} />
        `,
        javascript: `
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

export default function TemplateDemo() {
    const [data] = useState([
        {
            label: 'Argentina',
            expanded: true,
            data: 'ar',
            children: [
                {
                    label: 'Argentina',
                    expanded: true,
                    data: 'ar',
                    children: [
                        {
                            label: 'Argentina',
                            data: 'ar'
                        },
                        {
                            label: 'Croatia',
                            data: 'hr'
                        }
                    ]
                },
                {
                    label: 'France',
                    expanded: true,
                    data: 'fr',
                    children: [
                        {
                            label: 'France',
                            data: 'fr'
                        },
                        {
                            label: 'Morocco',
                            data: 'ma'
                        }
                    ]
                }
            ]
        }
    ]);

    const nodeTemplate = (node) => {
        return (
            <div className="flex flex-column align-items-center">
                <img alt={node.label} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`w-2rem shadow-2 flag flag-\${node.data}\`} />
                <div className="mt-3 font-medium text-lg">{node.label}</div>
            </div>
        );
    };

    return (
        <div className="card overflow-x-auto">
            <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import { TreeNode } from 'primereact/treenode';

export default function TemplateDemo() {
    const [data] = useState<TreeNode>([
        {
            label: 'Argentina',
            expanded: true,
            data: 'ar',
            children: [
                {
                    label: 'Argentina',
                    expanded: true,
                    data: 'ar',
                    children: [
                        {
                            label: 'Argentina',
                            data: 'ar'
                        },
                        {
                            label: 'Croatia',
                            data: 'hr'
                        }
                    ]
                },
                {
                    label: 'France',
                    expanded: true,
                    data: 'fr',
                    children: [
                        {
                            label: 'France',
                            data: 'fr'
                        },
                        {
                            label: 'Morocco',
                            data: 'ma'
                        }
                    ]
                }
            ]
        }
    ]);

    const nodeTemplate = (node: TreeNode) => {
        return (
            <div className="flex flex-column align-items-center">
                <img alt={node.label} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`w-2rem shadow-2 flag flag-\${node.data}\`} />
                <div className="mt-3 font-medium text-lg">{node.label}</div>
            </div>
        );
    };

    return (
        <div className="card overflow-x-auto">
            <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Custom content instead of a node <i>label</i> is defined using the <i>nodeTemplate</i> property.
                </p>
            </DocSectionText>
            <div className="card overflow-x-auto">
                <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
