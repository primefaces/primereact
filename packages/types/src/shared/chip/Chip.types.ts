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
import type { BaseComponentProps, PassThroughType } from '..';
import type { useChipExposes, useChipProps, useChipState } from './useChip.types';

/**
 * Defines passthrough(pt) options type in Chip component.
 */
export type ChipPassThroughType<E> = PassThroughType<ChipInstance, E>;

/**
 * Defines passthrough(pt) options of Chip component.
 */
export interface ChipPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ChipPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: ChipPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the image's DOM element.
     */
    image?: ChipPassThroughType<React.HTMLAttributes<HTMLImageElement>>;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: ChipPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the remove icon's DOM element.
     */
    removeIcon?: ChipPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in Chip component.
 */
export interface ChipProps extends BaseComponentProps<ChipInstance, useChipProps, ChipPassThrough> {}

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
 * Defines the CSS class names used in the Chip component.
 */
export const ChipClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-chip',
    /**
     * Class name of the image element
     */
    image: 'p-chip-image',
    /**
     * Class name of the icon element
     */
    icon: 'p-chip-icon',
    /**
     * Class name of the label element
     */
    label: 'p-chip-label',
    /**
     * Class name of the remove icon element
     */
    removeIcon: 'p-chip-remove-icon'
} as const;

/**
 * Type representing the CSS class names used in the Chip component.
 */
export type ChipClassNamesType = (typeof ChipClassNames)[keyof typeof ChipClassNames];

/**
 * Instance of Chip component.
 */
export type ChipInstance = ComponentInstance<ChipProps, ChipState, ChipExposes>;
