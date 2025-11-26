/**
 *
 * ContextMenuCheckboxIcon is a component that displays checkbox icon.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenucheckboxicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { MenuCheckboxIconInstance, MenuCheckboxIconPassThrough, MenuCheckboxIconState, MenuInstance } from '../menu';
import type { ContextMenuInstance } from './ContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenuCheckboxIcon component.
 */
export type ContextMenuCheckboxIconPassThroughType<E> = PassThroughType<ContextMenuCheckboxIconInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuCheckboxIcon component.
 */
export interface ContextMenuCheckboxIconPassThrough extends MenuCheckboxIconPassThrough {}

/**
 * Event object for the onCheckedChange callback.
 */
export interface ContextMenuCheckboxIconCheckedChangeEvent {
    /**
     * The new checked state value.
     */
    value: boolean;
}

/**
 * Defines valid properties in ContextMenuCheckboxIcon component.
 */
export interface ContextMenuCheckboxIconProps extends BaseComponentProps<ContextMenuCheckboxIconInstance, Omit<MenuCheckboxIconInstance, 'onCheckedChange'>, ContextMenuCheckboxIconPassThrough> {
    /**
     * Callback to invoke when checked state changes.
     */
    onCheckedChange?: (event: ContextMenuCheckboxIconCheckedChangeEvent) => void;
}

/**
 * Defines valid state in ContextMenuCheckboxIcon component.
 */
export interface ContextMenuCheckboxIconState extends MenuCheckboxIconState {}

/**
 * Defines the methods and properties exposed by ContextMenuCheckboxIcon component.
 */
export interface ContextMenuCheckboxIconExposes {
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
 * Instance of ContextMenuCheckboxIcon component.
 */
export type ContextMenuCheckboxIconInstance = ComponentInstance<ContextMenuCheckboxIconProps, ContextMenuCheckboxIconState, ContextMenuCheckboxIconExposes>;
