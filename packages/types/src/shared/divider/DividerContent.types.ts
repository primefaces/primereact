/**
 *
 * DividerContent is a component that displays the content.
 *
 * [Live Demo](https://www.primereact.org/divider/)
 *
 * @module dividercontent
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DividerInstance } from './Divider.types';

/**
 * Defines passthrough(pt) options type in DividerContent component.
 */
export type DividerContentPassThroughType<E> = PassThroughType<DividerContentInstance, E>;

/**
 * Defines passthrough(pt) options of DividerContent component.
 */
export interface DividerContentPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DividerContentPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in DividerContent component.
 */
export interface DividerContentProps extends BaseComponentProps<DividerContentInstance, unknown, DividerContentPassThrough> {}

/**
 * Defines valid state in DividerContent component.
 */
export interface DividerContentState {}

/**
 * Defines the methods and properties exposed by DividerContent component.
 */
export interface DividerContentExposes {
    /**
     * Instance of the Divider component.
     */
    divider: DividerInstance | undefined | null;
}

/**
 * Instance of DividerContent component.
 */
export type DividerContentInstance = ComponentInstance<DividerContentProps, DividerContentState, DividerContentExposes>;
