import React from 'react';
import { render } from '@testing-library/react';
import { PanelMenu } from './PanelMenu'

describe('PanelMenu Component', () => {
    test('should display the PanelMenu', () => {
        const { container } = render(<PanelMenu />);
        const menuElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(menuElement).toBeInTheDocument();
        expect(menuElement).toHaveClass('p-panelmenu p-component')
    })
})