import React from 'react';
import { render } from '@testing-library/react';
import { Badge } from '../../components/badge/Badge';

describe('Badge Component', () => {
    test('should display the Badge' , () => {
        const { container } = render(<Badge />);
        const badgeElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(badgeElement).toBeInTheDocument();
        expect(badgeElement).toHaveClass('p-badge p-component');
    })
})