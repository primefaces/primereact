/**
 *
 * SelectFooter is the footer container for the Select footer.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module selectfooter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SelectRootInstance } from './SelectRoot.types';

/**
 * Defines passthrough(pt) options type in SelectFooter component.
 */
export type SelectFooterPassThroughType<E> = PassThroughType<SelectFooterInstance, E>;

/**
 * Defines passthrough(pt) options of SelectFooter component.
 */
export interface SelectFooterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectFooterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SelectFooter component.
 */
export interface SelectFooterProps extends BaseComponentProps<SelectFooterInstance, unknown, SelectFooterPassThrough> {}

/**
 * Defines valid state in SelectFooter component.
 */
export interface SelectFooterState {}

/**
 * Defines the methods and properties exposed by SelectFooter component.
 */
export interface SelectFooterExposes {
    /**
     * The Select component instance.
     */
    select: SelectRootInstance | undefined | null;
}

/**
 * Instance of SelectFooter component.
 */
export type SelectFooterInstance = ComponentInstance<SelectFooterProps, SelectFooterState, SelectFooterExposes>;
