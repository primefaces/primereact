/**
 *
 * Splitter is utilized to separate and resize panels.
 *
 * [Live Demo](https://www.primereact.org/splitter/)
 *
 * @module splitterroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useSplitterExposes, useSplitterProps, useSplitterState } from './useSplitter.types';

/**
 * Defines passthrough(pt) options type in Splitter component.
 */
export type SplitterRootPassThroughType<E> = PassThroughType<SplitterRootInstance, E>;

/**
 * Defines passthrough(pt) options of Splitter component.
 */
export interface SplitterRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SplitterRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: SplitterRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the gutter's DOM element.
     */
    gutter?: SplitterRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the thumb's DOM element.
     */
    thumb?: SplitterRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Splitter component.
 */
export interface SplitterRootProps extends BaseComponentProps<SplitterRootInstance, useSplitterProps, SplitterRootPassThrough> {}

/**
 * Defines valid state in Splitter component.
 * @extends useSplitterState
 */
export interface SplitterRootState extends useSplitterState {}

/**
 * Defines the methods and properties exposed by Splitter component.
 * @extends useSplitterExposes
 */
export interface SplitterRootExposes extends useSplitterExposes {}

/**
 * Instance of Splitter component.
 */
export type SplitterRootInstance = ComponentInstance<SplitterRootProps, SplitterRootState, SplitterRootExposes>;
