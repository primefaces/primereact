import React from 'react';
import { render } from '@testing-library/react';
import { AvatarGroup } from './AvatarGroup';

describe('AvatarGroup Component', () => {
    test('should display the AvatarGroup' , () => {
        const { container } = render(<AvatarGroup />);
        const inputElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveClass('p-avatar-group p-component');
    })
})