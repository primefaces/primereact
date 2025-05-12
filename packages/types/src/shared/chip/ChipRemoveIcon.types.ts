/**
 *
 * ChipRemoveIcon component is a part of the Chip component.
 *
 * [Live Demo](https://www.primereact.org/chip/)
 *
 * @module chipremoveicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';

/**
 * Defines passthrough(pt) options type in ChipRemoveIcon component.
 */
export type ChipRemoveIconPassThroughOptionType<E> = PassThroughOptionType<ChipRemoveIconInstance, E>;

/**
 * Defines passthrough(pt) options of ChipRemoveIcon component.
 */
export interface ChipRemoveIconPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ChipRemoveIconPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ChipRemoveIcon component.
 */
export interface ChipRemoveIconProps extends BaseComponentProps {}

/**
 * Defines valid state in ChipRemoveIcon component.
 */
export interface ChipRemoveIconState {}

/**
 * Defines the methods and properties exposed by ChipRemoveIcon component.
 */
export interface ChipRemoveIconExposes {}

/**
 * Instance of ChipRemoveIcon component.
 */
export type ChipRemoveIconInstance = ComponentInstance<ChipRemoveIconProps, ChipRemoveIconState, ChipRemoveIconExposes>;
