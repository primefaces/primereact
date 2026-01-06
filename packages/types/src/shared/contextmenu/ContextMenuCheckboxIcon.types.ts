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
import type { MenuCheckboxIconPassThrough, MenuRootInstance } from '@primereact/types/shared/menu';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ContextMenuRootInstance } from './ContextMenuRoot.types';

/**
 * Defines passthrough(pt) options type in ContextMenuCheckboxIcon component.
 */
export type ContextMenuCheckboxIconPassThroughType<E> = PassThroughType<ContextMenuCheckboxIconInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuCheckboxIcon component.
 * @extends MenuCheckboxIconPassThrough
 */
export interface ContextMenuCheckboxIconPassThrough extends MenuCheckboxIconPassThrough {}

/**
 * Defines valid properties in ContextMenuCheckboxIcon component.
 */
export interface ContextMenuCheckboxIconProps extends BaseComponentProps<ContextMenuCheckboxIconInstance, unknown, ContextMenuCheckboxIconPassThrough> {}

/**
 * Defines valid state in ContextMenuCheckboxIcon component.
 */
export interface ContextMenuCheckboxIconState {}

/**
 * Defines the methods and properties exposed by ContextMenuCheckboxIcon component.
 */
export interface ContextMenuCheckboxIconExposes {
    /**
     * The ContextMenu component instance.
     */
    contextmenu: ContextMenuRootInstance | undefined | null;
    /**
     * Instance of the Menu component.
     */
    menu: MenuRootInstance | undefined | null;
}

/**
 * Instance of ContextMenuCheckboxIcon component.
 */
export type ContextMenuCheckboxIconInstance = ComponentInstance<ContextMenuCheckboxIconProps, ContextMenuCheckboxIconState, ContextMenuCheckboxIconExposes>;
