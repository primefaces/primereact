/**
 *
 * CompareItem is a component that displays a item.
 *
 * [Live Demo](https://www.primereact.org/compare/)
 *
 * @module compareitem
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CompareRootInstance } from './CompareRoot.types';

/**
 * Defines passthrough(pt) options type in CompareItem component.
 */
export type CompareItemPassThroughType<E> = PassThroughType<CompareItemInstance, E>;

/**
 * Defines passthrough(pt) options of CompareItem component.
 */
export interface CompareItemPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CompareItemPassThroughType<React.HTMLAttributes<HTMLImageElement>>;
}

/**
 * Defines valid properties in CompareItem component.
 */
export interface CompareItemProps extends BaseComponentProps<CompareItemInstance, unknown, CompareItemPassThrough> {}

/**
 * Defines valid state in CompareItem component.
 */
export interface CompareItemState {}

/**
 * Defines the methods and properties exposed by CompareItem component.
 */
export interface CompareItemExposes {
    /**
     * The Compare component instance.
     */
    compare: CompareRootInstance | undefined | null;
}

/**
 * Instance of CompareItem component.
 */
export type CompareItemInstance = ComponentInstance<CompareItemProps, CompareItemState, CompareItemExposes>;
