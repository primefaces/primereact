import React from 'react';
import { render } from '@testing-library/react';
import { DataTable } from '../../components/datatable/DataTable';

describe('DataTable Component', () => {
    test('should display the DataTable' , () => {
        const { container } = render(<DataTable />);
        const tableElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(tableElement).toBeInTheDocument();
        expect(tableElement).toHaveClass('p-datatable p-component');
    })
})