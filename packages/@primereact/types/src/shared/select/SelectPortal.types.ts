/**
 *
 * SelectPortal is the overlay container for the Select component.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module selectportal
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { PortalProps } from '@primereact/types/shared/portal';
import type { SelectRootInstance } from './SelectRoot.types';

/**
 * Defines passthrough(pt) options type in SelectPortal component.
 */
export type SelectPortalPassThroughType<E> = PassThroughType<SelectPortalInstance, E>;

/**
 * Defines passthrough(pt) options of SelectPortal component.
 */
export interface SelectPortalPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectPortalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SelectPortal component.
 */
export interface SelectPortalProps extends BaseComponentProps<SelectPortalInstance, PortalProps, SelectPortalPassThrough> {}

/**
 * Defines valid state in SelectPortal component.
 */
export interface SelectPortalState {}

/**
 * Defines the methods and properties exposed by SelectPortal component.
 */
export interface SelectPortalExposes {
    /**
     * The Select component instance.
     */
    select: SelectRootInstance | undefined | null;
}

/**
 * Instance of SelectPortal component.
 */
export type SelectPortalInstance = ComponentInstance<SelectPortalProps, SelectPortalState, SelectPortalExposes>;
