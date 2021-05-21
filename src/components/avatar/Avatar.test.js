import React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar Component', () => {
    test('should display the Avatar', () => {
        const { container } = render(<Avatar />);
        const avatarElement = container.firstChild;

        expect(avatarElement).toBeInTheDocument()
        expect(avatarElement).toHaveClass('p-avatar p-component')
    })

    test('should have label and size', () => {
        const { container } = render(<Avatar label="A" size="large" />)
        const avatarElement = container.firstChild;
        const textElement = container.querySelector('.p-avatar-text');

        expect(avatarElement).toBeInTheDocument()
        expect(textElement).toBeInTheDocument()
        expect(avatarElement).toHaveClass('p-avatar-lg')
        expect(textElement.textContent).toContain('A')
    })

    test('should have icon', () => {
        const { container } = render(<Avatar icon="pi pi-search" />)
        const iconElement = container.querySelector('.p-avatar-icon')

        expect(iconElement).toBeInTheDocument()
        expect(iconElement).toHaveClass('pi pi-search')

    })

    test('should have image', () => {
        const { container } = render(<Avatar image="user.png" />)
        const imageContainer = container.querySelector('.p-avatar-image')
        const imageElement = imageContainer.firstChild;

        expect(imageElement).toBeInTheDocument()
        expect(imageElement).toHaveAttribute('src', 'user.png')

    })
})