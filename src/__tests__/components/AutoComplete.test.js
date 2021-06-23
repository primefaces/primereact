import React from 'react';
import { render } from '@testing-library/react';
import { AutoComplete } from '../../components/autocomplete/AutoComplete';

describe('AutoComplete Component', () => {
    test('should display the AutoComplete' , () => {
        const { container } = render(<AutoComplete />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-autocomplete p-component');
    })
})