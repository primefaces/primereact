/**
 *
 * ImageCompareSlider is a component that displays a slider.
 *
 * [Live Demo](https://www.primereact.org/imagecompare/)
 *
 * @module imagecompare
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ImageCompareInstance } from './ImageCompare.types';

/**
 * Defines passthrough(pt) options type in ImageCompareSlider component.
 */
export type ImageCompareSliderPassThroughType<E> = PassThroughType<ImageCompareSliderInstance, E>;

/**
 * Defines passthrough(pt) options of ImageCompareSlider component.
 */
export interface ImageCompareSliderPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ImageCompareSliderPassThroughType<React.HTMLAttributes<HTMLInputElement>>;
}

/**
 * Defines valid properties in ImageCompareSlider component.
 */
export interface ImageCompareSliderProps extends BaseComponentProps<ImageCompareSliderInstance, unknown, ImageCompareSliderPassThrough> {}

/**
 * Defines valid state in ImageCompareSlider component.
 */
export interface ImageCompareSliderState {}

/**
 * Defines the methods and properties exposed by ImageCompareSlider component.
 */
export interface ImageCompareSliderExposes {
    /**
     * The Switch component instance.
     */
    imagecompare: ImageCompareInstance | undefined | null;
}

/**
 * Instance of ImageCompareSlider component.
 */
export type ImageCompareSliderInstance = ComponentInstance<ImageCompareSliderProps, ImageCompareSliderState, ImageCompareSliderExposes>;
