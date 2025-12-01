/**
 *
 * BreadcrumbItem is a component that displays the item.
 *
 * [Live Demo](https://www.primereact.org/breadcrumb/)
 *
 * @module breadcrumbitem
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { BreadcrumbInstance } from './Breadcrumb.types';

/**
 * Defines passthrough(pt) options type in BreadcrumbItem component.
 */
export type BreadcrumbItemPassThroughType<E> = PassThroughType<BreadcrumbItemInstance, E>;

/**
 * Defines passthrough(pt) options of BreadcrumbItem component.
 */
export interface BreadcrumbItemPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: BreadcrumbItemPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
}

/**
 * Defines valid properties in BreadcrumbItem component.
 */
export interface BreadcrumbItemProps extends BaseComponentProps<BreadcrumbItemInstance, unknown, BreadcrumbItemPassThrough> {
    /**
     * Unique key for the option. Used for identification.
     */
    uKey?: PropertyKey;
    /**
     * Specifies if the item is disabled.
     */
    disabled?: boolean;
    /**
     * Specifies if the item is the current one.
     */
    isCurrent?: boolean;
}

/**
 * Defines valid state in BreadcrumbItem component.
 */
export interface BreadcrumbItemState {}

/**
 * Defines the methods and properties exposed by BreadcrumbItem component.
 */
export interface BreadcrumbItemExposes {
    /**
     * Instance of the Breadcrumb component.
     */
    breadcrumb: BreadcrumbInstance | undefined | null;
}

/**
 * Instance of BreadcrumbItem component.
 */
export type BreadcrumbItemInstance = ComponentInstance<BreadcrumbItemProps, BreadcrumbItemState, BreadcrumbItemExposes>;
