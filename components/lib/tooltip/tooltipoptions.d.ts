/**
 *
 * This module contains the common options and events of Tooltip.
 *
 * @module tooltipoptions
 *
 */
import * as React from 'react';

/**
 * Custom tooltip event
 * @event
 */
interface TooltipEvent {
    /**
     * Browser event
     */
    originalEvent: React.SyntheticEvent;
    /**
     * Target element.
     * @defaultValue current target
     */
    target: HTMLElement;
}

/**
 * Defines valid properties in TooltipOptions.
 * @group Properties
 */
export default interface TooltipOptions {
    /**
     * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.
     * @defaultValue document.body
     */
    appendTo?: 'self' | HTMLElement | null | undefined;
    /**
     * Defines which position on the target element to align the positioned tooltip.
     */
    at?: string | undefined;
    /**
     * Whether to hide tooltip when hovering over tooltip content.
     * @defaultValue true
     */
    autoHide?: boolean | undefined;
    /**
     * Whether to automatically manage layering.
     * @defaultValue true
     */
    autoZIndex?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * @defaultValue 0
     */
    baseZIndex?: number | undefined;
    /**
     * Style class of the tooltip.
     */
    className?: string | undefined;
    /**
     * When present, it specifies that the tooltip should be hidden.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * Event to show the tooltip.
     * @defaultValue hover
     */
    event?: 'hover' | 'focus' | 'both' | undefined;
    /**
     * Delay to hide the tooltip in milliseconds.
     * @defaultValue 0
     */
    hideDelay?: number | undefined;
    /**
     * Event to hide the tooltip if the event property is empty.
     * @defaultValue mouseleave
     */
    hideEvent?: string | undefined;
    /**
     * Whether the tooltip will follow the mouse.
     * @defaultValue false
     */
    mouseTrack?: boolean | undefined;
    /**
     * Defines left position of the tooltip in relation to the mouse when the mouseTrack is enabled.
     * @defaultValue 5
     */
    mouseTrackLeft?: number | undefined;
    /**
     * Defines top position of the tooltip in relation to the mouse when the mouseTrack is enabled.
     * @defaultValue 5
     */
    mouseTrackTop?: number | undefined;
    /**
     * Defines which position on the tooltip being positioned to align with the target element.
     */
    my?: string | undefined;
    /**
     * Position of the tooltip.
     * @defaultValue right
     */
    position?: 'top' | 'bottom' | 'left' | 'right' | 'mouse' | undefined;
    /**
     * Delay to show the tooltip in milliseconds.
     * @defaultValue 0
     */
    showDelay?: number | undefined;
    /**
     * Event to show the tooltip if the event property is empty.
     * @defaultValue mouseenter
     */
    showEvent?: string | undefined;
    /**
     * Whether to show tooltip for disabled elements.
     * @defaultValue false
     */
    showOnDisabled?: boolean | undefined;
    /**
     * Style of the tooltip.
     */
    style?: React.CSSProperties | undefined;
    /**
     * Delay to update the tooltip in milliseconds.
     * @defaultValue 0
     */
    updateDelay?: number | undefined;
    /**
     * Callback to invoke before the tooltip is shown.
     * @param {TooltipEvent} event - Browser event
     */
    onBeforeShow?(event: TooltipEvent): void;
    /**
     * Callback to invoke before the tooltip is hidden.
     * @param {TooltipEvent} event - Browser event
     */
    onBeforeHide?(event: TooltipEvent): void;
    /**
     * Callback to invoke when the tooltip is shown.
     * @param {TooltipEvent} event - Browser event
     */
    onShow?(event: TooltipEvent): void;
    /**
     * Callback to invoke when the tooltip is hidden.
     * @param {TooltipEvent} event - Browser event
     */
    onHide?(event: TooltipEvent): void;
}

declare module 'react' {
    /**
     * In addition to HTMLAttributes, the following attributes can be used with Tooltip component.
     */
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        /**
         * Content of the tooltip.
         * _Note: this feature will be active when there is a PrimeReact {@link tooltip} component on the page._
         *
         * ![PrimeReact](https://www.primefaces.org/primereact/images/logo-100.png)
         */
        'data-pr-tooltip'?: string | undefined;
        /**
         * When present, it specifies that the tooltip should be hidden.
         * _Note: this feature will be active when there is a PrimeReact {@link tooltip} component on the page._
         *
         * ![PrimeReact](https://www.primefaces.org/primereact/images/logo-100.png)
         */
        'data-pr-disabled'?: boolean | undefined;
        /**
         * Style class of the tooltip.
         * _Note: this feature will be active when there is a PrimeReact {@link tooltip} component on the page._
         *
         * ![PrimeReact](https://www.primefaces.org/primereact/images/logo-100.png)
         */
        'data-pr-classname'?: string | undefined;
        /**
         * Position of the tooltip.
         * @defaultValue right
         * _Note: this feature will be active when there is a PrimeReact {@link tooltip} component on the page._
         *
         * ![PrimeReact](https://www.primefaces.org/primereact/images/logo-100.png)
         */
        'data-pr-position'?: 'top' | 'bottom' | 'left' | 'right' | 'mouse' | undefined;
        /**
         * Defines which position on the tooltip being positioned to align with the target element.
         * _Note: this feature will be active when there is a PrimeReact {@link tooltip} component on the page._
         *
         * ![PrimeReact](https://www.primefaces.org/primereact/images/logo-100.png)
         */
        'data-pr-my'?: string | undefined;
        /**
         * Defines which position on the target element to align the positioned tooltip.
         * _Note: this feature will be active when there is a PrimeReact {@link tooltip} component on the page._
         *
         * ![PrimeReact](https://www.primefaces.org/primereact/images/logo-100.png)
         */
        'data-pr-at'?: string | undefined;
        /**
         * Event to show the tooltip.
         * @defaultValue hover
         * _Note: this feature will be active when there is a PrimeReact {@link tooltip} component on the page._
         *
         * ![PrimeReact](https://www.primefaces.org/primereact/images/logo-100.png)
         */
        'data-pr-event'?: 'hover' | 'focus' | 'both' | undefined;
        /**
         * Event to show the tooltip if the event property is empty.
         * @defaultValue mouseenter
         * _Note: this feature will be active when there is a PrimeReact {@link tooltip} component on the page._
         *
         * ![PrimeReact](https://www.primefaces.org/primereact/images/logo-100.png)
         */
        'data-pr-showevent'?: string | undefined;
        /**
         * Event to hide the tooltip if the event property is empty.
         * @defaultValue mouseleave
         * _Note: this feature will be active when there is a PrimeReact {@link tooltip} component on the page._
         *
         * ![PrimeReact](https://www.primefaces.org/primereact/images/logo-100.png)
         */
        'data-pr-hideevent'?: string | undefined;
        /**
         * Whether the tooltip will follow the mouse.
         * @defaultValue false
         * _Note: this feature will be active when there is a PrimeReact {@link tooltip} component on the page._
         *
         * ![PrimeReact](https://www.primefaces.org/primereact/images/logo-100.png)
         */
        'data-pr-mousetrack'?: boolean | undefined;
        /**
         * Defines top position of the tooltip in relation to the mouse when the mouseTrack is enabled.
         * @defaultValue 5
         * _Note: this feature will be active when there is a PrimeReact {@link tooltip} component on the page._
         *
         * ![PrimeReact](https://www.primefaces.org/primereact/images/logo-100.png)
         */
        'data-pr-mousetracktop'?: number | undefined;
        /**
         * Defines left position of the tooltip in relation to the mouse when the mouseTrack is enabled.
         * @defaultValue 5
         * _Note: this feature will be active when there is a PrimeReact {@link tooltip} component on the page._
         *
         * ![PrimeReact](https://www.primefaces.org/primereact/images/logo-100.png)
         */
        'data-pr-mousetrackleft'?: number | undefined;
        /**
         * Delay to show the tooltip in milliseconds.
         * @defaultValue 0
         * _Note: this feature will be active when there is a PrimeReact {@link tooltip} component on the page._
         *
         * ![PrimeReact](https://www.primefaces.org/primereact/images/logo-100.png)
         */
        'data-pr-showdelay'?: number | undefined;
        /**
         * Delay to update the tooltip in milliseconds.
         * @defaultValue 0
         * _Note: this feature will be active when there is a PrimeReact {@link tooltip} component on the page._
         *
         * ![PrimeReact](https://www.primefaces.org/primereact/images/logo-100.png)
         */
        'data-pr-updatedelay'?: number | undefined;
        /**
         * Delay to hide the tooltip in milliseconds.
         * @defaultValue 0
         * _Note: this feature will be active when there is a PrimeReact {@link tooltip} component on the page._
         *
         * ![PrimeReact](https://www.primefaces.org/primereact/images/logo-100.png)
         */
        'data-pr-hidedelay'?: number | undefined;
        /**
         * Whether to hide tooltip when hovering over tooltip content.
         * @defaultValue true
         * _Note: this feature will be active when there is a PrimeReact {@link tooltip} component on the page._
         *
         * ![PrimeReact](https://www.primefaces.org/primereact/images/logo-100.png)
         */
        'data-pr-autohide'?: boolean | undefined;
        /**
         * Whether to show tooltip for disabled elements.
         * @defaultValue false
         * _Note: this feature will be active when there is a PrimeReact {@link tooltip} component on the page._
         *
         * ![PrimeReact](https://www.primefaces.org/primereact/images/logo-100.png)
         */
        'data-pr-showondisabled'?: boolean | undefined;
    }
}
