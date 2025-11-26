/**
 *
 * ContextMenuItem is a component that displays item.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenuitem
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { MenuInstance } from '../menu';
import type { ContextMenuInstance } from './ContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenuItem component.
 */
export type ContextMenuItemPassThroughType<E> = PassThroughType<ContextMenuItemInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuItem component.
 */
export interface ContextMenuItemPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ContextMenuItemPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ContextMenuItem component.
 */
export interface ContextMenuItemProps extends BaseComponentProps<ContextMenuItemInstance, unknown, ContextMenuItemPassThrough> {}

/**
 * Defines valid state in ContextMenuItem component.
 */
export interface ContextMenuItemState {}

/**
 * Defines the methods and properties exposed by ContextMenuItem component.
 */
export interface ContextMenuItemExposes {
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
 * Instance of ContextMenuItem component.
 */
export type ContextMenuItemInstance = ComponentInstance<ContextMenuItemProps, ContextMenuItemState, ContextMenuItemExposes>;
