import React from 'react';
import { render } from '@testing-library/react';
import { Steps } from './Steps';

const items = [
    {label: 'Personal'},
    {label: 'Seat'},
    {label: 'Payment'},
    {label: 'Confirmation'}
];

describe('Steps Component', () => {
    test('should display the Steps', () => {
        const { container } = render(<Steps model={items} />);
        const stepsElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(stepsElement).toBeInTheDocument();
        expect(stepsElement).toHaveClass('p-steps p-component')
    })
})