import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { userAgent } from '../../test';
import { PrimeReactProvider } from '../api/Api';
import { Button } from '../button/Button';

describe('Ripple', () => {
    test('when Ripple is enabled, button should have ripple effect on desktop device', async () => {
        // Arrange
        userAgent('Chrome');
        const { container } = render(
            <PrimeReactProvider ripple={true}>
                <Button />
            </PrimeReactProvider>
        );
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
        const { container } = render(
            <PrimeReactProvider ripple={true}>
                <Button />
            </PrimeReactProvider>
        );
        const button = container.getElementsByClassName('p-button')[0];

        // Act
        fireEvent.touchStart(button, { targetTouches: [{ pageX: '50', pageY: '50' }] });

        // Assert
        expect(button).toBeEnabled();
        expect(container).toMatchSnapshot();
    });
});
