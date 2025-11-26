/**
 *
 * ContextMenuRadioItem is a component that displays radio item.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenuradioitem
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { MenuInstance } from '../menu';
import type { ContextMenuInstance } from './ContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenuRadioItem component.
 */
export type ContextMenuRadioItemPassThroughType<E> = PassThroughType<ContextMenuRadioItemInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuRadioItem component.
 */
export interface ContextMenuRadioItemPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ContextMenuRadioItemPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ContextMenuRadioItem component.
 */
export interface ContextMenuRadioItemProps extends BaseComponentProps<ContextMenuRadioItemInstance, unknown, ContextMenuRadioItemPassThrough> {}

/**
 * Defines valid state in ContextMenuRadioItem component.
 */
export interface ContextMenuRadioItemState {}

/**
 * Defines the methods and properties exposed by ContextMenuRadioItem component.
 */
export interface ContextMenuRadioItemExposes {
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
 * Instance of ContextMenuRadioItem component.
 */
export type ContextMenuRadioItemInstance = ComponentInstance<ContextMenuRadioItemProps, ContextMenuRadioItemState, ContextMenuRadioItemExposes>;
