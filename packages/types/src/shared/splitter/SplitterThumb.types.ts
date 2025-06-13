/**
 *
 * SplitterThumb is a component that displays a thumb.
 *
 * [Live Demo](https://www.primereact.org/splitter/)
 *
 * @module splitterthumb
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SplitterInstance } from './Splitter.types';

/**
 * Defines passthrough(pt) options type in SplitterThumb component.
 */
export type SplitterThumbPassThroughType<E> = PassThroughType<SplitterThumbInstance, E>;

/**
 * Defines passthrough(pt) options of SplitterThumb component.
 */
export interface SplitterThumbPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SplitterThumbPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SplitterThumb component.
 */
export interface SplitterThumbProps extends BaseComponentProps<SplitterThumbInstance> {}

/**
 * Defines valid state in SplitterThumb component.
 */
export interface SplitterThumbState {}

/**
 * Defines the methods and properties exposed by SplitterThumb component.
 */
export interface SplitterThumbExposes {
    /**
     * The Splitter component instance.
     */
    splitter: SplitterInstance | undefined | null;
}

/**
 * Instance of SplitterThumb component.
 */
export type SplitterThumbInstance = ComponentInstance<SplitterThumbProps, SplitterThumbState, SplitterThumbExposes, SplitterThumbPassThrough>;
