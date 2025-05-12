/**
 *
 * InplaceContent component is a part of the PrimeReact library.
 *
 * [Live Demo](https://www.primereact.org/inplace/)
 *
 * @module inplacecontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';

/**
 * Defines passthrough(pt) options type in InplaceContent component.
 */
export type InplaceContentPassThroughOptionType<E> = PassThroughOptionType<InplaceContentInstance, E>;

/**
 * Defines passthrough(pt) options of InplaceContent component.
 */
export interface InplaceContentPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InplaceContentPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in InplaceContent component.
 */
export interface InplaceContentProps extends BaseComponentProps {}

/**
 * Defines valid state in InplaceContent component.
 */
export interface InplaceContentState {}

/**
 * Defines the methods and properties exposed by InplaceContent component.
 */
export interface InplaceContentExposes {}

/**
 * Instance of InplaceContent component.
 */
export type InplaceContentInstance = ComponentInstance<InplaceContentProps, InplaceContentState, InplaceContentExposes>;
