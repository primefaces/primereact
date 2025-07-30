/**
 *
 * RatingOption is a component that displays the option of a rating.
 *
 * [Live Demo](https://www.primereact.org/rating/)
 *
 * @module ratingoption
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { RatingInstance } from './Rating.types';

/**
 * Defines passthrough(pt) options type in RatingOption component.
 */
export type RatingOptionPassThroughType<E> = PassThroughType<RatingOptionInstance, E>;

/**
 * Defines passthrough(pt) options of RatingOption component.
 */
export interface RatingOptionPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: RatingOptionPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in RatingOption component.
 */
export interface RatingOptionProps extends BaseComponentProps<RatingOptionInstance, unknown, RatingOptionPassThrough> {
    /**
     * Icon for the on state.
     */
    onIcon?: React.ReactNode;
    /**
     * Icon for the off state.
     */
    offIcon?: React.ReactNode;
}

/**
 * Defines valid state in RatingOption component.
 */
export interface RatingOptionState {}

/**
 * Defines the methods and properties exposed by RatingOption component.
 */
export interface RatingOptionExposes {
    /**
     * The Rating component instance.
     */
    rating: RatingInstance | undefined | null;
}

/**
 * Instance of RatingOption component.
 */
export type RatingOptionInstance = ComponentInstance<RatingOptionProps, RatingOptionState, RatingOptionExposes>;
