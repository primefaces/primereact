import React from 'react';
import { render } from '@testing-library/react';
import { TreeSelect } from '../../components/treeselect/TreeSelect';

describe('TreeSelect Component', () => {
    test('should display the TreeSelect', () => {
        const { container } = render(<TreeSelect />);
        const toolbarElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(toolbarElement).toBeInTheDocument();
        expect(toolbarElement).toHaveClass('p-treeselect p-component p-inputwrapper');
    })
})