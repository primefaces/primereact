import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { userAgent } from '../../test';
import PrimeReact from '../api/PrimeReact';
import { Button } from '../button/Button';

describe('Ripple', () => {
    test('when Ripple is enabled, button should have ripple effect on desktop device', async () => {
        // Arrange
        userAgent('Chrome');
        PrimeReact.ripple = true;
        const { container } = render(<Button />);
        const button = container.getElementsByClassName('p-button')[0];

        // Act
        await userEvent.click(button);

        // Assert
        expect(button).toBeEnabled();
        expect(container).toMatchSnapshot();
    });

    test('when Ripple is enabled, button should have ripple effect on touch device', async () => {
        // Arrange
        userAgent('iPhone');
        PrimeReact.ripple = true;
        const { container } = render(<Button />);
        const button = container.getElementsByClassName('p-button')[0];

        // Act
        fireEvent.touchStart(button, { targetTouches: [{ pageX: '50', pageY: '50' }] });

        // Assert
        expect(button).toBeEnabled();
        expect(container).toMatchSnapshot();
    });
});
