import React from 'react';
import { render } from '@testing-library/react';
import { Paginator } from './paginator'

describe('paginator Component', () => {
    test('should display the Paginator', () => {
        const { container } = render(<Paginator />);
        const paginatorElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(paginatorElement).toBeInTheDocument();
        expect(paginatorElement).toHaveClass('p-paginator p-component')
    })
})