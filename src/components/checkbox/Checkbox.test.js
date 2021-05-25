import React from 'react';
import { render } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox Component', () => {
    test('should display the Checkbox' , () => {
        const { container } = render(<Checkbox />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-checkbox p-component');
    })
})