import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('when visible is false Button return null', () => {
        // Arrange
        const { container } = render(<Button label={'test'} visible={false} />);

        // Act + Assert
        expect(container).toMatchSnapshot();
    });

    test('when visible is true Button render correctly', () => {
        // Arrange
        const { container } = render(<Button label={'test'} visible={true} />);

        // Act + Assert
        expect(container).toMatchSnapshot();
    });

    test('when iconPos is bottom Button is vertical', () => {
        // Arrange
        const { container } = render(<Button label={'test'} iconPos={'bottom'} visible={true} />);

        // Act + Assert
        expect(container).toMatchSnapshot();
    });

    test('when label is empty it returns empty button', async () => {
        // Arrange
        const { container } = render(<Button visible={true} />);

        // Act + Assert
        expect(container).toMatchSnapshot();
    });

    test('when badge is true it renders Button with badge', () => {
        // Arrange
        const { container } = render(<Button badge={'test'} />);

        // Act + Assert
        expect(container).toMatchSnapshot();
    });

    test('when badge is null it renders Button without badge', () => {
        // Arrange
        const { container } = render(<Button />);

        // Act + Assert
        expect(container).toMatchSnapshot();
    });

    test('when click the button if loading is true it renders Button with loading icon', () => {
        // Arrange
        const { container } = render(<Button loading={'test'} />);

        // Act + Assert
        expect(container).toMatchSnapshot();
    });

    test('when click the button if loading is false it renders Button without loading icon', () => {
        // Arrange
        const { container } = render(<Button />);

        // Act + Assert
        expect(container).toMatchSnapshot();
    });

    test('when label is true it renders Button with default aria label', () => {
        // Arrange
        const { container } = render(<Button />);

        // Act + Assert
        expect(container).toMatchSnapshot();
    });

    test('when aria-label prop is not exist aria-label prop should be equal to label prop ', () => {
        // Arrange
        const { container } = render(<Button label={'test'} />);

        // Act + Assert
        expect(container).toMatchSnapshot();
    });

    test('when label prop is not exist label prop should be equal to aria-label prop', () => {
        // Arrange
        const { container } = render(<Button aria-label={'test'} />);

        // Act + Assert
        expect(container).toMatchSnapshot();
    });

    test('when using badge and label the aria-label should contain both values', () => {
        // Arrange
        const { container } = render(<Button label={'test'} badge={'lost'} />);

        // Act + Assert
        expect(container).toMatchSnapshot();
    });

    test('when using tooltip make sure the tooltip is rendered', async () => {
        // Arrange
        const { container } = render(<Button label={'test'} tooltip="Jest Tooltip" />);
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

    test('when button is clicked ensure onClick is fired', () => {
        // Arrange
        const clickOn = jest.fn();
        const { container } = render(<Button onClick={clickOn} />);
        const button = container.getElementsByClassName('p-button')[0];

        // Act
        fireEvent.click(button);

        // Assert
        expect(button).toBeEnabled();
        expect(clickOn).toHaveBeenCalledTimes(1);
    });

    test('when button is disabled the click event should not fire', () => {
        // Arrange
        const clickOn = jest.fn();
        const { container } = render(<Button onClick={clickOn} disabled />);
        const button = container.getElementsByClassName('p-button')[0];

        // Act
        fireEvent.click(button);

        // Assert
        expect(button).toBeDisabled();
        expect(clickOn).toHaveBeenCalledTimes(0);
    });
});
