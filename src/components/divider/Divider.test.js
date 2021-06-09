import React from 'react';
import { render } from '@testing-library/react';
import { Divider } from './Divider';

describe('Divider Component', () => {
    test('should display the Divider' , () => {
        const { container } = render(<Divider />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-divider p-component');
    })
})