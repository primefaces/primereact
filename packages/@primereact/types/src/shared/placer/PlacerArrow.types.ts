/**
 *
 * Placer component is used to position elements relative to other elements.
 *
 * [Live Demo](https://www.primereact.org/placerarrow/)
 *
 * @module placerarrow
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';

/**
 * Defines passthrough(pt) options type in PlacerArrow component.
 */
export type PlacerArrowPassThroughType<E> = PassThroughType<PlacerArrowInstance, E>;

/**
 * Defines passthrough(pt) options of PlacerArrow component.
 */
export interface PlacerArrowPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: PlacerArrowPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in PlacerArrow component.
 */
export interface PlacerArrowProps extends BaseComponentProps<PlacerArrowInstance, unknown, PlacerArrowPassThrough> {}

/**
 * Defines valid state in PlacerArrow component.
 */
export interface PlacerArrowState {}

/**
 * Defines the methods and properties exposed by PlacerArrow component.
 */
export interface PlacerArrowExposes {}

/**
 * Instance of PlacerArrow component.
 */
export type PlacerArrowInstance = ComponentInstance<PlacerArrowProps, PlacerArrowState, PlacerArrowExposes>;
