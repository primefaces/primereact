import React from 'react';
import { render } from '@testing-library/react';
import { BreadCrumb } from '../../components/breadcrumb/BreadCrumb';

describe('BreadCrumb Component', () => {
    test('should display the BreadCrumb' , () => {
        const { container } = render(<BreadCrumb />);
        const breadCrumbElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(breadCrumbElement).toBeInTheDocument();
        expect(breadCrumbElement).toHaveClass('p-breadcrumb p-component');
    })
})