/**
 *
 *  Carousel is a flexible container component.
 *
 * [Live Demo](https://www.primereact.org/carousel/)
 *
 * @module carouselroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useCarouselExposes, useCarouselProps, useCarouselState } from './useCarousel.types';

/**
 * Defines passthrough(pt) options type in Carousel component.
 */
export type CarouselRootPassThroughType<E> = PassThroughType<CarouselRootInstance, E>;

/**
 * Defines passthrough(pt) options of Carousel component.
 */
export interface CarouselRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CarouselRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Carousel component.
 */
export interface CarouselRootProps extends BaseComponentProps<CarouselRootInstance, useCarouselProps, CarouselRootPassThrough> {}

/**
 * Defines valid state in Carousel component.
 * @extends useCarouselState
 */
export interface CarouselRootState extends useCarouselState {}

/**
 * Defines the methods and properties exposed by Carousel component.
 * @extends useCarouselExposes
 */
export interface CarouselRootExposes extends useCarouselExposes {}

/**
 * Instance of Carousel component.
 */
export type CarouselRootInstance = ComponentInstance<CarouselRootProps, CarouselRootState, CarouselRootExposes>;
