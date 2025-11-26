/**
 *
 * ContextMenuSub is a component that displays  sub.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenusub
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { MenuInstance } from '../menu';
import type { ContextMenuInstance } from './ContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenuSub component.
 */
export type ContextMenuSubPassThroughType<E> = PassThroughType<ContextMenuSubInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuSub component.
 */
export interface ContextMenuSubPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ContextMenuSubPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ContextMenuSub component.
 */
export interface ContextMenuSubProps extends BaseComponentProps<ContextMenuSubInstance, unknown, ContextMenuSubPassThrough> {}

/**
 * Defines valid state in ContextMenuSub component.
 */
export interface ContextMenuSubState {}

/**
 * Defines the methods and properties exposed by ContextMenuSub component.
 */
export interface ContextMenuSubExposes {
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
 * Instance of ContextMenuSub component.
 */
export type ContextMenuSubInstance = ComponentInstance<ContextMenuSubProps, ContextMenuSubState, ContextMenuSubExposes>;
