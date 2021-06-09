import React from 'react';
import { render } from '@testing-library/react';
import { ScrollPanel } from './ScrollPanel'

describe('ScrollPanel Component', () => {
    test('should display the ScrollPanel', () => {
        const { container } = render(<ScrollPanel />);
        const panelElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(panelElement).toBeInTheDocument();
        expect(panelElement).toHaveClass('p-scrollpanel p-component')
    })
})