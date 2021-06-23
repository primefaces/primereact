import React from 'react';
import { render } from '@testing-library/react';
import { Slider } from '../../components/slider/Slider';

describe('Slider Component', () => {
    test('should display the Slider', () => {
        const { container } = render(<Slider value={50} />);
        const sliderElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(sliderElement).toBeInTheDocument();
        expect(sliderElement).toHaveClass('p-slider p-component');
    })
})