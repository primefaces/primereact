import React from 'react';
import { render } from '@testing-library/react';
import { Fieldset } from './Fieldset';

describe('Fieldset Component', () => {
    test('should display the Fieldset' , () => {
        const { container } = render(<Fieldset />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-fieldset p-component');
    })
})