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
import type { BaseComponentProps, PassThroughType } from '..';
import type { ChipInstance } from './Chip.types';

/**
 * Defines passthrough(pt) options type in ChipRemoveIcon component.
 */
export type ChipRemoveIconPassThroughType<E> = PassThroughType<ChipRemoveIconInstance, E>;

/**
 * Defines passthrough(pt) options of ChipRemoveIcon component.
 */
export interface ChipRemoveIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ChipRemoveIconPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ChipRemoveIcon component.
 */
export interface ChipRemoveIconProps extends BaseComponentProps<ChipRemoveIconInstance> {}

/**
 * Defines valid state in ChipRemoveIcon component.
 */
export interface ChipRemoveIconState {}

/**
 * Defines the methods and properties exposed by ChipRemoveIcon component.
 */
export interface ChipRemoveIconExposes {
    /**
     * The Chip component instance.
     */
    chip: ChipInstance | undefined | null;
}

/**
 * Instance of ChipRemoveIcon component.
 */
export type ChipRemoveIconInstance = ComponentInstance<ChipRemoveIconProps, ChipRemoveIconState, ChipRemoveIconExposes, ChipRemoveIconPassThrough>;
