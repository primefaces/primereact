/**
 *
 * InplaceDisplay component is a part of the PrimeReact library.
 *
 * [Live Demo](https://www.primereact.org/inplace/)
 *
 * @module inplacedisplay
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { InplaceInstance } from './Inplace.types';

/**
 * Defines passthrough(pt) options type in InplaceDisplay component.
 */
export type InplaceDisplayPassThroughType<E> = PassThroughType<InplaceDisplayInstance, E>;

/**
 * Defines passthrough(pt) options of InplaceDisplay component.
 */
export interface InplaceDisplayPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: InplaceDisplayPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in InplaceDisplay component.
 */
export interface InplaceDisplayProps extends BaseComponentProps<InplaceDisplayInstance> {}

/**
 * Defines valid state in InplaceDisplay component.
 */
export interface InplaceDisplayState {}

/**
 * Defines the methods and properties exposed by InplaceDisplay component.
 */
export interface InplaceDisplayExposes {
    /**
     * The Inplace component instance.
     */
    inplace: InplaceInstance | undefined | null;
}

/**
 * Instance of InplaceDisplay component.
 */
export type InplaceDisplayInstance = ComponentInstance<InplaceDisplayProps, InplaceDisplayState, InplaceDisplayExposes, InplaceDisplayPassThrough>;
