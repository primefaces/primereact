/**
 *
 * CompareSlider is a component that displays a slider.
 *
 * [Live Demo](https://www.primereact.org/compare/)
 *
 * @module compareslider
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CompareRootInstance } from './CompareRoot.types';

/**
 * Defines passthrough(pt) options type in CompareSlider component.
 */
export type CompareSliderPassThroughType<E> = PassThroughType<CompareSliderInstance, E>;

/**
 * Defines passthrough(pt) options of CompareSlider component.
 */
export interface CompareSliderPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CompareSliderPassThroughType<React.HTMLAttributes<HTMLInputElement>>;
}

/**
 * Defines valid properties in CompareSlider component.
 */
export interface CompareSliderProps extends BaseComponentProps<CompareSliderInstance, unknown, CompareSliderPassThrough> {}

/**
 * Defines valid state in CompareSlider component.
 */
export interface CompareSliderState {}

/**
 * Defines the methods and properties exposed by CompareSlider component.
 */
export interface CompareSliderExposes {
    /**
     * The Compare component instance.
     */
    compare: CompareRootInstance | undefined | null;
}

/**
 * Instance of CompareSlider component.
 */
export type CompareSliderInstance = ComponentInstance<CompareSliderProps, CompareSliderState, CompareSliderExposes>;
