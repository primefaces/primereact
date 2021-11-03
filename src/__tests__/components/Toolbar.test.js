import React from 'react';
import { render } from '@testing-library/react';
import { Toolbar } from '../../components/toolbar/Toolbar';

describe('Toolbar Component', () => {
    test('should display the Toolbar', () => {
        const { container } = render(<Toolbar />);
        const toolbarElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(toolbarElement).toBeInTheDocument();
        expect(toolbarElement).toHaveClass('p-toolbar p-component');
    })
})