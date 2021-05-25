import React from 'react';
import { render } from '@testing-library/react';
import { Chip } from './Chip';

describe('Chip Component', () => {
    test('should display the Chip' , () => {
        const { container } = render(<Chip />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-chip p-component');
    })
})