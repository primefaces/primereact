import React from 'react';
import { render } from '@testing-library/react';
import { BreadCrumb } from './BreadCrumb';

describe('BreadCrumb Component', () => {
    test('should display the BreadCrumb' , () => {
        const { container } = render(<BreadCrumb />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-breadcrumb p-component');
    })
})