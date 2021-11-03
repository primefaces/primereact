import React from 'react';
import { render } from '@testing-library/react';
import { Chip } from '../../components/chip/Chip';

describe('Chip Component', () => {
    test('should display the Chip' , () => {
        const { container } = render(<Chip />);
        const chipElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(chipElement).toBeInTheDocument();
        expect(chipElement).toHaveClass('p-chip p-component');
    })
})