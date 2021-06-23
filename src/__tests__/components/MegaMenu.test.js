import React from 'react';
import { render } from '@testing-library/react';
import { MegaMenu } from '../../components/megamenu/MegaMenu';

describe('MegaMenu Component', () => {
    test('should display the MegaMenu' , () => {
        const { container } = render(<MegaMenu />);
        const menuElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(menuElement).toBeInTheDocument();
        expect(menuElement).toHaveClass('p-megamenu p-component')
    })
})