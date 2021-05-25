import React from 'react';
import { render } from '@testing-library/react';
import { Carousel } from './Carousel'

describe('Carousel Component', () => {
    test('should display the Carousel' , () => {
        const { container } = render(<Carousel />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-carousel p-component');
    })
})