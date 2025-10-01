/**
 *
 * CarouselIndicators is a component that displays indicators for the Carousel.
 *
 * [Live Demo](https://www.primereact.org/carousel/)
 *
 * @module carouselindicators
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CarouselInstance } from './Carousel.types';

/**
 * Defines passthrough(pt) options type in CarouselIndicators component.
 */
export type CarouselIndicatorsPassThroughType<E> = PassThroughType<CarouselIndicatorsInstance, E>;

/**
 * Defines passthrough(pt) options of CarouselIndicators component.
 */
export interface CarouselIndicatorsPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CarouselIndicatorsPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CarouselIndicators component.
 */
export interface CarouselIndicatorsProps extends BaseComponentProps<CarouselIndicatorsInstance, unknown, CarouselIndicatorsPassThrough> {}

/**
 * Defines valid state in CarouselIndicators component.
 */
export interface CarouselIndicatorsState {}

/**
 * Defines the methods and properties exposed by CarouselIndicators component.
 */
export interface CarouselIndicatorsExposes {
    /**
     * The Carousel component instance.
     */
    carousel: CarouselInstance | undefined | null;
}

/**
 * Instance of CarouselIndicators component.
 */
export type CarouselIndicatorsInstance = ComponentInstance<CarouselIndicatorsProps, CarouselIndicatorsState, CarouselIndicatorsExposes>;
