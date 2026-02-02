/**
 *
 * CompareThumb is a component that displays a thumb.
 *
 * [Live Demo](https://www.primereact.org/compare/)
 *
 * @module comparethumb
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CompareRootInstance } from './CompareRoot.types';

/**
 * Defines passthrough(pt) options type in CompareThumb component.
 */
export type CompareThumbPassThroughType<E> = PassThroughType<CompareThumbInstance, E>;

/**
 * Defines passthrough(pt) options of CompareThumb component.
 */
export interface CompareThumbPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CompareThumbPassThroughType<React.HTMLAttributes<HTMLImageElement>>;
}

/**
 * Defines valid properties in CompareThumb component.
 */
export interface CompareThumbProps extends BaseComponentProps<CompareThumbInstance, unknown, CompareThumbPassThrough> {}

/**
 * Defines valid state in CompareThumb component.
 */
export interface CompareThumbState {}

/**
 * Defines the methods and properties exposed by CompareThumb component.
 */
export interface CompareThumbExposes {
    /**
     * The Compare component instance.
     */
    compare: CompareRootInstance | undefined | null;
}

/**
 * Instance of CompareThumb component.
 */
export type CompareThumbInstance = ComponentInstance<CompareThumbProps, CompareThumbState, CompareThumbExposes>;
