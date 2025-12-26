'use client';

import { OrgChart } from 'primereact/orgchart';

const data = [
    {
        key: '0',
        label: 'Founder',
        children: [
            {
                key: '0-0',
                label: 'Product Lead',
                collapsedByDefault: true,
                children: [
                    {
                        key: '0-0-0',
                        label: 'UX/UI Designer'
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
                children: [
                    {
                        key: '0-1-0',
                        label: 'Frontend Developer',
                        selectedByDefault: true
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

function DefaultDemo() {
    return (
        <div className="flex items-center justify-center">
            <OrgChart.Root value={data} collapsible />
        </div>
    );
}

export default DefaultDemo;
