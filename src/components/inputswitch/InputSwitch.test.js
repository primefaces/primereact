import React from 'react';
import { render } from '@testing-library/react';
import { InputSwitch } from './InputSwitch'

describe('InputSwitch Component', () => {
    test('should display the InputSwitch' , () => {
        const { container } = render(<InputSwitch />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-inputswitch p-component')
    })
})