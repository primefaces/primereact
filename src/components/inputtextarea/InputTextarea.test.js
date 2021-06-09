
import React from 'react';
import { render } from '@testing-library/react';
import { InputTextarea } from './InputTextarea'

describe('InputTextarea Component', () => {
    test('should display the InputTextarea' , () => {
        const { container } = render(<InputTextarea />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-inputtextarea p-component')
    })
})