/**
 *
 * ContextMenuList is a component that displays  list.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenulist
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { MenuListPassThrough } from '@primereact/types/shared/menu';
import type { BaseComponentProps, PassThroughType } from '..';
import { MenuInstance } from '../menu';
import type { ContextMenuInstance } from './ContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenuList component.
 */
export type ContextMenuListPassThroughType<E> = PassThroughType<ContextMenuListInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuList component.
 * @extends MenuListPassThrough
 */
export interface ContextMenuListPassThrough extends MenuListPassThrough {}

/**
 * Defines valid properties in ContextMenuList component.
 */
export interface ContextMenuListProps extends BaseComponentProps<ContextMenuListInstance, unknown, ContextMenuListPassThrough> {}

/**
 * Defines valid state in ContextMenuList component.
 */
export interface ContextMenuListState {}

/**
 * Defines the methods and properties exposed by ContextMenuList component.
 */
export interface ContextMenuListExposes {
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
 * Instance of ContextMenuList component.
 */
export type ContextMenuListInstance = ComponentInstance<ContextMenuListProps, ContextMenuListState, ContextMenuListExposes>;
