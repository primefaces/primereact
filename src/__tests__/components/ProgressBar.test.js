import React from 'react';
import { render } from '@testing-library/react';
import { ProgressBar } from '../../components/progressbar/ProgressBar';

describe('ProgressBar Component', () => {
    test('should display the ProgressBar', () => {
        const { container } = render(<ProgressBar value={40} />);
        const progressBarElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(progressBarElement).toBeInTheDocument();
        expect(progressBarElement).toHaveClass('p-progressbar p-component')
    })
})