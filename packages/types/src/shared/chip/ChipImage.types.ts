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
import type { BaseComponentProps, PassThroughOptionType } from '..';
import { ChipInstance } from './Chip.types';

/**
 * Defines passthrough(pt) options type in ChipImage component.
 */
export type ChipImagePassThroughOptionType<E> = PassThroughOptionType<ChipImageInstance, E>;

/**
 * Defines passthrough(pt) options of ChipImage component.
 */
export interface ChipImagePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ChipImagePassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ChipImage component.
 */
export interface ChipImageProps extends BaseComponentProps {}

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
export type ChipImageInstance = ComponentInstance<ChipImageProps, ChipImageState, ChipImageExposes>;
