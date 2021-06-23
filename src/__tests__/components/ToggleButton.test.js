import React from 'react';
import { render } from '@testing-library/react';
import { ToggleButton } from '../../components/togglebutton/ToggleButton';

describe('Toggle Component', () => {
    test('should display the Toggle', () => {
        const { container } = render(<ToggleButton />);
        const toggleElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(toggleElement).toBeInTheDocument();
        expect(toggleElement).toHaveClass('p-button p-togglebutton p-component');
    })
})