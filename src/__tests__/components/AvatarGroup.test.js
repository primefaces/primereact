import React from 'react';
import { render } from '@testing-library/react';
import { AvatarGroup } from '../../components/avatargroup/AvatarGroup';

describe('AvatarGroup Component', () => {
    test('should display the AvatarGroup' , () => {
        const { container } = render(<AvatarGroup />);
        const groupElement = container.firstChild;

        expect(container).toBeInTheDocument();
        expect(groupElement).toBeInTheDocument();
        expect(groupElement).toHaveClass('p-avatar-group p-component');
    })
})