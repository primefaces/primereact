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
        <OrganizationChart value={data}></OrganizationChart>
    )
}
        `,
        typescript: `
import { OrganizationChart } from 'primereact/organizationchart';

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
        <OrganizationChart value={data}></OrganizationChart>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>OrganizationChart requires a model of TreeNode as its value.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <OrganizationChart value={data}></OrganizationChart>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
