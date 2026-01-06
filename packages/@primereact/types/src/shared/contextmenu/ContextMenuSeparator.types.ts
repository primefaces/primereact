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
import type { MenuRootInstance, MenuSeparatorPassThrough } from '@primereact/types/shared/menu';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ContextMenuRootInstance } from './ContextMenuRoot.types';

/**
 * Defines passthrough(pt) options type in ContextMenuSeparator component.
 */
export type ContextMenuSeparatorPassThroughType<E> = PassThroughType<ContextMenuSeparatorInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuSeparator component.
 * @extends MenuSeparatorPassThrough
 */
export interface ContextMenuSeparatorPassThrough extends MenuSeparatorPassThrough {}

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
    contextmenu: ContextMenuRootInstance | undefined | null;
    /**
     * Instance of the Menu component.
     */
    menu: MenuRootInstance | undefined | null;
}

/**
 * Instance of ContextMenuSeparator component.
 */
export type ContextMenuSeparatorInstance = ComponentInstance<ContextMenuSeparatorProps, ContextMenuSeparatorState, ContextMenuSeparatorExposes>;
