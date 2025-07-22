/**
 *
 * SliderThumb is a component that displays a thumb.
 *
 * [Live Demo](https://www.primereact.org/slider/)
 *
 * @module sliderthumb
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SliderInstance } from './Slider.types';

/**
 * Defines passthrough(pt) options type in SliderThumb component.
 */
export type SliderThumbPassThroughType<E> = PassThroughType<SliderThumbInstance, E>;

/**
 * Defines passthrough(pt) options of SliderThumb component.
 */
export interface SliderThumbPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SliderThumbPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SliderThumb component.
 */
export interface SliderThumbProps extends BaseComponentProps<SliderThumbInstance, unknown, SliderThumbPassThrough> {
    /**
     * Index of the element in tabbing order.
     * @default 0
     */
    tabIndex?: number | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
}

/**
 * Defines valid state in SliderThumb component.
 */
export interface SliderThumbState {}

/**
 * Defines the methods and properties exposed by SliderThumb component.
 */
export interface SliderThumbExposes {
    /**
     * The Slider component instance.
     */
    slider: SliderInstance | undefined | null;
}

/**
 * Instance of SliderThumb component.
 */
export type SliderThumbInstance = ComponentInstance<SliderThumbProps, SliderThumbState, SliderThumbExposes>;
