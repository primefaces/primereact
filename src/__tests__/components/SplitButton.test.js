import React from 'react';
import { render } from '@testing-library/react';
import { SplitButton } from '../../components/splitbutton/SplitButton';

describe('SplitButton Component', () => {
    test('should display the SplitButton', () => {
        const { container } = render(<SplitButton />);
        const buttonElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('p-splitbutton p-component')
    })
})