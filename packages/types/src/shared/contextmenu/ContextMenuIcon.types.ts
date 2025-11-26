/**
 *
 * ContextMenuIcon is a component that displays icon.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenuicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { MenuInstance } from '../menu';
import type { ContextMenuInstance } from './ContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenuIcon component.
 */
export type ContextMenuIconPassThroughType<E> = PassThroughType<ContextMenuIconInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuIcon component.
 */
export interface ContextMenuIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ContextMenuIconPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ContextMenuIcon component.
 */
export interface ContextMenuIconProps extends BaseComponentProps<ContextMenuIconInstance, unknown, ContextMenuIconPassThrough> {}

/**
 * Defines valid state in ContextMenuIcon component.
 */
export interface ContextMenuIconState {}

/**
 * Defines the methods and properties exposed by ContextMenuIcon component.
 */
export interface ContextMenuIconExposes {
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
 * Instance of ContextMenuIcon component.
 */
export type ContextMenuIconInstance = ComponentInstance<ContextMenuIconProps, ContextMenuIconState, ContextMenuIconExposes>;
