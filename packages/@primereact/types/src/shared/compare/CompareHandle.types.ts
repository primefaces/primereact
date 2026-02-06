/**
 *
 * CompareHandle is a component that displays the handle.
 *
 * [Live Demo](https://www.primereact.org/compare/)
 *
 * @module comparehandle
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CompareRootInstance } from './CompareRoot.types';

/**
 * Defines passthrough(pt) options type in CompareHandle component.
 */
export type CompareHandlePassThroughType<E> = PassThroughType<CompareHandleInstance, E>;

/**
 * Defines passthrough(pt) options of CompareHandle component.
 */
export interface CompareHandlePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CompareHandlePassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CompareHandle component.
 */
export interface CompareHandleProps extends BaseComponentProps<CompareHandleInstance, unknown, CompareHandlePassThrough> {}

/**
 * Defines valid state in CompareHandle component.
 */
export interface CompareHandleState {}

/**
 * Defines the methods and properties exposed by CompareHandle component.
 */
export interface CompareHandleExposes {
    /**
     * The Compare component instance.
     */
    compare: CompareRootInstance | undefined | null;
}

/**
 * Instance of CompareHandle component.
 */
export type CompareHandleInstance = ComponentInstance<CompareHandleProps, CompareHandleState, CompareHandleExposes>;
