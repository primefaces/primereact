import React from 'react';
import { render } from '@testing-library/react';
import { Password } from '../../components/password/Password';

describe('Password Component', () => {
    test('should display the Password', () => {
        const { container } = render(<Password />);
        const passwordElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(passwordElement).toBeInTheDocument();
        expect(passwordElement).toHaveClass('p-password p-component')
    })
})