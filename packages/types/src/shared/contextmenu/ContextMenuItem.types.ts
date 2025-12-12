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
import type { MenuItemPassThrough } from '@primereact/types/shared/menu';
import type { BaseComponentProps, PassThroughType } from '..';
import { MenuInstance } from '../menu';
import type { ContextMenuInstance } from './ContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenuItem component.
 */
export type ContextMenuItemPassThroughType<E> = PassThroughType<ContextMenuItemInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuItem component.
 * @extends MenuItemPassThrough
 */
export interface ContextMenuItemPassThrough extends MenuItemPassThrough {}

/**
 * Defines valid properties in ContextMenuItem component.
 */
export interface ContextMenuItemProps extends BaseComponentProps<ContextMenuItemInstance, unknown, ContextMenuItemPassThrough> {
    /**
     * When present, it specifies that the item should be disabled.
     */
    disabled?: boolean | undefined;
}

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
