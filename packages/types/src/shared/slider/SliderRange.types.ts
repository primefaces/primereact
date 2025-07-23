/**
 *
 * SliderRange is a component that displays a range.
 *
 * [Live Demo](https://www.primereact.org/slider/)
 *
 * @module sliderrange
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SliderInstance } from './Slider.types';

/**
 * Defines passthrough(pt) options type in SliderRange component.
 */
export type SliderRangePassThroughType<E> = PassThroughType<SliderRangeInstance, E>;

/**
 * Defines passthrough(pt) options of SliderRange component.
 */
export interface SliderRangePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SliderRangePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SliderRange component.
 */
export interface SliderRangeProps extends BaseComponentProps<SliderRangeInstance, unknown, SliderRangePassThrough> {}

/**
 * Defines valid state in SliderRange component.
 */
export interface SliderRangeState {}

/**
 * Defines the methods and properties exposed by SliderRange component.
 */
export interface SliderRangeExposes {
    /**
     * The Slider component instance.
     */
    slider: SliderInstance | undefined | null;
}

/**
 * Instance of SliderRange component.
 */
export type SliderRangeInstance = ComponentInstance<SliderRangeProps, SliderRangeState, SliderRangeExposes>;
