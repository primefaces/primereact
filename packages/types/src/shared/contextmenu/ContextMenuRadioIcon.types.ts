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
import type { BaseComponentProps, PassThroughType } from '..';
import { MenuInstance } from '../menu';
import type { ContextMenuInstance } from './ContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenuRadioIcon component.
 */
export type ContextMenuRadioIconPassThroughType<E> = PassThroughType<ContextMenuRadioIconInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuRadioIcon component.
 */
export interface ContextMenuRadioIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ContextMenuRadioIconPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

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
