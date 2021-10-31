import React from 'react';
import { render } from '@testing-library/react';
import { SelectButton } from '../../components//selectbutton/SelectButton';

describe('SelectButton Component', () => {
    test('should display the SelectButton', () => {
        const { container } = render(<SelectButton />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-selectbutton p-component')
    })
})