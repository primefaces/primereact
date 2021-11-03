import React from 'react';
import { render } from '@testing-library/react';
import { Checkbox } from '../../components/checkbox/Checkbox';

describe('Checkbox Component', () => {
    test('should display the Checkbox' , () => {
        const { container } = render(<Checkbox />);
        const checkboxElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(checkboxElement).toBeInTheDocument();
        expect(checkboxElement).toHaveClass('p-checkbox p-component');
    })
})