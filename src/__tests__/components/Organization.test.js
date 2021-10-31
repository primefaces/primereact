import React from 'react';
import { render } from '@testing-library/react';
import { OrganizationChart } from '../../components/organizationchart/OrganizationChart';

export const OrgChartTestComponent = () => {

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

describe('OrganizationChart Component', () => {
    test('should display the OrganizationChart', () => {
        const { container } = render(<OrgChartTestComponent />);
        const orgChartElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(orgChartElement).toBeInTheDocument();
        expect(orgChartElement).toHaveClass('p-organizationchart p-component')
    })
})