import React from 'react';
import { render } from '@testing-library/react';
import { Knob } from './Knob'

describe('Knob Component', () => {
    test('should display the Knob' , () => {
        const { container } = render(<Knob value={7} />);
        const knobElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(knobElement).toBeInTheDocument();
        expect(knobElement).toHaveClass('p-knob p-component')
    })
})