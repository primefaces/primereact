import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './Card'

describe('Card Component', () => {
    test('should display the Card' , () => {
        const { container } = render(<Card />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-card p-component');
    })
})