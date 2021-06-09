import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './Card'

describe('Card Component', () => {
    test('should display the Card' , () => {
        const { container } = render(<Card />);
        const cardElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(cardElement).toBeInTheDocument();
        expect(cardElement).toHaveClass('p-card p-component');
    })
})