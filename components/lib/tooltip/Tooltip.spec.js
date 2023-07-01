import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { PrimeReactProvider } from '../api/Api';
import { Button } from '../button/Button';
import { InputText } from '../inputtext/InputText';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
    test('when using tooltip with manual zindex should only be assigned from the style', async () => {
        // Arrange
        const tooltipText = /Manual zIndex/i;
        const { container } = render(
            <PrimeReactProvider>
                <InputText tooltip="Manual zIndex" tooltipOptions={{ autoZIndex: false, style: { zIndex: 6666 } }} />
            </PrimeReactProvider>
        );
        const input = container.getElementsByClassName('p-inputtext')[0];

        // Act
        fireEvent.mouseEnter(input);

        // Assert
        await waitFor(() => screen.getByText(tooltipText));
        const tooltip = screen.getByText(tooltipText);

        expect(tooltip).toBeVisible();
        expect(tooltip.parentElement).toHaveClass('p-tooltip p-component p-tooltip-active');
        expect(tooltip.parentElement).toHaveStyle({ 'z-index': '6666' });
    });
    test('when using tooltip with auto zindex the zindex should be automatically assigned', async () => {
        // Arrange
        const tooltipText = /Auto zIndex/i;
        const { container } = render(
            <PrimeReactProvider>
                <InputText tooltip="Auto zIndex" tooltipOptions={{ autoZIndex: true, baseZIndex: 500 }} />
            </PrimeReactProvider>
        );
        const input = container.getElementsByClassName('p-inputtext')[0];

        // Act
        fireEvent.mouseEnter(input);

        // Assert
        await waitFor(() => screen.getByText(tooltipText));
        const tooltip = screen.getByText(tooltipText);

        expect(tooltip).toBeVisible();
        expect(tooltip.parentElement).toHaveClass('p-tooltip p-component p-tooltip-active');
        expect(tooltip.parentElement).toHaveStyle({ 'z-index': '501' });
    });
    test('when using tooltip with defaults it is displayed on events mouse enter and leave', async () => {
        // Arrange
        const tooltipText = /Mouse Enter/i;
        const { container } = render(
            <PrimeReactProvider>
                <InputText tooltip="Mouse Enter" tooltipOptions={{ position: 'right', showDelay: 1 }} />
            </PrimeReactProvider>
        );
        const input = container.getElementsByClassName('p-inputtext')[0];

        expect(screen.queryByText(tooltipText)).toBeNull();

        // Act
        fireEvent.mouseEnter(input);

        // Assert
        await waitFor(() => screen.getByText(tooltipText));
        expect(screen.getByText(tooltipText)).toBeVisible();

        // tooltip disappears when we mouse out
        fireEvent.mouseLeave(input);
        expect(screen.queryByText(tooltipText)).toBeNull();
    });
    test('when using tooltip with event focus it is displayed on events focus and blur', async () => {
        // Arrange
        const tooltipText = /Focus Blur/i;
        const { container } = render(
            <PrimeReactProvider>
                <InputText tooltip="Focus Blur" tooltipOptions={{ event: 'focus' }} />
            </PrimeReactProvider>
        );
        const input = container.getElementsByClassName('p-inputtext')[0];

        expect(screen.queryByText(tooltipText)).toBeNull();

        // Act
        fireEvent.focus(input);

        // Assert
        await waitFor(() => screen.getByText(tooltipText));
        expect(screen.getByText(tooltipText)).toBeVisible();

        // tooltip disappears when we blur
        fireEvent.blur(input);
        expect(screen.queryByText(tooltipText)).toBeNull();
    });
    test('when using tooltip event both it is displayed on events focus, blur, mousenter, mouseleave', async () => {
        // Arrange
        const tooltipText = /Both/i;
        const { container } = render(
            <PrimeReactProvider>
                <InputText tooltip="Both" tooltipOptions={{ event: 'both' }} />
            </PrimeReactProvider>
        );
        const input = container.getElementsByClassName('p-inputtext')[0];

        // Act (focus)
        fireEvent.focus(input);

        // Assert (focus)
        await waitFor(() => screen.getByText(tooltipText));
        expect(screen.getByText(tooltipText)).toBeVisible();

        // Act (blur)
        fireEvent.blur(input);

        // Assert (blur)
        expect(screen.queryByText(tooltipText)).toBeNull();

        // Act (mouse enter)
        fireEvent.mouseEnter(input);

        // Assert (mouse enter)
        await waitFor(() => screen.getByText(tooltipText));
        expect(screen.getByText(tooltipText)).toBeVisible();

        // Act (mouse leave)
        fireEvent.mouseLeave(input);

        // Assert (mouse leave)
        expect(screen.queryByText(tooltipText)).toBeNull();
    });
    test('when using tooltip on disabled element it is not displayed', async () => {
        // Arrange
        const tooltipText = /Disabled/i;
        const { container } = render(
            <PrimeReactProvider>
                <InputText disabled tooltip="Disabled" />
            </PrimeReactProvider>
        );
        const input = container.getElementsByClassName('p-disabled')[0];

        expect(screen.queryByText(tooltipText)).toBeNull();

        // Act
        fireEvent.mouseEnter(input);

        // Assert
        expect(screen.queryByText(tooltipText)).toBeNull();
    });
    test('when using tooltip on disabled button and showOnDisabled it is displayed', async () => {
        // Arrange
        const tooltipText = /Disabled/i;
        const { container } = render(
            <>
                <PrimeReactProvider>
                    <Tooltip target=".disabled-button" />
                    <span className="disabled-button" data-pr-tooltip="A Disabled Button">
                        <Button type="button" label="Save" icon="pi pi-check" disabled />
                    </span>
                </PrimeReactProvider>
            </>
        );
        const input = container.getElementsByClassName('disabled-button')[0];

        expect(screen.queryByText(tooltipText)).toBeNull();

        // Act
        fireEvent.mouseEnter(input);

        // Assert
        await waitFor(() => screen.getByText(tooltipText));
        expect(screen.getByText(tooltipText)).toBeVisible();
    });
    test('when using tooltip with with position right it is displayed on the right', async () => {
        // Arrange
        const tooltipText = /right/i;
        const { container } = render(
            <PrimeReactProvider>
                <InputText tooltip="right" tooltipOptions={{ position: 'right' }} />
            </PrimeReactProvider>
        );
        const input = container.getElementsByClassName('p-inputtext')[0];

        // Act
        fireEvent.mouseEnter(input);

        // Assert
        await waitFor(() => screen.getByText(tooltipText));
        const tooltip = screen.getByText(tooltipText);

        expect(tooltip).toBeVisible();
        expect(tooltip).toHaveClass('p-tooltip-text');
        expect(tooltip.parentElement).toHaveClass('p-tooltip p-component p-tooltip-right p-tooltip-active');
    });
    test('when using tooltip with with position left it is displayed on the left', async () => {
        // Arrange
        const tooltipText = /left/i;
        const { container } = render(
            <PrimeReactProvider>
                <InputText tooltip="left" tooltipOptions={{ position: 'left' }} />
            </PrimeReactProvider>
        );
        const input = container.getElementsByClassName('p-inputtext')[0];

        // Act
        fireEvent.mouseEnter(input);

        // Assert
        await waitFor(() => screen.getByText(tooltipText));
        const tooltip = screen.getByText(tooltipText);

        expect(tooltip).toBeVisible();
        expect(tooltip).toHaveClass('p-tooltip-text');
        expect(tooltip.parentElement).toHaveClass('p-tooltip p-component p-tooltip-left p-tooltip-active');
    });
    test('when using tooltip with with position top it is displayed on the top', async () => {
        // Arrange
        const tooltipText = /top/i;
        const { container } = render(
            <PrimeReactProvider>
                <InputText tooltip="top" tooltipOptions={{ position: 'top' }} />
            </PrimeReactProvider>
        );
        const input = container.getElementsByClassName('p-inputtext')[0];

        // Act
        fireEvent.mouseEnter(input);

        // Assert
        await waitFor(() => screen.getByText(tooltipText));
        const tooltip = screen.getByText(tooltipText);

        expect(tooltip).toBeVisible();
        expect(tooltip).toHaveClass('p-tooltip-text');
        expect(tooltip.parentElement).toHaveClass('p-tooltip p-component p-tooltip-top p-tooltip-active');
    });
    test('when using tooltip with with position bottom it is displayed on the bottom', async () => {
        // Arrange
        const tooltipText = /bottom/i;
        const { container } = render(
            <PrimeReactProvider>
                <InputText tooltip="bottom" tooltipOptions={{ position: 'bottom' }} />
            </PrimeReactProvider>
        );
        const input = container.getElementsByClassName('p-inputtext')[0];

        // Act
        fireEvent.mouseEnter(input);

        // Assert
        await waitFor(() => screen.getByText(tooltipText));
        const tooltip = screen.getByText(tooltipText);

        expect(tooltip).toBeVisible();
        expect(tooltip).toHaveClass('p-tooltip-text');
        expect(tooltip.parentElement).toHaveClass('p-tooltip p-component p-tooltip-bottom p-tooltip-active');
    });
    test('when tooltip is shown and hidden ensure callback events are fired', async () => {
        // Arrange
        const showBeforeOn = jest.fn();
        const showOn = jest.fn();
        const hideBeforeOn = jest.fn();
        const hideOn = jest.fn();
        const tooltipText = /Events Button/i;
        const { container } = render(
            <PrimeReactProvider>
                <Tooltip target=".events-button" onBeforeHide={hideBeforeOn} onBeforeShow={showBeforeOn} onShow={showOn} onHide={hideOn} />
                <span className="events-button" data-pr-tooltip="Events Button">
                    <Button type="button" label="Events" />
                </span>
            </PrimeReactProvider>
        );
        const input = container.getElementsByClassName('events-button')[0];

        // Act (show)
        fireEvent.mouseEnter(input);

        // Assert (show)
        await waitFor(() => screen.getByText(tooltipText));
        const tooltip = screen.getByText(tooltipText);

        expect(tooltip).toBeVisible();
        expect(showBeforeOn).toHaveBeenCalledTimes(1);
        expect(showOn).toHaveBeenCalledTimes(1);
        expect(hideBeforeOn).toHaveBeenCalledTimes(0);
        expect(hideOn).toHaveBeenCalledTimes(0);

        // Act (hide)
        showBeforeOn.mockReset();
        showOn.mockReset();
        fireEvent.mouseLeave(input);

        // Assert (show)
        expect(showBeforeOn).toHaveBeenCalledTimes(0);
        expect(showOn).toHaveBeenCalledTimes(0);
        expect(hideBeforeOn).toHaveBeenCalledTimes(1);
        expect(hideOn).toHaveBeenCalledTimes(1);
    });
    test('when tooltip onBeforeShow returns false prevent showing the tooltip', () => {
        // Arrange
        const showBeforeOn = jest.fn(() => {
            return false;
        });
        const showOn = jest.fn();
        const tooltipText = /Show/i;
        const { container } = render(
            <PrimeReactProvider>
                <Tooltip target=".events-button" onBeforeShow={showBeforeOn} onShow={showOn} />
                <span className="events-button" data-pr-tooltip="Show">
                    <Button type="button" label="Events" />
                </span>
            </PrimeReactProvider>
        );
        const input = container.getElementsByClassName('events-button')[0];

        // Act (show)
        fireEvent.mouseEnter(input);

        // Assert (show)
        expect(screen.queryByText(tooltipText)).toBeNull();
        expect(showBeforeOn).toHaveBeenCalledTimes(1);
        expect(showOn).toHaveBeenCalledTimes(0);
    });
    test('when tooltip onBeforeHide returns false prevent hiding the tooltip', () => {
        // Arrange
        const hideBeforeOn = jest.fn(() => {
            return false;
        });
        const hideOn = jest.fn();
        const tooltipText = /Hide/i;
        const { container } = render(
            <PrimeReactProvider>
                <Tooltip target=".events-button" onBeforeHide={hideBeforeOn} onHide={hideOn} />
                <span className="events-button" data-pr-tooltip="Hide">
                    <Button type="button" label="Events" />
                </span>
            </PrimeReactProvider>
        );
        const input = container.getElementsByClassName('events-button')[0];

        // Act (hide)
        fireEvent.mouseEnter(input);
        fireEvent.mouseLeave(input);

        // Assert (hide)
        expect(screen.queryByText(tooltipText)).toBeVisible();
        expect(hideBeforeOn).toHaveBeenCalledTimes(1);
        expect(hideOn).toHaveBeenCalledTimes(0);
    });
});
