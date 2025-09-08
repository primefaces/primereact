/**
 *
 * CarouselPrev is a component that moves to the previous item in a Carousel.
 *
 * [Live Demo](https://www.primereact.org/carousel/)
 *
 * @module carouselprev
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CarouselInstance } from './Carousel.types';

/**
 * Defines passthrough(pt) options type in CarouselPrev component.
 */
export type CarouselPrevPassThroughType<E> = PassThroughType<CarouselPrevInstance, E>;

/**
 * Defines passthrough(pt) options of CarouselPrev component.
 */
export interface CarouselPrevPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CarouselPrevPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in CarouselPrev component.
 */
export interface CarouselPrevProps extends BaseComponentProps<CarouselPrevInstance, unknown, CarouselPrevPassThrough> {}

/**
 * Defines valid state in CarouselPrev component.
 */
export interface CarouselPrevState {}

/**
 * Defines the methods and properties exposed by CarouselPrev component.
 */
export interface CarouselPrevExposes {
    /**
     * The Carousel component instance.
     */
    carousel: CarouselInstance | undefined | null;
}

/**
 * Instance of CarouselPrev component.
 */
export type CarouselPrevInstance = ComponentInstance<CarouselPrevProps, CarouselPrevState, CarouselPrevExposes>;
