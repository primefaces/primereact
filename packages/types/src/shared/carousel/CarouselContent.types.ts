/**
 *
 * CarouselContent is a component that displays content inside a Carousel.
 *
 * [Live Demo](https://www.primereact.org/carousel/)
 *
 * @module carouselcontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CarouselInstance } from './Carousel.types';

/**
 * Defines passthrough(pt) options type in CarouselContent component.
 */
export type CarouselContentPassThroughType<E> = PassThroughType<CarouselContentInstance, E>;

/**
 * Defines passthrough(pt) options of CarouselContent component.
 */
export interface CarouselContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CarouselContentPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CarouselContent component.
 */
export interface CarouselContentProps extends BaseComponentProps<CarouselContentInstance, unknown, CarouselContentPassThrough> {}

/**
 * Defines valid state in CarouselContent component.
 */
export interface CarouselContentState {}

/**
 * Defines the methods and properties exposed by CarouselContent component.
 */
export interface CarouselContentExposes {
    /**
     * The Carousel component instance.
     */
    carousel: CarouselInstance | undefined | null;
}

/**
 * Instance of CarouselContent component.
 */
export type CarouselContentInstance = ComponentInstance<CarouselContentProps, CarouselContentState, CarouselContentExposes>;
