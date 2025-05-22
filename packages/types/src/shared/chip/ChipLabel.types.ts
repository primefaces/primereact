/**
 *
 * ChipLabel component is a part of the Chip component.
 *
 * [Live Demo](https://www.primereact.org/chip/)
 *
 * @module chiplabel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ChipInstance } from './Chip.types';

/**
 * Defines passthrough(pt) options type in ChipLabel component.
 */
export type ChipLabelPassThroughType<E> = PassThroughType<ChipLabelInstance, E>;

/**
 * Defines passthrough(pt) options of ChipLabel component.
 */
export interface ChipLabelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ChipLabelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ChipLabel component.
 */
export interface ChipLabelProps extends BaseComponentProps<ChipLabelInstance> {}

/**
 * Defines valid state in ChipLabel component.
 */
export interface ChipLabelState {}

/**
 * Defines the methods and properties exposed by ChipLabel component.
 */
export interface ChipLabelExposes {
    /**
     * The Chip component instance.
     */
    chip: ChipInstance | undefined | null;
}

/**
 * Instance of ChipLabel component.
 */
export type ChipLabelInstance = ComponentInstance<ChipLabelProps, ChipLabelState, ChipLabelExposes, ChipLabelPassThrough>;
