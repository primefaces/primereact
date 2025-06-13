/**
 *
 * SplitterGutter is a component that displays a gutter.
 *
 * [Live Demo](https://www.primereact.org/splitter/)
 *
 * @module splittergutter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SplitterInstance } from './Splitter.types';

/**
 * Defines passthrough(pt) options type in SplitterGutter component.
 */
export type SplitterGutterPassThroughType<E> = PassThroughType<SplitterGutterInstance, E>;

/**
 * Defines passthrough(pt) options of SplitterGutter component.
 */
export interface SplitterGutterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SplitterGutterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SplitterGutter component.
 */
export interface SplitterGutterProps extends BaseComponentProps<SplitterGutterInstance> {}

/**
 * Defines valid state in SplitterGutter component.
 */
export interface SplitterGutterState {}

/**
 * Defines the methods and properties exposed by SplitterGutter component.
 */
export interface SplitterGutterExposes {
    /**
     * The Splitter component instance.
     */
    splitter: SplitterInstance | undefined | null;
}

/**
 * Instance of SplitterGutter component.
 */
export type SplitterGutterInstance = ComponentInstance<SplitterGutterProps, SplitterGutterState, SplitterGutterExposes, SplitterGutterPassThrough>;
