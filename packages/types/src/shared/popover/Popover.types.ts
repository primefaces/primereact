/**
 *
 * Popover component is used to display a popover to the user.
 *
 * [Live Demo](https://www.primereact.org/popover/)
 *
 * @module popover
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { usePopoverExposes, usePopoverProps, usePopoverState } from './usePopover.types';

/**
 * Defines passthrough(pt) options type in Popover component.
 */
export type PopoverPassThroughType<E> = PassThroughType<PopoverInstance, E>;

/**
 * Defines passthrough(pt) options of Popover component.
 */
export interface PopoverPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PopoverPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Popover component.
 */
export interface PopoverProps extends BaseComponentProps<PopoverInstance, usePopoverProps, PopoverPassThrough> {}

/**
 * Defines valid state in Popover component.
 * @extends usePopoverState
 */
export interface PopoverState extends usePopoverState {}

/**
 * Defines the methods and properties exposed by Popover component.
 * @extends usePopoverExposes
 */
export interface PopoverExposes extends usePopoverExposes {}

/**
 * Defines the CSS class names used in the Popover component.
 */
export const PopoverClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-popover',
    /**
     * Class name of the content element
     */
    content: 'p-popover-content'
} as const;

/**
 * Type representing the CSS class names used in the Popover component.
 */
export type PopoverClassNamesType = (typeof PopoverClassNames)[keyof typeof PopoverClassNames];

/**
 * Instance of Popover component.
 */
export type PopoverInstance = ComponentInstance<PopoverProps, PopoverState, PopoverExposes>;
