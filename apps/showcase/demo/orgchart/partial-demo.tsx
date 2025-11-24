'use client';

import { OrgChart } from 'primereact/orgchart';

const data = [
    {
        key: '0',
        label: 'Founder',
        collapsible: true,
        selectable: false,
        children: [
            {
                key: '0-0',
                label: 'Product Lead',
                children: [
                    {
                        key: '0-0-0',
                        label: 'UX/UI Designer',
                        selectable: false
                    },
                    {
                        key: '0-0-1',
                        label: 'Product Manager'
                    }
                ]
            },
            {
                key: '0-1',
                label: 'Engineering Lead',
                selectable: false,
                collapsible: true,
                children: [
                    {
                        key: '0-1-0',
                        label: 'Frontend Developer'
                    },
                    {
                        key: '0-1-1',
                        label: 'Backend Developer'
                    }
                ]
            }
        ]
    }
];

function PartialDemo() {
    return (
        <div className="flex items-center justify-center">
            <OrgChart value={data} />
        </div>
    );
}

export default PartialDemo;
