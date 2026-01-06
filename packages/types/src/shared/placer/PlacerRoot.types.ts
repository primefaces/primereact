/**
 *
 * Placer component is used to position elements relative to other elements.
 *
 * [Live Demo](https://www.primereact.org/placer/)
 *
 * @module placer
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { usePlacerExposes, usePlacerProps, usePlacerState } from './usePlacer.types';

/**
 * Defines passthrough(pt) options type in Placer component.
 */
export type PlacerRootPassThroughType<E> = PassThroughType<PlacerRootInstance, E>;

/**
 * Defines passthrough(pt) options of Placer component.
 */
export interface PlacerRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PlacerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Placer component.
 */
export interface PlacerRootProps extends BaseComponentProps<PlacerRootInstance, usePlacerProps, PlacerRootPassThrough> {}

/**
 * Defines valid state in Placer component.
 * @extends usePlacerState
 */
export interface PlacerRootState extends usePlacerState {}

/**
 * Defines the methods and properties exposed by Placer component.
 * @extends usePlacerExposes
 */
export interface PlacerRootExposes extends usePlacerExposes {}

/**
 * Defines the CSS class names used in the Placer component.
 */
export const PlacerClassNames = {} as const;

/**
 * Type representing the CSS class names used in the Placer component.
 */
export type PlacerClassNamesType = (typeof PlacerClassNames)[keyof typeof PlacerClassNames];

/**
 * Instance of Placer component.
 */
export type PlacerRootInstance = ComponentInstance<PlacerRootProps, PlacerRootState, PlacerRootExposes>;
