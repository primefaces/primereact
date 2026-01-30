/**
 * The usePopover manages the state and functionality of a popover component.
 *
 * [Live Demo](https://www.primereact.org/popover/)
 *
 * @module usePopover
 * @group headless
 *
 */
import { usePresence } from '@primereact/hooks/use-presence';
import type { HeadlessInstance } from '@primereact/types/core';

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
     * Whether the popover is open.
     */
    open: boolean | undefined;
    /**
     * The anchor element.
     */
    anchorEl: HTMLElement | null;
    /**
     * The positioner element.
     */
    positionerEl: HTMLDivElement | null;
    /**
     * The arrow element.
     */
    arrowEl: HTMLDivElement | null;
}

/**
 * Defines the methods and properties exposed by usePopover.
 */
export interface usePopoverExposes {
    /**
     * The state of the usePopover.
     */
    state: usePopoverState;
    /**
     * The presence of the usePopover.
     */
    presence: ReturnType<typeof usePresence>;
    /**
     * Sets the open state.
     */
    setOpen?: (open: boolean, originalEvent?: Event) => void;
    /**
     * Sets the arrow element.
     */
    setArrowRef?: (node: HTMLDivElement | null) => void;
    /**
     * Sets the anchor element.
     */
    setAnchorRef?: (node: HTMLElement | null) => void;
    /**
     * Sets the positioner element.
     */
    setPositionerRef?: (node: HTMLDivElement | null) => void;
}

/**
 * Instance of usePopover headless.
 */
export type usePopoverInstance = HeadlessInstance<usePopoverProps, usePopoverState, usePopoverExposes>;
