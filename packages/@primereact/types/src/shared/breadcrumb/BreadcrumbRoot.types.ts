/**
 *
 * Breadcrumb provides contextual information about page hierarchy.
 *
 * [Live Demo](https://www.primereact.org/breadcrumb/)
 *
 * @module breadcrumbroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useBreadcrumbExposes, useBreadcrumbProps, useBreadcrumbState } from './useBreadcrumb.types';

/**
 * Defines passthrough(pt) options type in Breadcrumb component.
 */
export type BreadcrumbRootPassThroughType<E> = PassThroughType<BreadcrumbRootInstance, E>;

/**
 * Defines passthrough(pt) options of Breadcrumb component.
 */
export interface BreadcrumbRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: BreadcrumbRootPassThroughType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: BreadcrumbRootPassThroughType<React.HTMLAttributes<HTMLOListElement>>;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: BreadcrumbRootPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: BreadcrumbRootPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: BreadcrumbRootPassThroughType<React.HTMLAttributes<SVGElement>>;
}

/**
 * Defines valid properties in Breadcrumb component.
 */
export interface BreadcrumbRootProps extends BaseComponentProps<BreadcrumbRootInstance, useBreadcrumbProps, BreadcrumbRootPassThrough> {
    /**
     * Alignment of the content.
     */
    align?: 'left' | 'center' | 'right' | 'top' | 'center' | 'bottom' | undefined;
    /**
     * Specifies the orientation, valid values are 'horizontal' and 'vertical'.
     * @default horizontal
     */
    orientation?: 'horizontal' | 'vertical' | undefined;
    /**
     * Border style type.
     * @default solid
     */
    type?: 'solid' | 'dashed' | 'dotted' | undefined;
}

/**
 * Defines valid state in Breadcrumb component.
 * @extends useBreadcrumbState
 */
export interface BreadcrumbRootState extends useBreadcrumbState {}

/**
 * Defines the methods and properties exposed by Breadcrumb component.
 * @extends useBreadcrumbExposes
 */
export interface BreadcrumbRootExposes extends useBreadcrumbExposes {}

/**
 * Instance of Breadcrumb component.
 */
export type BreadcrumbRootInstance = ComponentInstance<BreadcrumbRootProps, BreadcrumbRootState, BreadcrumbRootExposes>;
