/**
 *
 * ChipIcon component is a part of the Chip component.
 *
 * [Live Demo](https://www.primereact.org/chip/)
 *
 * @module chipicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';
import { ChipInstance } from './Chip.types';

/**
 * Defines passthrough(pt) options type in ChipIcon component.
 */
export type ChipIconPassThroughOptionType<E> = PassThroughOptionType<ChipIconInstance, E>;

/**
 * Defines passthrough(pt) options of ChipIcon component.
 */
export interface ChipIconPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ChipIconPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ChipIcon component.
 */
export interface ChipIconProps extends BaseComponentProps<ChipIconInstance> {}

/**
 * Defines valid state in ChipIcon component.
 */
export interface ChipIconState {}

/**
 * Defines the methods and properties exposed by ChipIcon component.
 */
export interface ChipIconExposes {
    /**
     * The Chip component instance.
     */
    chip: ChipInstance | undefined | null;
}

/**
 * Instance of ChipIcon component.
 */
export type ChipIconInstance = ComponentInstance<ChipIconProps, ChipIconState, ChipIconExposes>;
