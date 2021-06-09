import React from 'react';
import { render } from '@testing-library/react';
import { ColorPicker } from './ColorPicker';

describe('ColorPicker Component', () => {
    test('should display the ColorPicker' , () => {
        const { container } = render(<ColorPicker />);
        const colorPickerElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(colorPickerElement).toBeInTheDocument();
        expect(colorPickerElement).toHaveClass('p-colorpicker p-component p-colorpicker-overlay');
    })
})