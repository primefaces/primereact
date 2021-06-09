import React from 'react';
import { render } from '@testing-library/react';
import { RadioButton } from './RadioButton'

describe('RadioButton Component', () => {
    test('should display the RadioButton', () => {
        const { container } = render(<RadioButton />);
        const radioElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(radioElement).toBeInTheDocument();
        expect(radioElement).toHaveClass('p-radiobutton p-component')
    })
})