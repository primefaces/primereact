/**
 *
 * CompareIndicator is a component that displays the indicator.
 *
 * [Live Demo](https://www.primereact.org/compare/)
 *
 * @module compareindicator
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CompareRootInstance } from './CompareRoot.types';

/**
 * Defines passthrough(pt) options type in CompareIndicator component.
 */
export type CompareIndicatorPassThroughType<E> = PassThroughType<CompareIndicatorInstance, E>;

/**
 * Defines passthrough(pt) options of CompareIndicator component.
 */
export interface CompareIndicatorPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CompareIndicatorPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in CompareIndicator component.
 */
export interface CompareIndicatorProps extends BaseComponentProps<CompareIndicatorInstance, unknown, CompareIndicatorPassThrough> {}

/**
 * Defines valid state in CompareIndicator component.
 */
export interface CompareIndicatorState {}

/**
 * Defines the methods and properties exposed by CompareIndicator component.
 */
export interface CompareIndicatorExposes {
    /**
     * The Compare component instance.
     */
    compare: CompareRootInstance | undefined | null;
}

/**
 * Instance of CompareIndicator component.
 */
export type CompareIndicatorInstance = ComponentInstance<CompareIndicatorProps, CompareIndicatorState, CompareIndicatorExposes>;
