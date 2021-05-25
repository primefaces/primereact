import React from 'react';
import { render } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge Component', () => {
    test('should display the Badge' , () => {
        const { container } = render(<Badge />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-badge p-component');
    })
})