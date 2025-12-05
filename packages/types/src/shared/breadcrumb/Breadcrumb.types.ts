/**
 *
 * Breadcrumb provides contextual information about page hierarchy.
 *
 * [Live Demo](https://www.primereact.org/breadcrumb/)
 *
 * @module breadcrumb
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useBreadcrumbExposes, useBreadcrumbProps, useBreadcrumbState } from './useBreadcrumb.types';

/**
 * Defines passthrough(pt) options type in Breadcrumb component.
 */
export type BreadcrumbPassThroughType<E> = PassThroughType<BreadcrumbInstance, E>;

/**
 * Defines passthrough(pt) options of Breadcrumb component.
 */
export interface BreadcrumbPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: BreadcrumbPassThroughType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Used to pass attributes to the list's DOM element.
     */
    list?: BreadcrumbPassThroughType<React.HTMLAttributes<HTMLOListElement>>;
    /**
     * Used to pass attributes to the item's DOM element.
     */
    item?: BreadcrumbPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: BreadcrumbPassThroughType<React.HTMLAttributes<HTMLLIElement>>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: BreadcrumbPassThroughType<React.HTMLAttributes<SVGElement>>;
}

/**
 * Defines valid properties in Breadcrumb component.
 */
export interface BreadcrumbProps extends BaseComponentProps<BreadcrumbInstance, useBreadcrumbProps, BreadcrumbPassThrough> {
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
export interface BreadcrumbState extends useBreadcrumbState {}

/**
 * Defines the methods and properties exposed by Breadcrumb component.
 * @extends useBreadcrumbExposes
 */
export interface BreadcrumbExposes extends useBreadcrumbExposes {}

/**
 * Defines the CSS class names used in the Breadcrumb component.
 */
export const BreadcrumbClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-breadcrumb',
    /**
     * Class name of the list element
     */
    list: 'p-breadcrumb-list',
    /**
     * Class name of the item element
     */
    item: 'p-breadcrumb-item',
    /**
     * Class name of the separator element
     */
    separator: 'p-breadcrumb-separator',
    /**
     * Class name of the icon element
     */
    icon: 'p-breadcrumb-separator-icon'
} as const;

/**
 * Type representing the CSS class names used in the Breadcrumb component.
 */
export type BreadcrumbClassNamesType = (typeof BreadcrumbClassNames)[keyof typeof BreadcrumbClassNames];

/**
 * Instance of Breadcrumb component.
 */
export type BreadcrumbInstance = ComponentInstance<BreadcrumbProps, BreadcrumbState, BreadcrumbExposes>;
