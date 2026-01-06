/**
 *
 * Chip represents entities using icons, labels and images.
 *
 * [Live Demo](https://www.primereact.org/chip/)
 *
 * @module chiproot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useChipExposes, useChipProps, useChipState } from './useChip.types';

/**
 * Defines passthrough(pt) options type in Chip component.
 */
export type ChipRootPassThroughType<E> = PassThroughType<ChipRootInstance, E>;

/**
 * Defines passthrough(pt) options of Chip component.
 */
export interface ChipRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ChipRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: ChipRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the image's DOM element.
     */
    image?: ChipRootPassThroughType<React.HTMLAttributes<HTMLImageElement>>;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: ChipRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the remove icon's DOM element.
     */
    removeIcon?: ChipRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in Chip component.
 */
export interface ChipRootProps extends BaseComponentProps<ChipRootInstance, useChipProps, ChipRootPassThrough> {}

/**
 * Defines valid state in Chip component.
 * @extends useChipState
 */
export interface ChipRootState extends useChipState {}

/**
 * Defines the methods and properties exposed by Chip component.
 * @extends useChipExposes
 */
export interface ChipRootExposes extends useChipExposes {}

/**
 * Instance of Chip component.
 */
export type ChipRootInstance = ComponentInstance<ChipRootProps, ChipRootState, ChipRootExposes>;
