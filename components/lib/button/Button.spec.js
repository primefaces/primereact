import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { snapshot } from '../../test';
import { PrimeReactProvider } from '../api/Api';
import { Button } from './Button';

describe('Button', () => {
    snapshot(
        <PrimeReactProvider>
            <Button label={'test'} visible={false} />
        </PrimeReactProvider>,
        'when visible is false Button return null'
    );
    snapshot(
        <PrimeReactProvider>
            <Button label={'test'} visible={true} />
        </PrimeReactProvider>,
        'when visible is true Button render correctly'
    );
    snapshot(
        <PrimeReactProvider>
            <Button label={'test'} iconPos={'bottom'} visible={true} />
        </PrimeReactProvider>,
        'when iconPos is bottom Button is vertical'
    );
    snapshot(
        <PrimeReactProvider>
            <Button visible={true} />
        </PrimeReactProvider>,
        'when label is empty it returns empty button'
    );
    snapshot(
        <PrimeReactProvider>
            <Button badge={'test'} />
        </PrimeReactProvider>,
        'when badge is true it renders Button with badge'
    );
    snapshot(
        <PrimeReactProvider>
            <Button />
        </PrimeReactProvider>,
        'when badge is null it renders Button without badge'
    );
    snapshot(
        <PrimeReactProvider>
            <Button loading={'test'} />
        </PrimeReactProvider>,
        'when click the button if loading is true it renders Button with loading icon'
    );
    snapshot(
        <PrimeReactProvider>
            <Button />
        </PrimeReactProvider>,
        'when click the button if loading is false it renders Button without loading icon'
    );
    snapshot(
        <PrimeReactProvider>
            <Button />
        </PrimeReactProvider>,
        'when label is true it renders Button with default aria label'
    );
    snapshot(
        <PrimeReactProvider>
            <Button label={'test'} />
        </PrimeReactProvider>,
        'when aria-label prop is not exist aria-label prop should be equal to label prop '
    );
    snapshot(
        <PrimeReactProvider>
            <Button aria-label={'test'} />
        </PrimeReactProvider>,
        'when label prop is not exist label prop should be equal to aria-label prop'
    );
    snapshot(
        <PrimeReactProvider>
            <Button label={'test'} badge={'lost'} />
        </PrimeReactProvider>,
        'when using badge and label the aria-label should contain both values'
    );
    snapshot(
        <PrimeReactProvider>
            <Button label={'test'} badge={'lost'} />
        </PrimeReactProvider>,
        'when using badge and label the aria-label should contain both values'
    );
    test('when using tooltip make sure the tooltip is rendered', async () => {
        // Arrange
        const { container } = render(
            <PrimeReactProvider>
                <Button label={'test'} tooltip="Jest Tooltip" />
            </PrimeReactProvider>
        );
        const button = container.getElementsByClassName('p-button')[0];
        const tooltipText = /Jest Tooltip/i;

        // tooltip does not exist to start
        expect(screen.queryByText(tooltipText)).toBeNull();

        // Act
        fireEvent.mouseEnter(button);

        // Assert
        await waitFor(() => screen.getByText(tooltipText));
        expect(screen.getByText(tooltipText)).toBeVisible();

        // tooltip disappears when we mouse out
        fireEvent.mouseLeave(button);
        expect(screen.queryByText(tooltipText)).toBeNull();
    });

    test('when button is clicked ensure onClick is fired', async () => {
        // Arrange
        const clickOn = jest.fn();
        const { container } = render(
            <PrimeReactProvider>
                <Button onClick={clickOn} />
            </PrimeReactProvider>
        );
        const button = container.getElementsByClassName('p-button')[0];

        // Act
        await userEvent.click(button);

        // Assert
        expect(button).toBeEnabled();
        expect(clickOn).toHaveBeenCalledTimes(1);
    });
    test('when button is disabled the click event should not fire', async () => {
        // Arrange
        const clickOn = jest.fn();
        const { container } = render(
            <PrimeReactProvider>
                <Button onClick={clickOn} disabled />
            </PrimeReactProvider>
        );
        const button = container.getElementsByClassName('p-button')[0];

        // Act
        //expect(() => userEvent.click(button)).toThrow();

        // Assert
        expect(button).toBeDisabled();
        expect(clickOn).not.toHaveBeenCalled();
    });
    test('when Ripple is enabled button should have ripple effect', async () => {
        // Arrange
        const clickOn = jest.fn();

        const { container } = render(
            <PrimeReactProvider ripple={true}>
                <Button onClick={clickOn} />
            </PrimeReactProvider>
        );
        const button = container.getElementsByClassName('p-button')[0];

        // Act
        await userEvent.click(button);

        // Assert
        expect(button).toBeEnabled();
        expect(clickOn).toHaveBeenCalledTimes(1);
        expect(container).toMatchSnapshot();
    });
});
