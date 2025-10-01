/**
 *
 * CarouselItem is a component that displays an item inside a Carousel.
 *
 * [Live Demo](https://www.primereact.org/carousel/)
 *
 * @module carouselitem
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CarouselInstance } from './Carousel.types';

/**
 * Defines passthrough(pt) options type in CarouselItem component.
 */
export type CarouselItemPassThroughType<E> = PassThroughType<CarouselItemInstance, E>;

/**
 * Defines passthrough(pt) options of CarouselItem   component.
 */
export interface CarouselItemPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CarouselItemPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CarouselItem component.
 */
export interface CarouselItemProps extends BaseComponentProps<CarouselItemInstance, unknown, CarouselItemPassThrough> {
    size?: number;
}

/**
 * Defines valid state in CarouselItem component.
 */
export interface CarouselItemState {}

/**
 * Defines the methods and properties exposed by CarouselItem component.
 */
export interface CarouselItemExposes {
    /**
     * The Carousel component instance.
     */
    carousel: CarouselInstance | undefined | null;
}

/**
 * Instance of CarouselItem component.
 */
export type CarouselItemInstance = ComponentInstance<CarouselItemProps, CarouselItemState, CarouselItemExposes>;
