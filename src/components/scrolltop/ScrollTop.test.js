import React from 'react';
import { render } from '@testing-library/react';
import { ScrollTop } from './ScrollTop'

describe('ScrollTop Component', () => {
    test('should display the ScrollTop', () => {
        const { container } = render(<ScrollTop />);
        const scrollElement = container.firstChild;
    })
})