import React from 'react';
import { render } from '@testing-library/react';
import { CascadeSelect } from './CascadeSelect'

describe('CascadeSelect Component', () => {
    test('should display the CascadeSelect' , () => {
        const { container } = render(<CascadeSelect />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-cascadeselect p-component');
    })
})