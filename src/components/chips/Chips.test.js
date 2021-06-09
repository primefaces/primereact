import React from 'react';
import { render } from '@testing-library/react';
import { Chips } from './Chips';

describe('Chips Component', () => {
    test('should display the Chips' , () => {
        const { container } = render(<Chips />);
        const chipsElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(chipsElement).toBeInTheDocument();
        expect(chipsElement).toHaveClass('p-chips p-component');
    })
})