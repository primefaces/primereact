/**
 *
 * BreadcrumbList is a component that displays the list.
 *
 * [Live Demo](https://www.primereact.org/breadcrumb/)
 *
 * @module breadcrumblist
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { BreadcrumbInstance } from './Breadcrumb.types';

/**
 * Defines passthrough(pt) options type in BreadcrumbList component.
 */
export type BreadcrumbListPassThroughType<E> = PassThroughType<BreadcrumbListInstance, E>;

/**
 * Defines passthrough(pt) options of BreadcrumbList component.
 */
export interface BreadcrumbListPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: BreadcrumbListPassThroughType<React.HTMLAttributes<HTMLOListElement>>;
}

/**
 * Defines valid properties in BreadcrumbList component.
 */
export interface BreadcrumbListProps extends BaseComponentProps<BreadcrumbListInstance, unknown, BreadcrumbListPassThrough> {}

/**
 * Defines valid state in BreadcrumbList component.
 */
export interface BreadcrumbListState {}

/**
 * Defines the methods and properties exposed by BreadcrumbList component.
 */
export interface BreadcrumbListExposes {
    /**
     * Instance of the Breadcrumb component.
     */
    breadcrumb: BreadcrumbInstance | undefined | null;
}

/**
 * Instance of BreadcrumbList component.
 */
export type BreadcrumbListInstance = ComponentInstance<BreadcrumbListProps, BreadcrumbListState, BreadcrumbListExposes>;
