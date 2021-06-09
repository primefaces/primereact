import React from 'react';
import { render } from '@testing-library/react';
import { Inplace } from './Inplace'

describe('Inplace Component', () => {
    test('should display the Inplace', () => {
        const { container } = render(<Inplace />);
        const inplaceElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inplaceElement).toBeInTheDocument();
        expect(inplaceElement).toHaveClass('p-inplace p-component')
    })
})