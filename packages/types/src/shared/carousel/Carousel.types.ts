/**
 *
 *  Carousel is a flexible container component.
 *
 * [Live Demo](https://www.primereact.org/carousel/)
 *
 * @module carousel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useCarouselExposes, useCarouselProps, useCarouselState } from './useCarousel.types';

/**
 * Defines passthrough(pt) options type in Carousel component.
 */
export type CarouselPassThroughType<E> = PassThroughType<CarouselInstance, E>;

/**
 * Defines passthrough(pt) options of Carousel component.
 */
export interface CarouselPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CarouselPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Carousel component.
 */
export interface CarouselProps extends BaseComponentProps<CarouselInstance, useCarouselProps, CarouselPassThrough> {}

/**
 * Defines valid state in Carousel component.
 * @extends useCarouselState
 */
export interface CarouselState extends useCarouselState {}

/**
 * Defines the methods and properties exposed by Carousel component.
 * @extends useCarouselExposes
 */
export interface CarouselExposes extends useCarouselExposes {}

/**
 * Defines the CSS class names used in the Carousel component.
 */
export const CarouselClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-carousel'
} as const;

/**
 * Type representing the CSS class names used in the Carousel component.
 */
export type CarouselClassNamesType = (typeof CarouselClassNames)[keyof typeof CarouselClassNames];

/**
 * Instance of Carousel component.
 */
export type CarouselInstance = ComponentInstance<CarouselProps, CarouselState, CarouselExposes>;
