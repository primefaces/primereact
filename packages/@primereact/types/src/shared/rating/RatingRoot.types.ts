/**
 *
 * Rating is a component that displays a rating value.
 *
 * [Live Demo](https://www.primereact.org/rating/)
 *
 * @module ratingroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useRatingExposes, useRatingProps, useRatingState } from './useRating.types';

/**
 * Defines passthrough(pt) options type in Rating component.
 */
export type RatingRootPassThroughType<E> = PassThroughType<RatingRootInstance, E>;

/**
 * Defines passthrough(pt) options of Rating component.
 */
export interface RatingRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: RatingRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Rating component.
 */
export interface RatingRootProps extends BaseComponentProps<RatingRootInstance, useRatingProps, RatingRootPassThrough> {
    /**
     * Name of the element.
     */
    name?: string | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @default false
     */
    invalid?: boolean | undefined;
}

/**
 * Defines valid state in Rating component.
 * @extends useRatingState
 */
export interface RatingRootState extends useRatingState {}

/**
 * Defines the methods and properties exposed by Rating component.
 * @extends useRatingExposes
 */
export interface RatingRootExposes extends useRatingExposes {}

/**
 * Instance of Rating component.
 */
export type RatingRootInstance = ComponentInstance<RatingRootProps, RatingRootState, RatingRootExposes>;
