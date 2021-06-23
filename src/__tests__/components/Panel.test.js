import React from 'react';
import { render } from '@testing-library/react';
import { Panel } from '../../components/panel/Panel';

describe('Panel Component', () => {
    test('should display the Panel', () => {
        const { container } = render(<Panel />);
        const panelElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(panelElement).toBeInTheDocument();
        expect(panelElement).toHaveClass('p-panel p-component')
    })
})