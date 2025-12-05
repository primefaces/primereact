/**
 *
 * BreadcrumbSeparator is a component that displays the separator.
 *
 * [Live Demo](https://www.primereact.org/breadcrumb/)
 *
 * @module breadcrumbseparator
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { BreadcrumbInstance } from './Breadcrumb.types';

/**
 * Defines passthrough(pt) options type in BreadcrumbSeparator component.
 */
export type BreadcrumbSeparatorPassThroughType<E> = PassThroughType<BreadcrumbSeparatorInstance, E>;

/**
 * Defines passthrough(pt) options of BreadcrumbSeparator component.
 */
export interface BreadcrumbSeparatorPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: BreadcrumbSeparatorPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: BreadcrumbSeparatorPassThroughType<React.HTMLAttributes<SVGElement>>;
}

/**
 * Defines valid properties in BreadcrumbSeparator component.
 */
export interface BreadcrumbSeparatorProps extends BaseComponentProps<BreadcrumbSeparatorInstance, unknown, BreadcrumbSeparatorPassThrough> {}

/**
 * Defines valid state in BreadcrumbSeparator component.
 */
export interface BreadcrumbSeparatorState {}

/**
 * Defines the methods and properties exposed by BreadcrumbSeparator component.
 */
export interface BreadcrumbSeparatorExposes {
    /**
     * Instance of the Breadcrumb component.
     */
    breadcrumb: BreadcrumbInstance | undefined | null;
}

/**
 * Instance of BreadcrumbSeparator component.
 */
export type BreadcrumbSeparatorInstance = ComponentInstance<BreadcrumbSeparatorProps, BreadcrumbSeparatorState, BreadcrumbSeparatorExposes>;
