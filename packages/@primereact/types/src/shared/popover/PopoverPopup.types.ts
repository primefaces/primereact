/**
 *
 * PopoverPopup is a component that displays the popup of a popover.
 *
 * [Live Demo](https://www.primereact.org/popover/)
 *
 * @module popoverpopup
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PopoverRootInstance } from './PopoverRoot.types';

/**
 * Defines passthrough(pt) options type in PopoverPopup component.
 */
export type PopoverPopupPassThroughType<E> = PassThroughType<PopoverPopupInstance, E>;

/**
 * Defines passthrough(pt) options of PopoverPopup component.
 */
export interface PopoverPopupPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PopoverPopupPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PopoverPopup component.
 */
export interface PopoverPopupProps extends BaseComponentProps<PopoverPopupInstance, unknown, PopoverPopupPassThrough> {
    /**
     * Whether to focus the first focusable element when the popover is opened.
     * @default true
     */
    autoFocus?: boolean;
}

/**
 * Defines valid state in PopoverPopup component.
 */
export interface PopoverPopupState {}

/**
 * Defines the methods and properties exposed by PopoverPopup component.
 */
export interface PopoverPopupExposes {
    /**
     * The Popover component instance.
     */
    popover: PopoverRootInstance | undefined | null;
}

/**
 * Instance of PopoverPopup component.
 */
export type PopoverPopupInstance = ComponentInstance<PopoverPopupProps, PopoverPopupState, PopoverPopupExposes>;
