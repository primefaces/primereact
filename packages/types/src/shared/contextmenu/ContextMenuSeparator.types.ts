/**
 *
 * ContextMenuSeparator is a component that displays  separator.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenuseparator
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { MenuInstance } from '../menu';
import type { ContextMenuInstance } from './ContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenuSeparator component.
 */
export type ContextMenuSeparatorPassThroughType<E> = PassThroughType<ContextMenuSeparatorInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuSeparator component.
 */
export interface ContextMenuSeparatorPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ContextMenuSeparatorPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in ContextMenuSeparator component.
 */
export interface ContextMenuSeparatorProps extends BaseComponentProps<ContextMenuSeparatorInstance, unknown, ContextMenuSeparatorPassThrough> {}

/**
 * Defines valid state in ContextMenuSeparator component.
 */
export interface ContextMenuSeparatorState {}

/**
 * Defines the methods and properties exposed by ContextMenuSeparator component.
 */
export interface ContextMenuSeparatorExposes {
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
 * Instance of ContextMenuSeparator component.
 */
export type ContextMenuSeparatorInstance = ComponentInstance<ContextMenuSeparatorProps, ContextMenuSeparatorState, ContextMenuSeparatorExposes>;
