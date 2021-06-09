import React from 'react';
import { render } from '@testing-library/react';
import { DataScroller } from './DataScroller';

describe('DataScroller Component', () => {
    test('should display the DataScroller' , () => {
        const { container } = render(<DataScroller />);
        const scrollerElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(scrollerElement).toBeInTheDocument();
        expect(scrollerElement).toHaveClass('p-datascroller p-component');
    })
})