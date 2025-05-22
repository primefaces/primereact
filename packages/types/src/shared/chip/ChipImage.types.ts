/**
 *
 * ChipImage component is a part of the Chip component.
 *
 * [Live Demo](https://www.primereact.org/chip/)
 *
 * @module chipimage
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ChipInstance } from './Chip.types';

/**
 * Defines passthrough(pt) options type in ChipImage component.
 */
export type ChipImagePassThroughType<E> = PassThroughType<ChipImageInstance, E>;

/**
 * Defines passthrough(pt) options of ChipImage component.
 */
export interface ChipImagePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ChipImagePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ChipImage component.
 */
export interface ChipImageProps extends BaseComponentProps<ChipImageInstance> {}

/**
 * Defines valid state in ChipImage component.
 */
export interface ChipImageState {}

/**
 * Defines the methods and properties exposed by ChipImage component.
 */
export interface ChipImageExposes {
    /**
     * The Chip component instance.
     */
    chip: ChipInstance | undefined | null;
}

/**
 * Instance of ChipImage component.
 */
export type ChipImageInstance = ComponentInstance<ChipImageProps, ChipImageState, ChipImageExposes, ChipImagePassThrough>;
