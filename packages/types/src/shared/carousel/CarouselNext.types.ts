/**
 *
 * CarouselNext is a component that moves to the next item in a Carousel.
 *
 * [Live Demo](https://www.primereact.org/carousel/)
 *
 * @module carouselnext
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CarouselInstance } from './Carousel.types';

/**
 * Defines passthrough(pt) options type in CarouselNext component.
 */
export type CarouselNextPassThroughType<E> = PassThroughType<CarouselNextInstance, E>;

/**
 * Defines passthrough(pt) options of CarouselNext component.
 */
export interface CarouselNextPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CarouselNextPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in CarouselNext component.
 */
export interface CarouselNextProps extends BaseComponentProps<CarouselNextInstance, unknown, CarouselNextPassThrough> {}

/**
 * Defines valid state in CarouselNext component.
 */
export interface CarouselNextState {}

/**
 * Defines the methods and properties exposed by CarouselNext component.
 */
export interface CarouselNextExposes {
    /**
     * The Carousel component instance.
     */
    carousel: CarouselInstance | undefined | null;
}

/**
 * Instance of CarouselNext component.
 */
export type CarouselNextInstance = ComponentInstance<CarouselNextProps, CarouselNextState, CarouselNextExposes>;
