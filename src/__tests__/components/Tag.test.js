import React from 'react';
import { render } from '@testing-library/react';
import { Tag } from '../../components/tag/Tag';

describe('Tag Component', () => {
    test('should display the Tag', () => {
        const { container } = render(<Tag value="New"></Tag>);
        const tagElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(tagElement).toBeInTheDocument();
        expect(tagElement).toHaveClass('p-tag p-component');
    })
})