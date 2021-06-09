import React from 'react';
import { render } from '@testing-library/react';
import { InputNumber } from './InputNumber'

describe('InputNumber Component', () => {
    test('should display the InputNumber' , () => {
        const { container } = render(<InputNumber />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-inputnumber p-component')
    })
})