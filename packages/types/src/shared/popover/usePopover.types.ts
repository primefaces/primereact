/**
 * The usePopover manages the state and functionality of a popover component.
 *
 * [Live Demo](https://www.primereact.org/popover/)
 *
 * @module usePopover
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Popover breakpoint metadata.
 */
export interface PopoverBreakpoints {
    /**
     * Breakpoint for responsive mode.
     *
     * Example:
     *
     * <Popover :breakpoints="{'960px': '75vw', '640px': '100vw'}" ... />
     *
     * Result:
     *
     * @media screen and (max-width: ${breakpoint[key]}) {
     *      .p-popover[attributeSelector] {
     *          width: ${breakpoint[value]} !important;
     *      }
     * }
     */
    [key: string]: string;
}
/**
 * Event fired when the checkbox's checked state changes.
 */
export interface usePopoverOpenChangeEvent {
    /**
     * The open state of the popover.
     */
    value: boolean;
}

/**
 * Defines valid properties in usePopover.
 */
export interface usePopoverProps {
    /**
     * Whether the popover is open by default.
     * @default undefined
     */
    defaultOpen?: boolean | undefined;
    /**
     * Whether the popover is open.
     * @default undefined
     */
    open?: boolean | undefined;
    /**
     * Callback to invoke when the open state changes.
     * @default undefined
     */
    onOpenChange?: (event: usePopoverOpenChangeEvent) => void;
    /**
     * Enables to hide the overlay when outside is clicked.
     * @default true
     */
    dismissable?: boolean;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @default body
     */
    appendTo?: 'body' | 'self' | undefined | HTMLElement;
    /**
     * Base zIndex value to use in layering.
     * @default 0
     */
    baseZIndex?: number;
    /**
     * Whether to automatically manage layering.
     * @default true
     */
    autoZIndex?: boolean;
    /**
     * Object literal to define widths per screen size.
     */
    breakpoints?: PopoverBreakpoints;
    /**
     * Specifies if pressing escape key should hide the dialog.
     * @default true
     */
    closeOnEscape?: boolean | undefined;
}

/**
 * Defines valid state in usePopover.
 */
export interface usePopoverState {
    /**
     * Current visible state as a boolean.
     * @default false
     */
    visible: boolean;
}

/**
 * Defines the methods and properties exposed by usePopover.
 */
export interface usePopoverExposes {
    /**
     * Hides the popover.
     */
    hide: () => void;
    /**
     * Shows the popover.
     */
    show: () => void;
    /**
     * The function to handle the content keydown event.
     */
    onContentKeydown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    /**
     * A valid query selector or an HTMLElement to specify where the trigger gets attached.
     * @default undefined
     */
    triggerRef?: React.RefObject<{ elementRef: React.RefObject<HTMLElement> }> | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the container gets attached.
     * @default undefined
     */
    containerRef?: React.RefObject<{ elementRef: React.RefObject<HTMLElement> }> | undefined;
    /**
     * Callback fired before enter animation.
     */
    onBeforeEnter?: () => void;
    /**
     * Callback fired on leave.
     */
    onLeave?: () => void;
    /**
     * Callback fired after leave animation.
     */
    onAfterLeave?: () => void;
    /**
     * Callback fired when the overlay is clicked.
     */
    onOverlayClick?: () => void;
}

/**
 * Instance of usePopover headless.
 */
export type usePopoverInstance = HeadlessInstance<usePopoverProps, usePopoverState, usePopoverExposes>;
