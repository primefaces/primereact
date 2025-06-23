/**
 *
 * Splitter is utilized to separate and resize panels.
 *
 * [Live Demo](https://www.primereact.org/splitter/)
 *
 * @module splitter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useSplitterExposes, useSplitterProps, useSplitterState } from './useSplitter.types';

/**
 * Defines passthrough(pt) options type in Splitter component.
 */
export type SplitterPassThroughType<E> = PassThroughType<SplitterInstance, E>;

/**
 * Defines passthrough(pt) options of Splitter component.
 */
export interface SplitterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SplitterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: SplitterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the gutter's DOM element.
     */
    gutter?: SplitterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the thumb's DOM element.
     */
    thumb?: SplitterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Splitter component.
 */
export interface SplitterProps extends BaseComponentProps<SplitterInstance, useSplitterProps, SplitterPassThrough> {}

/**
 * Defines valid state in Splitter component.
 * @extends useSplitterState
 */
export interface SplitterState extends useSplitterState {}

/**
 * Defines the methods and properties exposed by Splitter component.
 * @extends useSplitterExposes
 */
export interface SplitterExposes extends useSplitterExposes {}

/**
 * Defines the CSS class names used in the Splitter component.
 */
export const SplitterClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-splitter',
    /**
     * Class name of the panel element
     */
    panel: 'p-splitterpanel',
    /**
     * Class name of the gutter element
     */
    gutter: 'p-splitter-gutter',
    /**
     * Class name of the thumb element
     */
    thumb: 'p-splitter-gutter-handle'
} as const;

/**
 * Type representing the CSS class names used in the Splitter component.
 */
export type SplitterClassNamesType = (typeof SplitterClassNames)[keyof typeof SplitterClassNames];

/**
 * Instance of Splitter component.
 */
export type SplitterInstance = ComponentInstance<SplitterProps, SplitterState, SplitterExposes>;
