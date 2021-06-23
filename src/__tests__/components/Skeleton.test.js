import React from 'react';
import { render } from '@testing-library/react';
import { Skeleton } from '../../components/skeleton/Skeleton';

describe('Skeleton Component', () => {
    test('should display the Skeleton', () => {
        const { container } = render(<Skeleton />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-skeleton p-component')
    })
})