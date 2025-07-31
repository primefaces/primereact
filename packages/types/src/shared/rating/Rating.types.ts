/**
 *
 * Rating is a component that displays a rating value.
 *
 * [Live Demo](https://www.primereact.org/rating/)
 *
 * @module rating
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useRatingExposes, useRatingProps, useRatingState } from './useRating.types';

/**
 * Defines passthrough(pt) options type in Rating component.
 */
export type RatingPassThroughType<E> = PassThroughType<RatingInstance, E>;

/**
 * Defines passthrough(pt) options of Rating component.
 */
export interface RatingPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: RatingPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Rating component.
 */
export interface RatingProps extends BaseComponentProps<RatingInstance, useRatingProps, RatingPassThrough> {
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
export interface RatingState extends useRatingState {}

/**
 * Defines the methods and properties exposed by Rating component.
 * @extends useRatingExposes
 */
export interface RatingExposes extends useRatingExposes {}

/**
 * Defines the CSS class names used in the Toolbar component.
 */
export const RatingClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-rating',
    /**
     * Class name of the option element
     */
    option: 'p-rating-option',
    /**
     * Class name of the on icon element
     */
    onIcon: 'p-rating-on-icon',
    /**
     * Class name of the off icon element
     */
    offIcon: 'p-rating-off-icon'
} as const;

/**
 * Type representing the CSS class names used in the Toolbar component.
 */
export type RatingClassNamesType = (typeof RatingClassNames)[keyof typeof RatingClassNames];

/**
 * Instance of Toolbar component.
 */
export type RatingInstance = ComponentInstance<RatingProps, RatingState, RatingExposes>;
