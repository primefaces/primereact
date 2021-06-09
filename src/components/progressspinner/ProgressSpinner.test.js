import React from 'react';
import { render } from '@testing-library/react';
import { ProgressSpinner } from './ProgressSpinner'

describe('ProgressSpinner Component', () => {
    test('should display the ProgressSpinner', () => {
        const { container } = render(<ProgressSpinner />);
        const spinnerElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(spinnerElement).toBeInTheDocument();
        expect(spinnerElement).toHaveClass('p-progress-spinner')
    })
})