/**
 *
 * CarouselIndicator is a component that displays indicator for the Carousel.
 *
 * [Live Demo](https://www.primereact.org/carousel/)
 *
 * @module carouselindicator
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CarouselRootInstance } from './CarouselRoot.types';

/**
 * Defines passthrough(pt) options type in CarouselIndicator component.
 */
export type CarouselIndicatorPassThroughType<E> = PassThroughType<CarouselIndicatorInstance, E>;

/**
 * Defines passthrough(pt) options of CarouselIndicator component.
 */
export interface CarouselIndicatorPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CarouselIndicatorPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CarouselIndicator component.
 */
export interface CarouselIndicatorProps extends BaseComponentProps<CarouselIndicatorInstance, unknown, CarouselIndicatorPassThrough> {
    page?: number;
}

/**
 * Defines valid state in CarouselIndicator component.
 */
export interface CarouselIndicatorState {}

/**
 * Defines the methods and properties exposed by CarouselIndicator component.
 */
export interface CarouselIndicatorExposes {
    /**
     * The Carousel component instance.
     */
    carousel: CarouselRootInstance | undefined | null;
}

/**
 * Instance of CarouselIndicator component.
 */
export type CarouselIndicatorInstance = ComponentInstance<CarouselIndicatorProps, CarouselIndicatorState, CarouselIndicatorExposes>;
