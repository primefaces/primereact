import React from 'react';
import { render } from '@testing-library/react';
import { Message } from './Message';

describe('Message Component', () => {
    test('should display the Message', () => {
        const { container } = render(<Message />);
        const messageElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(messageElement).toBeInTheDocument();
        expect(messageElement).toHaveClass('p-inline-message p-component');
    })
})