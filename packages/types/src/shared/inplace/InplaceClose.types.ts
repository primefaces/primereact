/**
 *
 * InplaceClose component is a part of the PrimeReact library.
 *
 * [Live Demo](https://www.primereact.org/inplace/)
 *
 * @module inplaceclose
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';

/**
 * Defines passthrough(pt) options type in InplaceClose component.
 */
export type InplaceClosePassThroughOptionType<E> = PassThroughOptionType<InplaceCloseInstance, E>;

/**
 * Defines passthrough(pt) options of InplaceClose component.
 */
export interface InplaceClosePassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InplaceClosePassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in InplaceClose component.
 */
export interface InplaceCloseProps extends BaseComponentProps {}

/**
 * Defines valid state in InplaceClose component.
 */
export interface InplaceCloseState {}

/**
 * Defines the methods and properties exposed by InplaceClose component.
 */
export interface InplaceCloseExposes {}

/**
 * Instance of InplaceClose component.
 */
export type InplaceCloseInstance = ComponentInstance<InplaceCloseProps, InplaceCloseState, InplaceCloseExposes>;
