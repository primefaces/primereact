/**
 *
 * Chip represents entities using icons, labels and images.
 *
 * [Live Demo](https://www.primereact.org/chip/)
 *
 * @module chip
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';
import type { useChipExposes, useChipProps, useChipState } from './useChip.types';

/**
 * Defines passthrough(pt) options type in Chip component.
 */
export type ChipPassThroughOptionType<E> = PassThroughOptionType<ChipInstance, E>;

/**
 * Defines passthrough(pt) options of Chip component.
 */
export interface ChipPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ChipPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Chip component.
 */
export interface ChipProps extends BaseComponentProps<useChipProps> {}

/**
 * Defines valid state in Chip component.
 * @extends useChipState
 */
export interface ChipState extends useChipState {}

/**
 * Defines the methods and properties exposed by Chip component.
 * @extends useChipExposes
 */
export interface ChipExposes extends useChipExposes {}

/**
 * Instance of Chip component.
 */
export type ChipInstance = ComponentInstance<ChipProps, ChipState, ChipExposes>;
