import React from 'react';
import { render } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
    test('should display the Dropdown' , () => {
        const { container } = render(<Dropdown />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-dropdown p-component');
    })
})