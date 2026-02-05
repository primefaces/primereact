/**
 *
 * SliderTrack is a component that displays a track.
 *
 * [Live Demo](https://www.primereact.org/slider/)
 *
 * @module slidertrack
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SliderRootInstance } from './SliderRoot.types';

/**
 * Defines passthrough(pt) options type in SliderTrack component.
 */
export type SliderTrackPassThroughType<E> = PassThroughType<SliderTrackInstance, E>;

/**
 * Defines passthrough(pt) options of SliderTrack component.
 */
export interface SliderTrackPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SliderTrackPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SliderTrack component.
 */
export interface SliderTrackProps extends BaseComponentProps<SliderTrackInstance, unknown, SliderTrackPassThrough> {}

/**
 * Defines valid state in SliderTrack component.
 */
export interface SliderTrackState {}

/**
 * Defines the methods and properties exposed by SliderTrack component.
 */
export interface SliderTrackExposes {
    /**
     * The Slider component instance.
     */
    slider: SliderRootInstance | undefined | null;
}

/**
 * Instance of SliderTrack component.
 */
export type SliderTrackInstance = ComponentInstance<SliderTrackProps, SliderTrackState, SliderTrackExposes>;
