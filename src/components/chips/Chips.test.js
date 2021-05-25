import React from 'react';
import { render } from '@testing-library/react';
import { Chips } from './Chips';

describe('Chips Component', () => {
    test('should display the Chips' , () => {
        const { container } = render(<Chips />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-chips p-component');
    })
})