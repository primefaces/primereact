/**
 *
 * ContextMenuRadioIcon is a component that displays radio icon.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenuradioicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { MenuRadioIconPassThrough } from '@primereact/types/shared/menu';
import type { BaseComponentProps, PassThroughType } from '..';
import { MenuInstance } from '../menu';
import type { ContextMenuInstance } from './ContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenuRadioIcon component.
 */
export type ContextMenuRadioIconPassThroughType<E> = PassThroughType<ContextMenuRadioIconInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuRadioIcon component.
 * @extends MenuRadioIconPassThrough
 */
export interface ContextMenuRadioIconPassThrough extends MenuRadioIconPassThrough {}

/**
 * Defines valid properties in ContextMenuRadioIcon component.
 */
export interface ContextMenuRadioIconProps extends BaseComponentProps<ContextMenuRadioIconInstance, unknown, ContextMenuRadioIconPassThrough> {}

/**
 * Defines valid state in ContextMenuRadioIcon component.
 */
export interface ContextMenuRadioIconState {}

/**
 * Defines the methods and properties exposed by ContextMenuRadioIcon component.
 */
export interface ContextMenuRadioIconExposes {
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
 * Instance of ContextMenuRadioIcon component.
 */
export type ContextMenuRadioIconInstance = ComponentInstance<ContextMenuRadioIconProps, ContextMenuRadioIconState, ContextMenuRadioIconExposes>;
