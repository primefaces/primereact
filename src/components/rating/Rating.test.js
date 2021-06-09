import React from 'react';
import { render } from '@testing-library/react';
import { Rating } from './Rating'

describe('Rating Component', () => {
    test('should display the Rating', () => {
        const { container } = render(<Rating />);
        const ratingElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(ratingElement).toBeInTheDocument();
        expect(ratingElement).toHaveClass('p-rating')
    })
})