/**
 *
 * Compare component is used to compare two images side by side with a slider.
 *
 * [Live Demo](https://www.primereact.org/compare/)
 *
 * @module compareroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useCompareExposes, useCompareProps, useCompareState } from './useCompare.types';

/**
 * Defines passthrough(pt) options type in Compare component.
 */
export type CompareRootPassThroughType<E> = PassThroughType<CompareRootInstance, E>;

/**
 * Defines passthrough(pt) options of Compare component.
 */
export interface CompareRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CompareRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in Compare component.
 */
export interface CompareRootProps extends BaseComponentProps<CompareRootInstance, useCompareProps, CompareRootPassThrough> {}

/**
 * Defines valid state in Compare component.
 * @extends useCompareState
 */
export interface CompareRootState extends useCompareState {}

/**
 * Defines the methods and properties exposed by Compare component.
 * @extends useCompareExposes
 */
export interface CompareRootExposes extends useCompareExposes {}

/**
 * Instance of CompareRoot component.
 */
export type CompareRootInstance = ComponentInstance<CompareRootProps, CompareRootState, CompareRootExposes>;
