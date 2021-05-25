import React from 'react';
import { render } from '@testing-library/react';
import { ColorPicker } from './ColorPicker';

describe('ColorPicker Component', () => {
    test('should display the ColorPicker' , () => {
        const { container } = render(<ColorPicker />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-colorpicker p-component p-colorpicker-overlay');
    })
})