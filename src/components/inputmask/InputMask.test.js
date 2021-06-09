import React from 'react';
import { render } from '@testing-library/react';
import { InputMask } from './InputMask'

describe('InputMask Component', () => {
    test('should display the InputMask' , () => {
        const { container } = render(<InputMask mask="99-999999" />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-inputtext p-component')
    })

    test('should display be disabled' , () => {
        const { container } = render(<InputMask mask="99-999999" disabled />);
        const inputElement = container.firstChild;

        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveAttribute('disabled')
        expect(inputElement).toHaveClass('p-disabled')

    })
})