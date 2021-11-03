import React from 'react';
import { render } from '@testing-library/react';
import { Carousel } from '../../components/carousel/Carousel';

describe('Carousel Component', () => {
    test('should display the Carousel' , () => {
        const { container } = render(<Carousel />);
        const carouselElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(carouselElement).toBeInTheDocument();
        expect(carouselElement).toHaveClass('p-carousel p-component');
    })
})