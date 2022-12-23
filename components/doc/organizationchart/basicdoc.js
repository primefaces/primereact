import { OrganizationChart } from '../../lib/organizationchart/OrganizationChart';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const data = [
        {
            label: 'F.C Barcelona',
            expanded: true,
            children: [
                {
                    label: 'F.C Barcelona',
                    expanded: true,
                    children: [
                        {
                            label: 'Chelsea FC'
                        },
                        {
                            label: 'F.C. Barcelona'
                        }
                    ]
                },
                {
                    label: 'Real Madrid',
                    expanded: true,
                    children: [
                        {
                            label: 'Bayern Munich'
                        },
                        {
                            label: 'Real Madrid'
                        }
                    ]
                }
            ]
        }
    ];

    const code = {
        basic: `
<OrganizationChart value={data}></OrganizationChart>
        `,
        javascript: `
import { OrganizationChart } from 'primereact/organizationchart';
import './OrganizationChartDemo.css';

export default function BasicDoc() {
    const data = [{
        label: 'F.C Barcelona',
        expanded: true,
        children: [
            {
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'Chelsea FC'
                    },
                    {
                        label: 'F.C. Barcelona'
                    }
                ]
            },
            {
                label: 'Real Madrid',
                expanded: true,
                children: [
                    {
                        label: 'Bayern Munich'
                    },
                    {
                        label: 'Real Madrid'
                    }
                ]
            }
        ]
    }];

    return (
        <div className="card overflow-x-auto organizationchart-demo">
            <OrganizationChart value={data}></OrganizationChart>
        </div>
    )
}
        `,
        typescript: `
import { OrganizationChart } from 'primereact/organizationchart';
import './OrganizationChartDemo.css';

export default function BasicDoc() {
    const data = [{
        label: 'F.C Barcelona',
        expanded: true,
        children: [
            {
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'Chelsea FC'
                    },
                    {
                        label: 'F.C. Barcelona'
                    }
                ]
            },
            {
                label: 'Real Madrid',
                expanded: true,
                children: [
                    {
                        label: 'Bayern Munich'
                    },
                    {
                        label: 'Real Madrid'
                    }
                ]
            }
        ]
    }];

    return (
        <div className="card overflow-x-auto organizationchart-demo">
            <OrganizationChart value={data}></OrganizationChart>
        </div>
    )
}
        `,
        css: `
/* OrganizationChartDemo.css */

.organizationchart-demo .p-organizationchart .p-person {
    padding: 0;
    border: 0 none;
}

.organizationchart-demo .p-organizationchart .node-header, .organizationchart-demo .p-organizationchart .node-content {
    padding: .5em .7rem;
}

.organizationchart-demo .p-organizationchart .node-header {
    background-color: #495ebb;
    color: #ffffff;
}

.organizationchart-demo .p-organizationchart .node-content {
    text-align: center;
    border: 1px solid #495ebb;
}

.organizationchart-demo .p-organizationchart .node-content img {
    border-radius: 50%;
}

.organizationchart-demo .p-organizationchart .department-cfo {
    background-color: #7247bc;
    color: #ffffff;
}

.organizationchart-demo .p-organizationchart .department-coo {
    background-color: #a534b6;
    color: #ffffff;
}

.organizationchart-demo .p-organizationchart .department-cto {
    background-color: #e9286f;
    color: #ffffff;
}
    `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>OrganizationChart requires a model of TreeNode as its value.</p>
            </DocSectionText>
            <div className="card overflow-x-auto ">
                <OrganizationChart value={data}></OrganizationChart>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
