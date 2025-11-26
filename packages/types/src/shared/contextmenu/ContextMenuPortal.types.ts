/**
 *
 * ContextMenuPortal is a component that displays  portal.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenuportal
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { MenuInstance } from '../menu';
import type { ContextMenuInstance } from './ContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenuPortal component.
 */
export type ContextMenuPortalPassThroughType<E> = PassThroughType<ContextMenuPortalInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuPortal component.
 */
export interface ContextMenuPortalPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ContextMenuPortalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ContextMenuPortal component.
 */
export interface ContextMenuPortalProps extends BaseComponentProps<ContextMenuPortalInstance, unknown, ContextMenuPortalPassThrough> {}

/**
 * Defines valid state in ContextMenuPortal component.
 */
export interface ContextMenuPortalState {}

/**
 * Defines the methods and properties exposed by ContextMenuPortal component.
 */
export interface ContextMenuPortalExposes {
    /**
     * The ContextMenu component instance.
     */
    contextmenu: ContextMenuInstance | undefined | null;
    /**
     * Instance of the Menu component.
     */
    menu: MenuInstance | undefined | null;
}

/**
 * Instance of ContextMenuPortal component.
 */
export type ContextMenuPortalInstance = ComponentInstance<ContextMenuPortalProps, ContextMenuPortalState, ContextMenuPortalExposes>;
