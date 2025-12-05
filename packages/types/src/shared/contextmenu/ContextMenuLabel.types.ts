/**
 *
 * ContextMenuLabel is a component that displays label.
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 *
 * @module contextmenulabel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { MenuLabelPassThrough } from '@primereact/types/shared/menu';
import type { BaseComponentProps, PassThroughType } from '..';
import { MenuInstance } from '../menu';
import type { ContextMenuInstance } from './ContextMenu.types';

/**
 * Defines passthrough(pt) options type in ContextMenuLabel component.
 */
export type ContextMenuLabelPassThroughType<E> = PassThroughType<ContextMenuLabelInstance, E>;

/**
 * Defines passthrough(pt) options of ContextMenuLabel component.
 * @extends MenuLabelPassThrough
 */
export interface ContextMenuLabelPassThrough extends MenuLabelPassThrough {}

/**
 * Defines valid properties in ContextMenuLabel component.
 */
export interface ContextMenuLabelProps extends BaseComponentProps<ContextMenuLabelInstance, unknown, ContextMenuLabelPassThrough> {}

/**
 * Defines valid state in ContextMenuLabel component.
 */
export interface ContextMenuLabelState {}

/**
 * Defines the methods and properties exposed by ContextMenuLabel component.
 */
export interface ContextMenuLabelExposes {
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
 * Instance of ContextMenuLabel component.
 */
export type ContextMenuLabelInstance = ComponentInstance<ContextMenuLabelProps, ContextMenuLabelState, ContextMenuLabelExposes>;
