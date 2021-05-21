import React from 'react';
import { render } from '@testing-library/react';
import { InputText } from './InputText'

describe('InputText Component', () => {
    test('should display the InputText' , () => {
        const { container } = render(<InputText />);
        const inputElement = container.firstChild;


        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-inputtext p-component')
    })

    test('should display be disabled' , () => {
        const { container } = render(<InputText disabled />);
        const inputElement = container.firstChild;

        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveAttribute('disabled')
        expect(inputElement).toHaveClass('p-disabled')

    })


    test('should have placeholder' , () => {
        const { container } = render(<InputText placeholder="Lorem Ipsum" />);
        const inputElement = container.firstChild;

        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('placeholder');

    })
})