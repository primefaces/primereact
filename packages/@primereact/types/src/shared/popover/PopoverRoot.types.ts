/**
 *
 * Popover component is used to display a popover to the user.
 *
 * [Live Demo](https://www.primereact.org/popover/)
 *
 * @module popoverroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { usePopoverExposes, usePopoverProps, usePopoverState } from './usePopover.types';

/**
 * Defines passthrough(pt) options type in Popover component.
 */
export type PopoverRootPassThroughType<E> = PassThroughType<PopoverRootInstance, E>;

/**
 * Defines passthrough(pt) options of Popover component.
 */
export interface PopoverRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PopoverRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Popover component.
 */
export interface PopoverRootProps extends BaseComponentProps<PopoverRootInstance, usePopoverProps, PopoverRootPassThrough> {}

/**
 * Defines valid state in Popover component.
 * @extends usePopoverState
 */
export interface PopoverRootState extends usePopoverState {}

/**
 * Defines the methods and properties exposed by Popover component.
 * @extends usePopoverExposes
 */
export interface PopoverRootExposes extends usePopoverExposes {}

/**
 * Instance of Popover component.
 */
export type PopoverRootInstance = ComponentInstance<PopoverRootProps, PopoverRootState, PopoverRootExposes>;
