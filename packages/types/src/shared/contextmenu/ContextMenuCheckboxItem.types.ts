/**
 *
 * ContextMenuCheckboxItem is a component that displays checkbox item.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenucheckboxitem
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { MenuCheckboxItemInstance, MenuCheckboxItemPassThrough, MenuCheckboxItemState, MenuInstance } from '../menu';
import type { ContextMenuInstance } from './ContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenuCheckboxItem component.
 */
export type ContextMenuCheckboxItemPassThroughType<E> = PassThroughType<ContextMenuCheckboxItemInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuCheckboxItem component.
 * @extends MenuCheckboxItemPassThrough
 */
export interface ContextMenuCheckboxItemPassThrough extends MenuCheckboxItemPassThrough {}

/**
 * Event object for the onCheckedChange callback.
 */
export interface ContextMenuCheckboxItemCheckedChangeEvent {
    /**
     * The new checked state value.
     */
    value: boolean;
}

/**
 * Defines valid properties in ContextMenuCheckboxItem component.
 */
export interface ContextMenuCheckboxItemProps extends BaseComponentProps<ContextMenuCheckboxItemInstance, Omit<MenuCheckboxItemInstance, 'onCheckedChange'>, ContextMenuCheckboxItemPassThrough> {
    /**
     * When present, it specifies that the item should be disabled.
     */
    disabled?: boolean | undefined;
    /**
     * Callback to invoke when checked state changes.
     */
    onCheckedChange?: (event: ContextMenuCheckboxItemCheckedChangeEvent) => void;
}

/**
 * Defines valid state in ContextMenuCheckboxItem component.
 */
export interface ContextMenuCheckboxItemState extends MenuCheckboxItemState {}

/**
 * Defines the methods and properties exposed by ContextMenuCheckboxItem component.
 */
export interface ContextMenuCheckboxItemExposes {
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
 * Instance of ContextMenuCheckboxItem component.
 */
export type ContextMenuCheckboxItemInstance = ComponentInstance<ContextMenuCheckboxItemProps, ContextMenuCheckboxItemState, ContextMenuCheckboxItemExposes>;
