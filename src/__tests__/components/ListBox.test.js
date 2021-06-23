import React from 'react';
import { render } from '@testing-library/react';
import { ListBox } from '../../components/listbox/ListBox';

describe('ListBox Component', () => {
    test('should display the ListBox' , () => {
        const { container } = render(<ListBox />);
        const listBoxElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(listBoxElement).toBeInTheDocument();
        expect(listBoxElement).toHaveClass('p-listbox p-component')
    })
})