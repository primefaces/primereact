import React from 'react';
import { render } from '@testing-library/react';
import { Tree } from '../../components/tree/Tree';

describe('Tree Component', () => {
    test('should display the Tree', () => {
        const { container } = render(<Tree />);
        const treeElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(treeElement).toBeInTheDocument();
        expect(treeElement).toHaveClass('p-tree p-component');
    })
})