import { useState } from 'react';
import { OrganizationChart } from '../../lib/organizationchart/OrganizationChart';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AdvancedDoc(props) {
    const [selection, setSelection] = useState([]);
    const data = [
        {
            label: 'CEO',
            type: 'person',
            className: 'p-person',
            expanded: true,
            data: { name: 'Walter White', avatar: 'walter.jpg' },
            children: [
                {
                    label: 'CFO',
                    type: 'person',
                    className: 'p-person',
                    expanded: true,
                    data: { name: 'Saul Goodman', avatar: 'saul.jpg' },
                    children: [
                        {
                            label: 'Tax',
                            className: 'department-cfo'
                        },
                        {
                            label: 'Legal',
                            className: 'department-cfo'
                        }
                    ]
                },
                {
                    label: 'COO',
                    type: 'person',
                    className: 'p-person',
                    expanded: true,
                    data: { name: 'Mike E.', avatar: 'mike.jpg' },
                    children: [
                        {
                            label: 'Operations',
                            className: 'department-coo'
                        }
                    ]
                },
                {
                    label: 'CTO',
                    type: 'person',
                    className: 'p-person',
                    expanded: true,
                    data: { name: 'Jesse Pinkman', avatar: 'jesse.jpg' },
                    children: [
                        {
                            label: 'Development',
                            className: 'department-cto',
                            expanded: true,
                            children: [
                                {
                                    label: 'Analysis',
                                    className: 'department-cto'
                                },
                                {
                                    label: 'Front End',
                                    className: 'department-cto'
                                },
                                {
                                    label: 'Back End',
                                    className: 'department-cto'
                                }
                            ]
                        },
                        {
                            label: 'QA',
                            className: 'department-cto'
                        },
                        {
                            label: 'R&D',
                            className: 'department-cto'
                        }
                    ]
                }
            ]
        }
    ];

    const nodeTemplate = (node) => {
        if (node.type === 'person') {
            return (
                <div>
                    <div className="node-header">{node.label}</div>
                    <div className="node-content">
                        <img alt={node.data.avatar} src={`images/organization/${node.data.avatar}`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} style={{ width: '32px' }} />
                        <div>{node.data.name}</div>
                    </div>
                </div>
            );
        }

        return node.label;
    };

    const code = {
        basic: `
<OrganizationChart value={data} nodeTemplate={nodeTemplate} selection={selection} selectionMode="multiple" onSelectionChange={event => setSelection(event.data)} className="company"></OrganizationChart>
        `,
        javascript: `
import { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

export default function AdvancedDoc() {
    const [selection, setSelection] = useState([]);
    const data = [{
        label: 'CEO',
        type: 'person',
        className: 'p-person',
        expanded: true,
        data: { name: 'Walter White', 'avatar': 'walter.jpg' },
        children: [
            {
                label: 'CFO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: { name: 'Saul Goodman', 'avatar': 'saul.jpg' },
                children: [{
                    label: 'Tax',
                    className: 'department-cfo'
                },
                {
                    label: 'Legal',
                    className: 'department-cfo'
                }],
            },
            {
                label: 'COO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
                children: [{
                    label: 'Operations',
                    className: 'department-coo'
                }]
            },
            {
                label: 'CTO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: { name: 'Jesse Pinkman', 'avatar': 'jesse.jpg' },
                children: [{
                    label: 'Development',
                    className: 'department-cto',
                    expanded: true,
                    children: [{
                        label: 'Analysis',
                        className: 'department-cto'
                    },
                    {
                        label: 'Front End',
                        className: 'department-cto'
                    },
                    {
                        label: 'Back End',
                        className: 'department-cto'
                    }]
                },
                {
                    label: 'QA',
                    className: 'department-cto'
                },
                {
                    label: 'R&D',
                    className: 'department-cto'
                }]
            }
        ]
    }];

    const nodeTemplate = (node) => {
        if (node.type === "person") {
            return (
                <div>
                    <div className="node-header">{node.label}</div>
                    <div className="node-content">
                    <img alt={node.data.avatar} src={\`images/organization/\${node.data.avatar}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} style={{ width: '32px' }} />
                        <div>{node.data.name}</div>
                    </div>
                </div>
            );
        }

        return node.label;
    }

    return (
        <OrganizationChart value={data} nodeTemplate={nodeTemplate} selection={selection} selectionMode="multiple" onSelectionChange={event => setSelection(event.data)} className="company"></OrganizationChart>
    )
}
        `,
        typescript: `
import { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

export default function AdvancedDoc() {
    const [selection, setSelection] = useState([]);
    const data = [{
        label: 'CEO',
        type: 'person',
        className: 'p-person',
        expanded: true,
        data: { name: 'Walter White', 'avatar': 'walter.jpg' },
        children: [
            {
                label: 'CFO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: { name: 'Saul Goodman', 'avatar': 'saul.jpg' },
                children: [{
                    label: 'Tax',
                    className: 'department-cfo'
                },
                {
                    label: 'Legal',
                    className: 'department-cfo'
                }],
            },
            {
                label: 'COO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
                children: [{
                    label: 'Operations',
                    className: 'department-coo'
                }]
            },
            {
                label: 'CTO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: { name: 'Jesse Pinkman', 'avatar': 'jesse.jpg' },
                children: [{
                    label: 'Development',
                    className: 'department-cto',
                    expanded: true,
                    children: [{
                        label: 'Analysis',
                        className: 'department-cto'
                    },
                    {
                        label: 'Front End',
                        className: 'department-cto'
                    },
                    {
                        label: 'Back End',
                        className: 'department-cto'
                    }]
                },
                {
                    label: 'QA',
                    className: 'department-cto'
                },
                {
                    label: 'R&D',
                    className: 'department-cto'
                }]
            }
        ]
    }];

    const nodeTemplate = (node) => {
        if (node.type === "person") {
            return (
                <div>
                    <div className="node-header">{node.label}</div>
                    <div className="node-content">
                    <img alt={node.data.avatar} src={\`images/organization/\${node.data.avatar}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} style={{ width: '32px' }} />
                        <div>{node.data.name}</div>
                    </div>
                </div>
            );
        }

        return node.label;
    }

    return (
        <OrganizationChart value={data} nodeTemplate={nodeTemplate} selection={selection} selectionMode="multiple" onSelectionChange={event => setSelection(event.data)} className="company"></OrganizationChart>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Label of the treenode is displayed inside the node content by default and templating enables further customization.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <OrganizationChart value={data} nodeTemplate={nodeTemplate} selection={selection} selectionMode="multiple" onSelectionChange={(event) => setSelection(event.data)} className="company"></OrganizationChart>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
