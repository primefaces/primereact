/**
 *
 * MenuPortal is a component that displays a portal.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menuportal
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { MenuInstance } from './Menu.types';

/**
 * Defines passthrough(pt) options type in MenuPortal component.
 */
export type MenuPortalPassThroughType<E> = PassThroughType<MenuPortalInstance, E>;

/**
 * Defines passthrough(pt) options of MenuPortal component.
 */
export interface MenuPortalPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: MenuPortalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in MenuPortal component.
 */
export interface MenuPortalProps extends BaseComponentProps<MenuPortalInstance, unknown, MenuPortalPassThrough> {}

/**
 * Defines valid state in MenuPortal component.
 */
export interface MenuPortalState {}

/**
 * Defines the methods and properties exposed by MenuPortal component.
 */
export interface MenuPortalExposes {
    /**
     * Instance of the Menu component.
     */
    menu: MenuInstance | undefined | null;
}

/**
 * Instance of MenuPortal component.
 */
export type MenuPortalInstance = ComponentInstance<MenuPortalProps, MenuPortalState, MenuPortalExposes>;
