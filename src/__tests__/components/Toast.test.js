import React from 'react';
import { render } from '@testing-library/react';
import { Toast } from '../../components/toast/Toast';

describe('Toast Component', () => {
    test('should display the Toast', () => {
        const { container } = render(<Toast />);
        const toastElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(toastElement).toBeInTheDocument();
        expect(toastElement).toHaveClass('p-toast p-component');
    })
})